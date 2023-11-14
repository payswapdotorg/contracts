// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.17;
// pragma abicoder v2;

// import './Library.sol';

// // Bribes pay out rewards for a given pool based on the votes that were received from the user (goes hand in hand with BaseV1Gauges.vote())
// contract Bribe {
//     using SafeERC20 for IERC20;
//     address public contractAddress;

//     uint public constant DURATION = 7 days; // rewards are released over 7 days
//     uint public constant PRECISION = 10 ** 18;

//     // default snx staking contract implementation
//     mapping(address => uint) public rewardRate;
//     mapping(address => uint) public periodFinish;
//     mapping(address => uint) public lastUpdateTime;
//     mapping(address => uint) public rewardPerTokenStored;

//     mapping(address => mapping(string => uint)) public lastEarn;
//     mapping(address => mapping(string => uint)) public userRewardPerTokenStored;

//     address[] public rewards;
//     mapping(address => bool) public isReward;

//     mapping(address => uint) public totalSupply;
//     mapping(string => uint) public balanceOf;

//     /// @notice A checkpoint for marking balance
//     struct Checkpoint {
//         uint timestamp;
//         uint balanceOf;
//     }

//     /// @notice A checkpoint for marking reward rate
//     struct RewardPerTokenCheckpoint {
//         uint timestamp;
//         uint rewardPerToken;
//     }

//     /// @notice A checkpoint for marking supply
//     struct SupplyCheckpoint {
//         uint timestamp;
//         uint supply;
//     }

//     /// @notice A record of balance checkpoints for each account, by index
//     mapping (string => mapping (uint => Checkpoint)) public checkpoints;
//     /// @notice The number of checkpoints for each account
//     mapping (string => uint) public numCheckpoints;
//     /// @notice A record of balance checkpoints for each token, by index
//     mapping (uint => mapping(address => SupplyCheckpoint)) public supplyCheckpoints;
//     /// @notice The number of checkpoints
//     mapping(address => uint) public supplyNumCheckpoints;
//     /// @notice A record of balance checkpoints for each token, by index
//     mapping (address => mapping (uint => RewardPerTokenCheckpoint)) public rewardPerTokenCheckpoints;
//     /// @notice The number of checkpoints for each token
//     mapping (address => uint) public rewardPerTokenNumCheckpoints;

//     event Deposit(address indexed from, uint tokenId, uint amount);
//     event Withdraw(address indexed from, uint tokenId, uint amount);
//     event NotifyReward(address indexed from, address indexed reward, uint amount);
//     event ClaimRewards(address indexed from, address indexed reward, uint amount);

//     // simple re-entrancy check
//     uint internal _unlocked = 1;
//     modifier lock() {
//         require(_unlocked == 1);
//         _unlocked = 2;
//         _;
//         _unlocked = 1;
//     }

//     function setContractAddress(address __contractAddress) external {
//         require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender, "SV1");
//         contractAddress = __contractAddress;
//     }
    
//     /**
//     * @notice Determine the prior balance for an account as of a block number
//     * @dev Block number must be a finalized block or else this function will revert to prevent misinformation.
//     * @param tokenId The token of the NFT to check
//     * @param timestamp The timestamp to get the balance at
//     * @return The balance the account had as of the given block
//     */
//     function getPriorBalanceIndex(address _token, uint tokenId, uint timestamp) public view returns (uint) {
//         string memory ve_tokenId = string(abi.encodePacked(_token, tokenId));
//         uint nCheckpoints = numCheckpoints[ve_tokenId];
//         if (nCheckpoints == 0) {
//             return 0;
//         }

//         // First check most recent balance
//         if (checkpoints[ve_tokenId][nCheckpoints - 1].timestamp <= timestamp) {
//             return (nCheckpoints - 1);
//         }

//         // Next check implicit zero balance
//         if (checkpoints[ve_tokenId][0].timestamp > timestamp) {
//             return 0;
//         }

