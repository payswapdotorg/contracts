// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma abicoder v2;

import './Library.sol';

contract Bribe {

    uint constant DURATION = 7 days; // rewards are released over 7 days
    uint constant PRECISION = 10 ** 18;

    mapping(address => bool) public isIncentive; // confirms if the incentive is currently valid for the gauge/bribe
    address public contractAddress;

    // default snx staking contract implementation
    mapping(address => uint) public rewardRate;
    mapping(address => uint) public periodFinish;
    mapping(address => uint) public lastUpdateTime;
    mapping(address => uint) public rewardPerTokenStored;

    mapping(address => mapping(uint => uint)) public userRewardPerTokenPaid;
    mapping(address => mapping(uint => uint)) public rewards;

    mapping(address => uint) public totalSupply;
    mapping(address => uint) public totalWeight;
    mapping(address => mapping(uint => uint)) public balanceOf;
    mapping(address => mapping(uint => uint)) public paidPayable;

    event Deposit(address indexed from, uint tokenId, uint amount);
    event Withdraw(address indexed from, uint tokenId, uint amount);
    event NotifyReward(address indexed from, address indexed reward, uint amount);

    // simple re-entrancy check
    uint _unlocked = 1;
    modifier lock() {
        require(_unlocked == 1);
        _unlocked = 0;
        _;
        _unlocked = 1;
    }

    function setContractAddress(address __contractAddress) external {
        require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender, "SV1");
        contractAddress = __contractAddress;
    }

    // allows a user to claim rewards for a given token
    function getRewardForOwner(address _ve, uint tokenId, address[] memory tokens) external lock  {
        require(ve(_ve).isApprovedOrOwner(msg.sender, tokenId), "SB3");
        for (uint i = 0; i < tokens.length; i++) {
            uint _reward = earned(tokens[i], tokenId);
            if (_reward > 0) _safeTransfer(tokens[i], msg.sender, _reward);
            paidPayable[tokens[i]][tokenId] += _reward;
        }
    }

    function updateTotalSupply(address _token) public {
        totalSupply[_token] = Math.max(totalSupply[_token], erc20(_token).balanceOf(address(this)));
    }

    function earned(address _token, uint tokenId) public view returns (uint) {
        return (totalSupply[_token] * balanceOf[_token][tokenId] / Math.max(1,totalWeight[_token])) - paidPayable[_token][tokenId];
    }

    // This is an external function, but internal notation is used since it can only be called "internally" from BaseV1Gauges
    function _deposit(address _token, uint amount, uint tokenId) external {
        require(msg.sender == IContract(contractAddress).stakeMarketVoter() || msg.sender == IContract(contractAddress).trustBountyVoter(), "SB3");
        totalWeight[_token] += amount;
        balanceOf[_token][tokenId] += amount;

        emit Deposit(_token, tokenId, amount);
    }

    function _withdraw(address _token, uint amount, uint tokenId) external {
        require(msg.sender == IContract(contractAddress).stakeMarketVoter() || msg.sender == IContract(contractAddress).trustBountyVoter(), "SB4");
        if (amount < totalWeight[_token]) {
            totalWeight[_token] -= amount;
        } else {
            totalWeight[_token] = 0;
        }
        if (amount < balanceOf[_token][tokenId]) {
            balanceOf[_token][tokenId] -= amount;
        } else {
            balanceOf[_token][tokenId] = 0;
        }
     
        emit Withdraw(_token, tokenId, amount);
    }

    // used to notify a gauge/bribe of a given reward, this can create griefing attacks by extending rewards
    // TODO: rework to weekly resets, _updatePeriod as per v1 bribes
    function notifyRewardAmount(address token, address _sender, uint amount) external lock {
        _safeTransferFrom(token, _sender, address(this), amount);
        totalSupply[token] += amount;        

        // if it is a new incentive, add it to the stack
        if (isIncentive[token] == false) {
            isIncentive[token] = true;
        }
        emit NotifyReward(_sender, token, amount);
    }

    function _safeTransfer(address token, address to, uint256 value) internal {
        require(token.code.length > 0, "SB10");
        (bool success, bytes memory data) =
        token.call(abi.encodeWithSelector(erc20.transfer.selector, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "SB11");
    }

    function _safeTransferFrom(address token, address from, address to, uint256 value) internal {
        require(token.code.length > 0, "SB12");
        (bool success, bytes memory data) =
        token.call(abi.encodeWithSelector(erc20.transferFrom.selector, from, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "SB13");
    }
}