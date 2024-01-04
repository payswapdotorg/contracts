// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.17;

import "./Library.sol";

// codifies the minting rules as per ve(3,3), abstracted from the token to support any token that allows minting

contract BusinessMinter is ERC721Pausable{
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.AddressSet;

    uint public tokenId = 1;
    uint internal constant week = 86400 * 7; // allows minting once per week (reset every Thursday 00:00 UTC)
    mapping(address => uint) public currentDebt;
    address public contractAddress;
    uint public weekly = 1000000e18; // 1000000 initial tokens
    uint public active_period;
    uint public weeksWithNoDebt;
    EnumerableSet.AddressSet private _ves;
    EnumerableSet.AddressSet private _ve_dists;
    uint internal constant lock = 86400 * 7 * 52 * 4;
    EnumerableSet.AddressSet private _payswapContracts;
    mapping(address => uint) public currentVolume;
    mapping(address => uint) public previousVolume;
    mapping(address => uint) public referralsPercent;
    mapping(address => uint) public businessesPercent;
    mapping(address => uint) public acceleratorPercent;
    mapping(address => uint) public contributorsPercent;
    uint public teamPercent = 100;
    mapping(address => uint) public treasuryFees;
    address internal initializer;
    struct DebtMasterNote {
        address token;
        uint amount;
        uint createdAt;
        uint currentDebt;
    }
    mapping(uint => DebtMasterNote) public notes;

    event Mint(address indexed sender, address _ve, uint weekly);

    constructor() ERC721("DebtMaster", "DebtMaster") {
        initializer = msg.sender;
    }

    function initialize() external {
        require(initializer == msg.sender);
        for (uint i = 0; i < _ves.length(); i++) {
            address _ve = _ves.at(i);
            underlying _token = underlying(ve(_ve).token());
            _token.mint(address(this), weekly);
            _token.approve(address(_ve), weekly);
            IValuePool(_ve).create_lock_for(weekly*2/3, lock, 0, msg.sender);
            treasuryFees[address(_token)] = weekly / 3;
        }
        initializer = address(0);
        active_period = (block.timestamp + week) / week * week;
    }

    function updateParameters(uint _teamPercent) external {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        teamPercent = _teamPercent;   
    }

    function getAllVes() external view returns(address[] memory __ves) {
        __ves = new address[](_ves.length());
        for (uint i = 0; i < _ves.length(); i++) {
            __ves[i] = _ves.at(i);
        }
    }

    function updateVes(address[] memory __ves, bool _add) external {
        require(msg.sender == IAuth(contractAddress).devaddr_());
        for (uint i = 0; i < __ves.length; i++) {
            if (_add) {
                _ves.add(__ves[i]);
            } else {
                _ves.remove(__ves[i]);
            }
        }
    }

    function _updatePercentages(address _ve) internal returns(uint,uint,uint,uint) {
        uint totalWeightReferrals = IVoter(IContract(contractAddress).referralVoter()).totalWeight(_ve);
        uint totalWeightBusinesses = IVoter(IContract(contractAddress).businessVoter()).totalWeight(_ve);
        uint totalWeightAccelerator = IVoter(IContract(contractAddress).acceleratorVoter()).totalWeight(_ve);
        uint totalWeightContributors = IVoter(IContract(contractAddress).contributorVoter()).totalWeight(_ve);
        uint totalWeight = totalWeightReferrals + totalWeightBusinesses + totalWeightAccelerator + totalWeightContributors;
        referralsPercent[_ve] = totalWeightReferrals * 10000 / totalWeight;
        businessesPercent[_ve] = totalWeightBusinesses * 10000 / totalWeight;
        acceleratorPercent[_ve] = totalWeightAccelerator * 10000 / totalWeight;
        contributorsPercent[_ve] = totalWeightContributors * 10000 / totalWeight;
        return (
            totalWeightReferrals * 10000 / totalWeight,
            totalWeightBusinesses * 10000 / totalWeight,
            totalWeightAccelerator * 10000 / totalWeight,
            totalWeightContributors * 10000 / totalWeight
        );
    }

    function setContractAddress(address _contractAddress) external {
        require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender);
        contractAddress = _contractAddress;
    }
    
    // weekly emission takes the max of calculated (aka target) emission versus circulating tail end emission
    // calculate circulating supply as total token supply - locked supply
    function circulating_supply(address _ve) public view returns (uint) {
        return underlying(ve(_ve).token()).totalSupply() - ve(_ve).totalSupply();
    }

    function weekly_emission(address _token) public view returns (uint _amount, uint _toErase) {
        if (currentVolume[_token] >= previousVolume[_token] + currentDebt[_token]) {
            _amount = currentVolume[_token] - previousVolume[_token] - currentDebt[_token];
        }
        _toErase = currentVolume[_token] > previousVolume[_token] && currentDebt[_token] > 0 
        ? currentVolume[_token] - previousVolume[_token] : 0;
    }

    // calculate inflation and adjust ve balances accordingly
    function calculate_growth(address _ve, uint _minted) public view returns (uint) {
        return ve(_ve).totalSupply() * _minted / underlying(ve(_ve).token()).totalSupply();
    }

    function updatePayswapContracts(address _contract, bool _add) external {
        require(msg.sender == IAuth(contractAddress).devaddr_());
        if (_add) {
            _payswapContracts.add(_contract);
        } else {
            _payswapContracts.remove(_contract);
        }
    }

    function withdrawFees(address _token, uint _val) external returns(uint _amount) {
        require(msg.sender == IAuth(contractAddress).devaddr_() && weeksWithNoDebt >= 3);
        _amount = Math.min(_val, treasuryFees[_token] * 1000 / 10000);
        IERC20(_token).safeTransfer(msg.sender, _amount);
        treasuryFees[_token] -= _amount;
        weeksWithNoDebt = 0;
        return _amount;
    }

    function eraseDebtWithTreasuryFund(address _token) external {
        if (currentDebt[_token] < treasuryFees[_token]) {
            treasuryFees[_token] -= currentDebt[_token];
            currentDebt[_token] = 0;
        } else {
            currentDebt[_token] -= treasuryFees[_token];
            treasuryFees[_token] = 0;
        }
    }

    function _getAllWeeklyVolume(address _token) internal {
        uint _totalVolume = INFTicket(IContract(contractAddress).nfticket()).transactionVolume(_token);
        for (uint i = 0; i < _payswapContracts.length(); i++) {
            _totalVolume += IAuditor(_payswapContracts.at(i)).totalProcessed(_token);
        }
        previousVolume[_token] = currentVolume[_token];
        currentVolume[_token] = _totalVolume;
        if (_totalVolume < previousVolume[_token]) {
            currentDebt[_token] += previousVolume[_token] - _totalVolume;
        }
        if (currentDebt[_token] == 0) {
            weeksWithNoDebt += 1;
        }
    }

    // update period can only be called once per cycle (1 week)
    function update_period() external {
        if (block.timestamp >= active_period && initializer == address(0)) { // only trigger if new week
            active_period = (block.timestamp + week) / week * week;
            for (uint i = 0; i < _ves.length(); i++) {
                address _ve = _ves.at(i);
                underlying _token = underlying(ve(_ve).token());
                _getAllWeeklyVolume(address(_token));
                (uint _weekly, uint _toErase) = weekly_emission(address(_token));
                currentDebt[address(_token)] -= _toErase;

                uint _balanceOf = _token.balanceOf(address(this)) - treasuryFees[address(_token)];
                if (_balanceOf < _weekly) {
                    _token.mint(address(this), _weekly - _balanceOf);
                }
                
                // send team's percentage
                uint _treasuryFee = _weekly * teamPercent / 10000;
                treasuryFees[address(_token)] += _treasuryFee;
                uint _weeklyLessTeam = _weekly - _treasuryFee;
                // send other percentages
                (
                    uint _businessesPercent,
                    uint _referralsPercent,
                    uint _contributorsPercent,
                    uint _acceleratorPercent
                ) = _updatePercentages(_ve);
                
                //businesses
                _token.approve(IContract(contractAddress).businessVoter(), _weeklyLessTeam * _businessesPercent / 10000);
                IBusinessVoter(IContract(contractAddress).businessVoter()).notifyRewardAmount(_ve, _weeklyLessTeam * _businessesPercent / 10000);
                
                //referrals
                _token.approve(IContract(contractAddress).referralVoter(), _weeklyLessTeam * _referralsPercent / 10000);
                IBusinessVoter(IContract(contractAddress).referralVoter()).notifyRewardAmount(_ve, _weeklyLessTeam * _referralsPercent / 10000);

                //contributors
                _token.approve(IContract(contractAddress).contributorVoter(), _weeklyLessTeam * _contributorsPercent / 10000);
                IBusinessVoter(IContract(contractAddress).contributorVoter()).notifyRewardAmount(_ve, _weeklyLessTeam * _contributorsPercent / 10000);
                
                //accelerator
                _token.approve(IContract(contractAddress).acceleratorVoter(), _weeklyLessTeam * _acceleratorPercent / 10000);
                IBusinessVoter(IContract(contractAddress).acceleratorVoter()).notifyRewardAmount(_ve, _weeklyLessTeam * _acceleratorPercent / 10000);
                emit Mint(msg.sender, _ve, weekly);
            }   
        }
    }

    function eraseDebtWithDonations(address _token, uint _amount) external {
        require(currentDebt[_token] > 0);
        _amount = Math.min(_amount, currentDebt[_token]);
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        notes[tokenId] = DebtMasterNote({
            amount: _amount,
            currentDebt: currentDebt[_token],
            token: _token,
            createdAt: block.timestamp
        });
        currentDebt[_token] -= _amount;
        _safeMint(msg.sender, tokenId++, msg.data);
    }

    function tokenURI(uint _tokenId) public override view returns (string memory output) {
        uint idx;
        string[] memory optionNames = new string[](5);
        string[] memory optionValues = new string[](5);
        uint decimals = uint(IMarketPlace(notes[_tokenId].token).decimals());
        optionValues[idx++] = toString(_tokenId);
        optionNames[idx] = "Created";
        optionValues[idx++] = toString(notes[_tokenId].createdAt);
        optionNames[idx] = "Symbol, Decimals";
        optionValues[idx++] = string(abi.encodePacked(toString(uint(IMarketPlace(notes[_tokenId].token).decimals())), ", ", IMarketPlace(notes[_tokenId].token).symbol()));
        optionNames[idx] = "Amount";
        optionValues[idx++] = toString(notes[_tokenId].amount);
        optionNames[idx] = "Debt At";
        optionValues[idx++] = toString(notes[_tokenId].currentDebt);
        string[] memory _description = new string[](1);
        _description[0] = "This note is proof you helped alleviate the debt of the free token being displayed at the borders of this NFT";
        return IMarketPlace(IContract(contractAddress).nftSvg()).constructTokenURI(
            _tokenId,
            notes[_tokenId].token,
            ownerOf(_tokenId),
            ownerOf(_tokenId),
            address(0x0),
            new string[](1),
            optionNames,
            optionValues,
            _description
        );
    }

    function toString(uint value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT license
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint temp = value;
        uint digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