//         uint lower = 0;
//         uint upper = nCheckpoints - 1;
//         while (upper > lower) {
//             uint center = upper - (upper - lower) / 2; // ceil, avoiding overflow
//             Checkpoint memory cp = checkpoints[ve_tokenId][center];
//             if (cp.timestamp == timestamp) {
//                 return center;
//             } else if (cp.timestamp < timestamp) {
//                 lower = center;
//             } else {
//                 upper = center - 1;
//             }
//         }
//         return lower;
//     }

//     function getPriorSupplyIndex(address _token, uint timestamp) public view returns (uint) {
//         uint nCheckpoints = supplyNumCheckpoints[_token];
//         if (nCheckpoints == 0) {
//             return 0;
//         }

//         // First check most recent balance
//         if (supplyCheckpoints[nCheckpoints - 1][_token].timestamp <= timestamp) {
//             return (nCheckpoints - 1);
//         }

//         // Next check implicit zero balance
//         if (supplyCheckpoints[0][_token].timestamp > timestamp) {
//             return 0;
//         }

//         uint lower = 0;
//         uint upper = nCheckpoints - 1;
//         while (upper > lower) {
//             uint center = upper - (upper - lower) / 2; // ceil, avoiding overflow
//             SupplyCheckpoint memory cp = supplyCheckpoints[center][_token];
//             if (cp.timestamp == timestamp) {
//                 return center;
//             } else if (cp.timestamp < timestamp) {
//                 lower = center;
//             } else {
//                 upper = center - 1;
//             }
//         }
//         return lower;
//     }

//     function getPriorRewardPerToken(address token, uint timestamp) public view returns (uint, uint) {
//         uint nCheckpoints = rewardPerTokenNumCheckpoints[token];
//         if (nCheckpoints == 0) {
//             return (0,0);
//         }

//         // First check most recent balance
//         if (rewardPerTokenCheckpoints[token][nCheckpoints - 1].timestamp <= timestamp) {
//             return (rewardPerTokenCheckpoints[token][nCheckpoints - 1].rewardPerToken, rewardPerTokenCheckpoints[token][nCheckpoints - 1].timestamp);
//         }

//         // Next check implicit zero balance
//         if (rewardPerTokenCheckpoints[token][0].timestamp > timestamp) {
//             return (0,0);
//         }

//         uint lower = 0;
//         uint upper = nCheckpoints - 1;
//         while (upper > lower) {
//             uint center = upper - (upper - lower) / 2; // ceil, avoiding overflow
//             RewardPerTokenCheckpoint memory cp = rewardPerTokenCheckpoints[token][center];
//             if (cp.timestamp == timestamp) {
//                 return (cp.rewardPerToken, cp.timestamp);
//             } else if (cp.timestamp < timestamp) {
//                 lower = center;
//             } else {
//                 upper = center - 1;
//             }
//         }
//         return (rewardPerTokenCheckpoints[token][lower].rewardPerToken, rewardPerTokenCheckpoints[token][lower].timestamp);
//     }

//     function _writeCheckpoint(string memory ve_tokenId, uint balance) internal {
//         uint _timestamp = block.timestamp;
//         uint _nCheckPoints = numCheckpoints[ve_tokenId];

//         if (_nCheckPoints > 0 && checkpoints[ve_tokenId][_nCheckPoints - 1].timestamp == _timestamp) {
//             checkpoints[ve_tokenId][_nCheckPoints - 1].balanceOf = balance;
//         } else {
//             checkpoints[ve_tokenId][_nCheckPoints] = Checkpoint(_timestamp, balance);
//             numCheckpoints[ve_tokenId] = _nCheckPoints + 1;
//         }
//     }

//     function _writeRewardPerTokenCheckpoint(address token, uint reward, uint timestamp) internal {
//         uint _nCheckPoints = rewardPerTokenNumCheckpoints[token];

