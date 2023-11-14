// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma abicoder v2;

import './Library.sol';

contract Bribe {
    using SafeERC20 for IERC20;

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
            if (_reward > 0) IERC20(tokens[i]).safeTransfer(msg.sender, _reward);
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
        totalWeight[_token] -= amount;
        balanceOf[_token][tokenId] -= amount;
     
        emit Withdraw(_token, tokenId, amount);
    }

    // used to notify a gauge/bribe of a given reward, this can create griefing attacks by extending rewards
    // TODO: rework to weekly resets, _updatePeriod as per v1 bribes
    function notifyRewardAmount(address token, address _sender, uint amount) external lock {
        IERC20(token).safeTransferFrom(_sender, address(this), amount);
        totalSupply[token] += amount;        

        // if it is a new incentive, add it to the stack
        if (isIncentive[token] == false) {
            isIncentive[token] = true;
        }
        emit NotifyReward(_sender, token, amount);
    }
}