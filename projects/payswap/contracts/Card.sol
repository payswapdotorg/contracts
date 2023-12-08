// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Library.sol";

// Gauges are used to incentivize pools, they emit reward tokens over 7 days for staked LP tokens
contract Card {
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.AddressSet;
    
    uint public adminFee = 100;
    uint public protocolId = 1;
    address public contractAddress;
    mapping(string => EnumerableSet.AddressSet) private _tokens;
    mapping(string => mapping(address => uint)) public balance;
    mapping(string => string) public accounts;
    mapping(address => uint) public treasury;
    mapping(string => uint) public profileId;
    mapping(string => uint) public accountId;

    event UpdatePassword(string _username, string _password);
    event TransferBalance(string from, string to, address token, uint amount);
    event AddBalance(string _username, address token, uint amount);
    event NotifyAddBalance(string _username, string _sessionId, address token, uint amount);
    event RemoveBalance(string _username, address operator, address token, uint amount);
    event ExecutePurchase(
        address collection,
        address token,
        string _username,
        string productId,
        uint isPaywall,
        uint price,
        uint userTokenId,
        uint identityTokenId,
        uint[] options
    );
    mapping(string => mapping(address => uint)) public toBurn;
    event NotifyBurn(string username, address token, uint amount, bool clear);

    // simple re-entrancy check
    uint internal _unlocked = 1;
    modifier lock() {
        require(_unlocked == 1);
        _unlocked = 2;
        _;
        _unlocked = 1;
    }

    modifier onlyAdmin() {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        _;
    }

    modifier onlyAuth(string memory _username) {
        require(IAuth(contractAddress).devaddr_() == msg.sender || 
        profileId[_username] > 0 && profileId[_username] == IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender));
        _;
    }

    function setContractAddress(address _contractAddress) external {
        require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender);
        contractAddress = _contractAddress;
    }

    function createAccount(string memory _username, string memory _password) external {
        require(_isEmpty(accounts[_username]));
        accounts[_username] = _password;
        accountId[_username] = protocolId++;
        emit UpdatePassword(_username, _password);
    }

    function updatePassword(string memory _username, string memory _oldPassword, string memory _password) external onlyAdmin {
        require(_isAccountOwner(_username, _oldPassword), "C5");
        accounts[_username] = _password;
        emit UpdatePassword(_username, _password);
    }

    function updateProfileId(string memory _username, string memory _password, address _owner) external onlyAdmin {
        require(_isAccountOwner(_username, _password), "C3");
        uint _profileId = IProfile(IContract(contractAddress).profile()).addressToProfileId(_owner);
        require(IProfile(IContract(contractAddress).profile()).isUnique(_profileId), "C2");
        profileId[_username] = _profileId;
    }

    function updatePasswordWithProfile(string memory _username, string memory _password) external {
        require(_isEmpty(accounts[_username]));
        uint _profileId = IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender);
        require(profileId[_username] == _profileId && _profileId > 0);
        accounts[_username] = _password;
        emit UpdatePassword(_username, _password);
    }

    function _isEmpty(string memory val) internal pure returns(bool) {
        return keccak256(abi.encodePacked(val)) == keccak256(abi.encodePacked(""));
    }

    function _isAccountOwner(string memory _username, string memory _password) internal view returns(bool) {
        return !_isEmpty(accounts[_username]) && keccak256(abi.encodePacked(accounts[_username])) == keccak256(abi.encodePacked(_password));
    }
    
    function notifyAddBalance(
        address _rampAddress,
        string memory _username, 
        string memory _sessionId, 
        address _token, 
        uint _amount, 
        uint _identityTokenId
    ) external onlyAdmin {
        require(!_isEmpty(accounts[_username]), "C4");
        IRamp(_rampAddress).mint(_token, address(this), _amount, _identityTokenId, _sessionId);
        if (balance[_username][_token] == 0) {
            _tokens[_username].add(_token);
        }
        balance[_username][_token] += _amount;
        IRamp(IContract(contractAddress).rampHelper()).postMint(_sessionId);
        emit NotifyAddBalance(_username, _sessionId, _token, _amount);
    }
    
    function notifyBurn(string memory _username, address _token, uint _amount, bool _clear) external onlyAdmin {
        if (_clear) {
            toBurn[_username][_token] -= _amount;
        } else {
            balance[_username][_token] -= _amount;
            toBurn[_username][_token] += _amount;
        }
        emit NotifyBurn(_username, _token, _amount, _clear);
    }

    function addBalance(string memory _username, address _token, uint _amount) external lock {
        require(!_isEmpty(accounts[_username]), "C6");
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        if (balance[_username][_token] == 0) {
            _tokens[_username].add(_token);
        }
        balance[_username][_token] += _amount * (10000 - adminFee) / 10000;
        treasury[_token] += _amount * adminFee / 10000;

        emit AddBalance(_username, _token, _amount);
    }

    function removeBalance(string memory _username, string memory _password, address _token, address _recipient, uint _amount) public lock onlyAuth(_username) {
        require(_isAccountOwner(_username, _password), "C7");
        if (balance[_username][_token] == _amount || _amount == 0) {
            _tokens[_username].remove(_token);
            IERC20(_token).safeTransfer(_recipient, balance[_username][_token]);
            balance[_username][_token] = 0;
        } else {
            balance[_username][_token] -= _amount;
            IERC20(_token).safeTransfer(_recipient, _amount);
        }

        emit RemoveBalance(_username, _recipient, _token, _amount);
    }

    function transferBalance(
        string memory _username, 
        string memory _password, 
        string memory _recipientUsername, 
        address _token, 
        uint _amount
    ) external onlyAuth(_username) {
        require(_isAccountOwner(_username, _password), "C8");
        if (balance[_username][_token] == _amount || _amount == 0) {
            _tokens[_username].remove(_token);
            balance[_recipientUsername][_token] += balance[_username][_token];
            balance[_username][_token] = 0;
        } else {
            balance[_recipientUsername][_token] += _amount;
            balance[_username][_token] -= _amount;
        }

        emit TransferBalance(_username, _recipientUsername, _token, _amount);
    }

    function executePurchase(
        address _collection,
        address _referrer,
        address _token,
        string memory _username,
        string memory _productId,
        uint _isPaywall,
        uint _price,
        uint _userTokenId,
        uint _identityTokenId,
        uint[] memory _options
    ) external onlyAuth(_username) {
        address marketPlace = _isPaywall == 2 
        ? IContract(contractAddress).paywallMarketTrades()
        : _isPaywall == 1
        ? IContract(contractAddress).nftMarketTrades()
        : IContract(contractAddress).marketTrades();
        require(balance[_username][_token] > _price);

        balance[_username][_token] -= _price;

        erc20(_token).approve(marketPlace, _price);
        IMarketPlace(marketPlace).buyWithContract(
            _collection, 
            address(this),
            _referrer,
            _productId, 
            _userTokenId, 
            _identityTokenId, 
            _options
        );
        emit ExecutePurchase(
            _collection,
            _token,
            _username,
            _productId,
            _isPaywall,
            _price,
            _userTokenId,
            _identityTokenId,
            _options
        );
    }

    function getAllTokens(string memory _username, uint _start) external view returns(address[] memory _allTokens) {
        _allTokens = new address[](_tokens[_username].length() - _start);
        for (uint i = _start; i < _tokens[_username].length(); i++) {
            _allTokens[i] = _tokens[_username].at(i);
        }
    }

    function withdrawTreasury(address _token, uint _amount) external onlyAdmin {
        treasury[_token] -= _amount;
        IERC20(_token).safeTransfer(msg.sender, _amount);
    }
    
}