//         if (_nCheckPoints > 0 && rewardPerTokenCheckpoints[token][_nCheckPoints - 1].timestamp == timestamp) {
//             rewardPerTokenCheckpoints[token][_nCheckPoints - 1].rewardPerToken = reward;
//         } else {
//             rewardPerTokenCheckpoints[token][_nCheckPoints] = RewardPerTokenCheckpoint(timestamp, reward);
//             rewardPerTokenNumCheckpoints[token] = _nCheckPoints + 1;
//         }
//     }

//     function _writeSupplyCheckpoint(address _token) internal {
//         uint _nCheckPoints = supplyNumCheckpoints[_token];
//         uint _timestamp = block.timestamp;

//         if (_nCheckPoints > 0 && supplyCheckpoints[_nCheckPoints - 1][_token].timestamp == _timestamp) {
//             supplyCheckpoints[_nCheckPoints - 1][_token].supply = totalSupply[_token];
//         } else {
//             supplyCheckpoints[_nCheckPoints][_token] = SupplyCheckpoint(_timestamp, totalSupply[_token]);
//             supplyNumCheckpoints[_token] = _nCheckPoints + 1;
//         }
//     }

//     function rewardsListLength() external view returns (uint) {
//         return rewards.length;
//     }

//     // returns the last time the reward was modified or periodFinish if the reward has ended
//     function lastTimeRewardApplicable(address token) public view returns (uint) {
//         return Math.min(block.timestamp, periodFinish[token]);
//     }

//     // allows a user to claim rewards for a given token
//     function getReward(address _ve, uint tokenId, address[] memory tokens) external lock  {
//         require(ve(_ve).isApprovedOrOwner(msg.sender, tokenId), "SB1");
//         for (uint i = 0; i < tokens.length; i++) {
//             (rewardPerTokenStored[tokens[i]], lastUpdateTime[tokens[i]]) = _updateRewardPerToken(tokens[i]);

//             string memory ve_tokenId = string(abi.encodePacked(tokens[i], tokenId));
//             uint _reward = earned(tokens[i], tokenId);
//             lastEarn[tokens[i]][ve_tokenId] = block.timestamp;
//             userRewardPerTokenStored[tokens[i]][ve_tokenId] = rewardPerTokenStored[tokens[i]];
//             if (_reward > 0) IERC20(tokens[i]).safeTransfer(msg.sender, _reward);

//             emit ClaimRewards(msg.sender, tokens[i], _reward);
//         }
//     }

//     // used by BaseV1Voter to allow batched reward claims
//     function getRewardForOwner(address _ve, uint tokenId, address[] memory tokens) external lock  {
//         require(msg.sender == IContract(contractAddress).stakeMarketVoter() || msg.sender == IContract(contractAddress).trustBountyVoter(), "SB2");
//         address _owner = ve(_ve).ownerOf(tokenId);
//         for (uint i = 0; i < tokens.length; i++) {
//             (rewardPerTokenStored[tokens[i]], lastUpdateTime[tokens[i]]) = _updateRewardPerToken(tokens[i]);

//             string memory ve_tokenId = string(abi.encodePacked(tokens[i], tokenId));
//             uint _reward = earned(tokens[i], tokenId);
//             lastEarn[tokens[i]][ve_tokenId] = block.timestamp;
//             userRewardPerTokenStored[tokens[i]][ve_tokenId] = rewardPerTokenStored[tokens[i]];
//             if (_reward > 0) IERC20(tokens[i]).safeTransfer(_owner, _reward);

//             emit ClaimRewards(_owner, tokens[i], _reward);
//         }
//     }

//     function rewardPerToken(address _token) public view returns (uint) {
//         if (totalSupply[_token] == 0) {
//             return rewardPerTokenStored[_token];
//         }
//         return rewardPerTokenStored[_token] + ((lastTimeRewardApplicable(_token) - Math.min(lastUpdateTime[_token], periodFinish[_token])) * rewardRate[_token] * PRECISION / totalSupply[_token]);
//     }

//     function batchRewardPerToken(address token, uint maxRuns) external {
//         (rewardPerTokenStored[token], lastUpdateTime[token])  = _batchRewardPerToken(token, maxRuns);
//     }

//     function _batchRewardPerToken(address _token, uint maxRuns) internal returns (uint, uint) {
//         uint _startTimestamp = lastUpdateTime[_token];
//         uint reward = rewardPerTokenStored[_token];

//         if (supplyNumCheckpoints[_token] == 0) {
//             return (reward, _startTimestamp);
//         }

//         if (rewardRate[_token] == 0) {
//             return (reward, block.timestamp);
//         }

//         uint _startIndex = getPriorSupplyIndex(_token, _startTimestamp);
//         uint _endIndex = Math.min(supplyNumCheckpoints[_token]-1, maxRuns);

//         for (uint i = _startIndex; i < _endIndex; i++) {
//             SupplyCheckpoint memory sp0 = supplyCheckpoints[i][_token];
//             if (sp0.supply > 0) {
//                 SupplyCheckpoint memory sp1 = supplyCheckpoints[i+1][_token];
//                 (uint _reward, uint endTime) = _calcRewardPerToken(_token, sp1.timestamp, sp0.timestamp, sp0.supply, _startTimestamp);
//                 reward += _reward;
//                 _writeRewardPerTokenCheckpoint(_token, reward, endTime);
//                 _startTimestamp = endTime;
//             }
//         }

//         return (reward, _startTimestamp);
//     }

//     function _calcRewardPerToken(address token, uint timestamp1, uint timestamp0, uint supply, uint startTimestamp) internal view returns (uint, uint) {
//         uint endTime = Math.max(timestamp1, startTimestamp);
//         return (((Math.min(endTime, periodFinish[token]) - Math.min(Math.max(timestamp0, startTimestamp), periodFinish[token])) * rewardRate[token] * PRECISION / supply), endTime);
//     }

//     function _updateRewardPerToken(address token) internal returns (uint, uint) {
//         uint _startTimestamp = lastUpdateTime[token];
//         uint reward = rewardPerTokenStored[token];

//         if (supplyNumCheckpoints[token] == 0) {
//             return (reward, _startTimestamp);
//         }

//         if (rewardRate[token] == 0) {
//             return (reward, block.timestamp);
//         }

//         uint _startIndex = getPriorSupplyIndex(token, _startTimestamp);
//         uint _endIndex = supplyNumCheckpoints[token]-1;

//         if (_endIndex - _startIndex > 1) {
//             for (uint i = _startIndex; i < _endIndex-1; i++) {
//                 SupplyCheckpoint memory sp0 = supplyCheckpoints[i][token];
//                 if (sp0.supply > 0) {
//                     SupplyCheckpoint memory sp1 = supplyCheckpoints[i+1][token];
//                     (uint _reward, uint _endTime) = _calcRewardPerToken(token, sp1.timestamp, sp0.timestamp, sp0.supply, _startTimestamp);
//                     reward += _reward;
//                     _writeRewardPerTokenCheckpoint(token, reward, _endTime);
//                     _startTimestamp = _endTime;
//                 }
//             }
//         }

//         SupplyCheckpoint memory sp = supplyCheckpoints[_endIndex][token];
//         if (sp.supply > 0) {
//             (uint _reward,) = _calcRewardPerToken(token, lastTimeRewardApplicable(token), Math.max(sp.timestamp, _startTimestamp), sp.supply, _startTimestamp);
//             reward += _reward;
//             _writeRewardPerTokenCheckpoint(token, reward, block.timestamp);
//             _startTimestamp = block.timestamp;
//         }

//         return (reward, _startTimestamp);
//     }

//     function earned(address token, uint tokenId) public view returns (uint) {
//         string memory ve_tokenId = string(abi.encodePacked(token, tokenId));
//         uint _startTimestamp = Math.max(lastEarn[token][ve_tokenId], rewardPerTokenCheckpoints[token][0].timestamp);
//         if (numCheckpoints[ve_tokenId] == 0) {
//             return 0;
//         }

//         uint _startIndex = getPriorBalanceIndex(token, tokenId, _startTimestamp);
//         uint _endIndex = numCheckpoints[ve_tokenId]-1;

//         uint reward = 0;

//         if (_endIndex - _startIndex > 1) {
//             for (uint i = _startIndex; i < _endIndex-1; i++) {
//                 Checkpoint memory cp0 = checkpoints[ve_tokenId][i];
//                 Checkpoint memory cp1 = checkpoints[ve_tokenId][i+1];
//                 (uint _rewardPerTokenStored0,) = getPriorRewardPerToken(token, cp0.timestamp);
//                 (uint _rewardPerTokenStored1,) = getPriorRewardPerToken(token, cp1.timestamp);
//                 reward += cp0.balanceOf * (_rewardPerTokenStored1 - _rewardPerTokenStored0) / PRECISION;
//             }
//         }

//         Checkpoint memory cp = checkpoints[ve_tokenId][_endIndex];
//         (uint _rewardPerTokenStored,) = getPriorRewardPerToken(token, cp.timestamp);
//         reward += cp.balanceOf * (rewardPerToken(token) - Math.max(_rewardPerTokenStored, userRewardPerTokenStored[token][ve_tokenId])) / PRECISION;

//         return reward;
//     }

//     // This is an external function, but internal notation is used since it can only be called "internally" from BaseV1Gauges
//     function _deposit(address _token, uint amount, uint tokenId) external {
//         require(msg.sender == IContract(contractAddress).stakeMarketVoter() || msg.sender == IContract(contractAddress).trustBountyVoter(), "SB3");
//         totalSupply[_token] += amount;
//         string memory ve_tokenId = string(abi.encodePacked(_token, tokenId));
//         balanceOf[ve_tokenId] += amount;

//         _writeCheckpoint(ve_tokenId, balanceOf[ve_tokenId]);
//         _writeSupplyCheckpoint(_token);

//         emit Deposit(msg.sender, tokenId, amount);
//     }

//     function _withdraw(address _token, uint amount, uint tokenId) external {
//         require(msg.sender == IContract(contractAddress).stakeMarketVoter() || msg.sender == IContract(contractAddress).trustBountyVoter(), "SB4");
//         totalSupply[_token] -= amount;
//         string memory ve_tokenId = string(abi.encodePacked(_token, tokenId));
//         balanceOf[ve_tokenId] -= amount;

//         _writeCheckpoint(ve_tokenId, balanceOf[ve_tokenId]);
//         _writeSupplyCheckpoint(_token);

//         emit Withdraw(msg.sender, tokenId, amount);
//     }

//     function left(address token) external view returns (uint) {
//         if (block.timestamp >= periodFinish[token]) return 0;
//         uint _remaining = periodFinish[token] - block.timestamp;
//         return _remaining * rewardRate[token];
//     }

//     // used to notify a gauge/bribe of a given reward, this can create griefing attacks by extending rewards
//     function notifyRewardAmount(address token, address _sender, uint amount) external lock {
//         require(amount > 0, "SB5");
//         if (rewardRate[token] == 0) _writeRewardPerTokenCheckpoint(token, 0, block.timestamp);
//         (rewardPerTokenStored[token], lastUpdateTime[token]) = _updateRewardPerToken(token);

//         if (block.timestamp >= periodFinish[token]) {
//             IERC20(token).safeTransferFrom(_sender, address(this), amount);
//             rewardRate[token] = amount / DURATION;
//         } else {
//             uint _remaining = periodFinish[token] - block.timestamp;
//             uint _left = _remaining * rewardRate[token];
//             // require(amount > _left, "SB6");
//             IERC20(token).safeTransferFrom(_sender, address(this), amount);
//             rewardRate[token] = (amount + _left) / DURATION;
//         }
//         require(rewardRate[token] > 0, "SB7");
//         uint balance = erc20(token).balanceOf(address(this));
//         require(rewardRate[token] <= balance / DURATION, "SB8");
//         periodFinish[token] = block.timestamp + DURATION;
//         if (!isReward[token]) {
//             isReward[token] = true;
//             rewards.push(token);
//         }

//         emit NotifyReward(_sender, token, amount);
//     }
// }
