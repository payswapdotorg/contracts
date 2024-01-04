// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Library.sol";

// Gauges are used to incentivize pools, they emit reward tokens over 7 days for staked LP tokens
contract Profile {
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableSet for EnumerableSet.UintSet;
    using Percentile for *;

    mapping(address => uint) public sum_of_diff_squared;
    mapping(address => uint) public total;
    uint bufferTime = 14 days;
    uint limitFactor = 10000;
    uint constant INITIAL_PROFILE_ID = 5;
    mapping(address => bool) public isHelper;
    mapping(address => EnumerableSet.AddressSet) private _allContracts;
    mapping(uint => EnumerableSet.UintSet) private _badgeIds;
    mapping(uint => ProfileInfo) public profileInfo;
    mapping(uint => EnumerableSet.UintSet) private followers;
    mapping(address => uint) public addressToProfileId;
    mapping(uint => EnumerableSet.AddressSet) private accounts;
    uint public profileId = INITIAL_PROFILE_ID;
    mapping(string => bool) private usedSSID;
    // profileid => token => bountyid
    mapping(uint => mapping(address => uint)) public bounties;
    mapping(uint => bool) private isFollowerAuditor;
    mapping(address => mapping(uint =>  CreditReport)) public goldReported;
    mapping(address => mapping(uint =>  CreditReport)) public silverReported;
    mapping(address => mapping(uint =>  CreditReport)) public brownReported;
    mapping(address => mapping(uint => CreditReport)) public blackReported;
    mapping(uint => mapping(address => uint)) public pendingRevenue;
    mapping(uint => mapping(uint => bool)) public isBlacklisted;
    string idValueName = "ssid";
    address contractAddress;
    mapping(uint => uint) public timeConstraint;
    mapping(uint => mapping(address => uint)) private addressToSSIDDeadline;
    mapping(uint => uint) public referrer;
    mapping(uint => bool) public isUnique;
    mapping(bytes32 => uint) private isNameTaken;
    mapping(address => bool) public sharedEmail;
    
    event UpdateSSID(uint profileId);
    event CreateProfile(uint indexed profileId, string name);
    event PayProfile(address token, uint profileId, uint amount);
    event ClaimRevenue(address token, uint profileId, uint amount);
    event Follow(uint followerProfileId, uint followeeProfileId);
    event UpdateBlackList(uint ownerProfileId, uint userProfileId, bool add);
    event UpdateFollowerAuditor(uint auditorProfileId, bool add);
    event UpdateHelper(address helper, bool add);
    event AddAccount(uint profileId, address account);
    event RemoveAccount(uint profileId, address account);
    event AddBounty(uint profileId, uint bountyId, address token);
    event UpdateCollectionId(uint profileId, uint collectionId);
    event Unfollow(uint followeeProfileId, uint followerProfileId);
    event DeleteProfile(uint profileId);
    event UpdateMiscellaneous(
        uint idx, 
        uint collectionId, 
        string paramName, 
        string paramValue, 
        uint paramValue2, 
        uint paramValue3, 
        address sender,
        address paramValue4,
        string paramValue5
    );
    
    constructor() {
        isFollowerAuditor[1] = true; 
        sharedEmail[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        _;
    }

    modifier respectTimeConstraint() {
        uint _profileId = addressToProfileId[msg.sender];
        require(
            addressToSSIDDeadline[_profileId][msg.sender] >= timeConstraint[_profileId],
            "P00"
        );
        _;
    }

    // simple re-entrancy check
    uint internal _unlocked = 1;
    modifier lock() {
        require(_unlocked == 1);
        _unlocked = 2;
        _;
        _unlocked = 1;
    }

    function setContractAddress(address _contractAddress) external {
        require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender, "PH1");
        contractAddress = _contractAddress;
    }

    function _ssi() internal view returns(address) {
        return IContract(contractAddress).ssi();
    }

    function _badgeNft() internal view returns(address) {
        return IContract(contractAddress).badgeNft();
    }

    function _trustBounty() internal view returns(address) {
        return IContract(contractAddress).trustBounty();
    }

    function _marketCollections() internal view returns(address) {
        return IContract(contractAddress).marketCollections();
    }

    function _helper() internal view returns(address) {
        return IContract(contractAddress).profileHelper();
    }
    
    function updateBlackList(uint _profileId, bool _add) external {
        isBlacklisted[addressToProfileId[msg.sender]][_profileId] = _add;
        emit UpdateBlackList(addressToProfileId[msg.sender], _profileId, _add);
    }

    function updateFollowerAuditor(uint _auditorProfileId, bool _add) external onlyAdmin {
        isFollowerAuditor[_auditorProfileId] = _add;
        emit UpdateFollowerAuditor(_auditorProfileId, _add);
    }

    function updateParameters(
        uint _bufferTime, 
        uint _limitFactor,
        string memory _idValueName
    ) external onlyAdmin {
        bufferTime = _bufferTime;
        limitFactor = _limitFactor;
        idValueName = _idValueName;
    }
    
    function getParams() external view returns(uint,uint,string memory) {
        return (
            bufferTime,
            limitFactor,
            idValueName
        );
    }

    function getIsNameTaken(string memory _name) external view returns(uint) {
        return isNameTaken[keccak256(abi.encodePacked(_name))];
    }

    function getAllFollowers(uint _profileId, uint _start) external view returns(uint[] memory _followers) {
        _followers = new uint[](followers[_profileId].length() - _start);
        for (uint i = _start; i < followers[_profileId].length(); i++) {
            if (!isBlacklisted[_profileId][followers[_profileId].at(i)]) {
                _followers[i] = followers[_profileId].at(i);
            }
        }    
    }

    function getAllBadgeIds(uint _profileId, uint _start) external view returns(uint[] memory _allBadgeIds) {
        _allBadgeIds = new uint[](_badgeIds[_profileId].length() - _start);
        for (uint i = _start; i < _badgeIds[_profileId].length(); i++) {
            _allBadgeIds[i] = _badgeIds[_profileId].at(i);
        }    
    }

    function getAllAccounts(uint _profileId, uint _start) external view returns(address[] memory _accounts) {
        _accounts = new address[](accounts[_profileId].length() - _start);
        for (uint i = _start; i < accounts[_profileId].length(); i++) {
            _accounts[i] = accounts[_profileId].at(i);
        }    
    }

    function addAccount(uint _profileId, address _account) external respectTimeConstraint {
        require(addressToProfileId[msg.sender] == _profileId, "P2");
        SSIData memory metadata = ISSI(_ssi()).getSSID(_profileId);
        require(keccak256(abi.encodePacked(profileInfo[_profileId].ssid)) == keccak256(abi.encodePacked(metadata.answer)), "P4");
        accounts[_profileId].add(_account);
        addressToProfileId[_account] = _profileId;
        addressToSSIDDeadline[_profileId][_account] = addressToSSIDDeadline[_profileId][msg.sender];

        emit AddAccount(_profileId, _account);
    }

    function addAccountFromSSID(uint _profileId, uint _tokenId) external {
        require(ve(_ssi()).ownerOf(_tokenId) == msg.sender);
        SSIData memory metadata = ISSI(_ssi()).getSSIData(_tokenId);
        require(keccak256(abi.encodePacked(profileInfo[_profileId].ssid)) == keccak256(abi.encodePacked(metadata.answer)));
        accounts[_profileId].add(msg.sender);
        addressToProfileId[msg.sender] = _profileId;
        addressToSSIDDeadline[_profileId][msg.sender] = metadata.deadline;

        emit AddAccount(_profileId, msg.sender);
    }
    
    function removeAccount(uint _profileId, address _account) external respectTimeConstraint {
        require(addressToProfileId[msg.sender] == _profileId, "P9");
        SSIData memory metadata = ISSI(_ssi()).getSSID(_profileId);
        require(keccak256(abi.encodePacked(profileInfo[_profileId].ssid)) == keccak256(abi.encodePacked(metadata.answer)), "P10");
        accounts[_profileId].remove(_account);
        delete addressToProfileId[_account];
        emit RemoveAccount(_profileId, _account);
    }

    function follow(uint _profileId) external respectTimeConstraint {
        _follow(_profileId, addressToProfileId[msg.sender], msg.sender);
    }

    function deleteProfile(bool _detachSSID) external respectTimeConstraint {
        uint _profileId = addressToProfileId[msg.sender];
        if (isUnique[_profileId] && _detachSSID) {
            delete usedSSID[profileInfo[_profileId].ssid];
            delete isUnique[_profileId];
        }
        delete isNameTaken[keccak256(abi.encodePacked(profileInfo[_profileId].name))];
        delete profileInfo[_profileId];
        delete addressToProfileId[msg.sender];
        IProfile(_helper()).burn(_profileId);
        emit DeleteProfile(_profileId);
    }

    function _follow(
        uint _profileId, 
        uint _followerProfileId,
        address _user
    ) internal {
        require(!isBlacklisted[_profileId][_followerProfileId], "P10");
        require(sharedEmail[_user], "P11");
        require(isUnique[_profileId] && isUnique[_followerProfileId]);
        
        followers[_profileId].add(_followerProfileId);

        emit Follow(_followerProfileId, _profileId);
    }

    function unFollow(uint _profileId) external respectTimeConstraint {
        followers[_profileId].remove(addressToProfileId[msg.sender]);

        emit Unfollow(_profileId, addressToProfileId[msg.sender]);
    }

    function updateBadgeId(uint _badgeId, bool _add) external respectTimeConstraint {
        require(ve(_badgeNft()).ownerOf(_badgeId) == msg.sender, "P12");
        require(addressToProfileId[msg.sender] > 0, "P13");
        if (_add) {
            _badgeIds[addressToProfileId[msg.sender]].add(_badgeId);
        } else {
            _badgeIds[addressToProfileId[msg.sender]].remove(_badgeId);
        }
    }
    
    function updateSSID() external {
        uint _profileId = addressToProfileId[msg.sender];
        SSIData memory metadata = ISSI(_ssi()).getSSID(_profileId);
        require(!usedSSID[metadata.answer], "P16");
        usedSSID[metadata.answer] = true;
        isUnique[_profileId] = true;
        profileInfo[_profileId].ssid = metadata.answer;
        addressToSSIDDeadline[_profileId][msg.sender] = metadata.deadline;
        profileInfo[_profileId].ssidAuditorProfileId = metadata.auditorProfileId;
        emit UpdateSSID(_profileId);
    }

    function updateTimeConstraint() external respectTimeConstraint {
        uint _profileId = addressToProfileId[msg.sender];
        require(isUnique[_profileId], "P016");
        SSIData memory metadata = ISSI(_ssi()).getSSID(_profileId);
        if (timeConstraint[_profileId] < metadata.deadline) {
            addressToSSIDDeadline[_profileId][msg.sender] = metadata.deadline;
            timeConstraint[_profileId] = metadata.deadline;
        }
    }
    
    function referrerFromAddress(address _user) external view returns(uint) {
        return referrer[addressToProfileId[_user]];
    }

    function shareEmail(address _account) external {
        require(isFollowerAuditor[addressToProfileId[msg.sender]], "P17");
        sharedEmail[_account] = true;
    }

    function createSpecificProfile(string memory _name, uint _profileId, uint referrerProfileId) external {
        require(IAuth(contractAddress).devaddr_() == msg.sender || IProfile(_helper()).boughtProfile(msg.sender) == _profileId, "P0");
        require(accounts[_profileId].length() == 0 && _profileId < INITIAL_PROFILE_ID, "P017");

        _createProfile(_name, _profileId, referrerProfileId);
     
        emit CreateProfile(_profileId, _name);
    }

    function createProfile(string memory _name, uint referrerProfileId) external {
        _createProfile(_name, profileId, referrerProfileId);

        emit CreateProfile(profileId++, _name);
    }

    function _createProfile(string memory _name, uint _profileId, uint referrerProfileId) internal {
        if (referrerProfileId > 0) {
            require( 
                profileInfo[referrerProfileId].createdAt > 0 &&
                addressToProfileId[msg.sender] != referrerProfileId,
                "P18"
            );
            referrer[_profileId] = referrerProfileId;
        }
        accounts[_profileId].add(msg.sender);
        require(isNameTaken[keccak256(abi.encodePacked(_name))] == 0, "P19");
        isNameTaken[keccak256(abi.encodePacked(_name))] = _profileId;
        profileInfo[_profileId].name = _name;
        profileInfo[_profileId].createdAt = block.timestamp;
        addressToProfileId[msg.sender] = _profileId;
        // follow OG profile
        if (_profileId != 1) {
            require(sharedEmail[msg.sender], "P20");
            followers[1].add(_profileId);
        }
        IProfile(_helper()).safeMint(msg.sender, _profileId);
    }

    function updateCollectionId(uint _collectionId) external respectTimeConstraint {
        require(addressToProfileId[msg.sender] > 0, "P21");
        require(IMarketPlace(_marketCollections()).addressToCollectionId(msg.sender) == _collectionId, "P22");
        profileInfo[addressToProfileId[msg.sender]].collectionId = _collectionId;
        emit UpdateCollectionId(addressToProfileId[msg.sender], _collectionId);
    }
    
    function addBounty(uint _bountyId) external respectTimeConstraint {
        (address owner,address _token,,address claimableBy,,,,,,) = ITrustBounty(_trustBounty()).bountyInfo(_bountyId);
        require(addressToProfileId[msg.sender] > 0 && owner == msg.sender && claimableBy == address(0x0), "P23");
        bounties[addressToProfileId[msg.sender]][_token] = _bountyId;
        emit AddBounty(addressToProfileId[msg.sender], _bountyId, _token);
    }
    
    function payProfile(address _token, uint _profileId, uint _amount) external lock {
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        pendingRevenue[_profileId][_token] += _amount;

        emit PayProfile(_token, _profileId, _amount);
    }

    function claimRevenue(address _token, uint _profileId, uint _amount) external lock respectTimeConstraint {
        require(addressToProfileId[msg.sender] == _profileId, "P24");
        uint _toClaim = Math.min(_amount, pendingRevenue[_profileId][_token]);
        if (profileInfo[_profileId].activePeriod < block.timestamp) {
            profileInfo[_profileId].paidPayable = 0;
            profileInfo[_profileId].activePeriod = block.timestamp + bufferTime / bufferTime * bufferTime;
        }
        _safeTransfer(_token, msg.sender, _toClaim);

        emit ClaimRevenue(_token, _profileId, _toClaim);
    }

    function getPercentile(address _ve, uint _tokenId) public view returns(uint,uint,uint) {
        require(ITrustBounty(IContract(contractAddress).trustBountyHelper()).ves(_ve) && ve(_ve).ownerOf(_tokenId) == msg.sender);
        uint _balance = ve(_ve).balanceOfNFT(_tokenId);
        (uint percentile, uint sods) = Percentile.computePercentileFromData(
            false,
            _balance,
            total[_ve] + _balance,
            _allContracts[_ve].length(),
            sum_of_diff_squared[_ve]
        );
        return (
            percentile,
            total[_ve] + _balance,
            sods
        );
    }

    function updateLateDays(
        address _note, 
        address _arp, 
        address _protocolOwner, 
        address _ve, 
        uint _tokenId, 
        uint _protocolId, 
        uint _profileId, 
        bool _isPaywall
    ) external {
        require(isHelper[_note] && IAuth(_arp).isAdmin(msg.sender), "P26");
        require(accounts[_profileId].contains(_protocolOwner));
        (uint due, uint lateSeconds) = IProfile(IContract(contractAddress).profileHelper()).getDueNLateSeconds(_isPaywall, _note, _arp, _protocolId, _profileId);
        require(lateSeconds > 0);
        _updateReports(_arp, _profileId);
        _allContracts[_ve].add(_arp);
        (uint _percentile, uint _total, uint sods) = getPercentile(_ve, _tokenId);
        total[_ve] = _total;
        sum_of_diff_squared[_ve] = sods;
        if (_percentile > 75) {
            profileInfo[_profileId].gold.lateSeconds += lateSeconds;
            profileInfo[_profileId].gold.lateValue += due;
            goldReported[_arp][_profileId].lateSeconds = lateSeconds;
            goldReported[_arp][_profileId].lateValue = due;
        } else if (_percentile > 50) {
            profileInfo[_profileId].silver.lateSeconds += lateSeconds;
            profileInfo[_profileId].silver.lateValue += due;
            silverReported[_arp][_profileId].lateSeconds = lateSeconds;
            silverReported[_arp][_profileId].lateValue = due;
        } else if (_percentile > 25) {
            profileInfo[_profileId].brown.lateSeconds += lateSeconds;
            profileInfo[_profileId].brown.lateValue += due;
            brownReported[_arp][_profileId].lateSeconds = lateSeconds;
            brownReported[_arp][_profileId].lateValue = due;
        } else {
            profileInfo[_profileId].black.lateSeconds += lateSeconds;
            profileInfo[_profileId].black.lateValue += due;
            blackReported[_arp][_profileId].lateSeconds = lateSeconds;
            blackReported[_arp][_profileId].lateValue = due;
        }
    }
    
    function emitUpdateMiscellaneous(
        uint _idx, 
        uint _collectionId, 
        string memory paramName, 
        string memory paramValue, 
        uint paramValue2, 
        uint paramValue3,
        address paramValue4,
        string memory paramValue5
    ) external {
        emit UpdateMiscellaneous(
            _idx, 
            _collectionId, 
            paramName, 
            paramValue, 
            paramValue2, 
            paramValue3, 
            msg.sender,
            paramValue4,
            paramValue5
        );
    }

    function updateHelper(address __helper, bool _add) external {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        isHelper[__helper] = _add;
        emit UpdateHelper(__helper, _add);
    }

    function _updateReports(address _arp, uint _profileId) internal {
        if (goldReported[_arp][_profileId].lateValue > 0) {
            profileInfo[_profileId].gold.lateSeconds -= goldReported[_arp][_profileId].lateSeconds;
            profileInfo[_profileId].gold.lateValue -= goldReported[_arp][_profileId].lateValue;
        } else if (silverReported[_arp][_profileId].lateValue > 0) {
            profileInfo[_profileId].silver.lateSeconds -= silverReported[_arp][_profileId].lateSeconds;
            profileInfo[_profileId].silver.lateValue -= silverReported[_arp][_profileId].lateValue;
        } else if (brownReported[_arp][_profileId].lateValue > 0) {
            profileInfo[_profileId].brown.lateSeconds -= brownReported[_arp][_profileId].lateSeconds;
            profileInfo[_profileId].brown.lateValue -= brownReported[_arp][_profileId].lateValue;
        } else if (blackReported[_arp][_profileId].lateValue > 0) {
            profileInfo[_profileId].black.lateSeconds -= blackReported[_arp][_profileId].lateSeconds;
            profileInfo[_profileId].black.lateValue -= blackReported[_arp][_profileId].lateValue;
        }
        delete goldReported[_arp][_profileId];
        delete silverReported[_arp][_profileId];
        delete brownReported[_arp][_profileId];
        delete blackReported[_arp][_profileId];
    }

    function emitAddAccount(uint _profileId, address _user) external {
        require(IContract(contractAddress).profileHelper() == msg.sender);
        emit AddAccount(_profileId, _user);
    }

    function _safeTransfer(address _token, address to, uint256 value) internal {
        uint _profileId = addressToProfileId[to];
        uint _bountyId = bounties[_profileId][_token];
        require(_profileId > 0 && _bountyId > 0);
        uint _limit = ITrustBounty(_trustBounty()).getBalance(_bountyId);
        (,,,,,,uint endTime,,,) = ITrustBounty(_trustBounty()).bountyInfo(_bountyId);
        require(endTime > block.timestamp + bufferTime);
        uint amount = Math.min(value, _limit * limitFactor / 10000 - profileInfo[_profileId].paidPayable);
        IERC20(_token).safeTransfer(to, amount);
        pendingRevenue[_profileId][_token] -= amount;
        profileInfo[_profileId].paidPayable += amount;
    }
}

contract ProfileHelper is ERC721Pausable {
    using SafeERC20 for IERC20;

    address private contractAddress;
    uint constant INITIAL_PROFILE_ID = 5; // starts at 1000000
    uint public boughtProfileId = 3;
    uint private periodReceivable = 86400 * 7 * 52;
    uint private bidStart = 1e18;
    uint private bidDuration = 86400 * 7;
    uint private minBidIncrementPercentage = 11000;
    mapping(address => uint) public boughtProfile;
    struct Bid {
        uint lastBid;
        uint lastBidTime;
        address lastBidder;
        uint auctionTime;
    }
    mapping(uint => Bid) public bids;
    mapping(uint => mapping(uint => bool)) private crushes;
    mapping(uint => string) public broadcast; // to broadcast msgs to followers
    mapping(uint => address) private uriGenerator;
    mapping(uint => uint) public createdAt;
    mapping(uint => uint[]) public identityProofs;
    mapping(uint => uint) public crushCount;

    constructor(address _contractAddress) ERC721("ProfileNFT", "PNFT") {
        contractAddress = _contractAddress;
    }

    function updateBroadcast(string memory message, uint _profileId) external {
        require(IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender) == _profileId);
        broadcast[_profileId] = message;
    }

    function getParams() external view returns(address,uint,uint,uint,uint) {
        return (
            contractAddress,
            periodReceivable,
            bidStart,
            bidDuration,
            minBidIncrementPercentage
        );
    }

    function _rampHelper() internal view returns(address) {
        return IContract(contractAddress).rampHelper();
    }

    function getDueNLateSeconds(bool _isPaywall, address _note, address _arp, uint _protocolId, uint _profileId) external returns(uint due, uint lateSeconds) {
        if (_isPaywall) {
            PaywallInfo memory _protocolInfo = IMarketPlace(_arp).protocolInfo(_protocolId);
            require(IMarketPlace(IContract(contractAddress).paywallARPHelper()).isGauge(_arp) && _protocolInfo.profileId == _profileId);
            (uint _due,, int _lateSeconds) = IMarketPlace(_arp).getDueReceivable(_protocolId);
            Ask memory ask = IMarketPlace(IContract(contractAddress).paywallMarketOrders()).getAskDetails(
                IMarketPlace(_arp).collectionId(), 
                keccak256(abi.encodePacked(IMarketPlace(_arp).tokenId()))
            );
            address _token = ask.tokenInfo.usetFIAT ? ask.tokenInfo.tFIAT : ve(ask.tokenInfo.ve).token();
            due = IRamp(_rampHelper()).convert(_token, _due);
            lateSeconds = uint(_lateSeconds);
        } else {
            ARPInfo memory _protocolInfo = IARP(_arp).protocolInfo(_protocolId);
            require(_protocolInfo.profileId == _profileId);
            (uint _due,, int _lateSeconds) = IARP(_note).getDueReceivable(_arp, _protocolId, 0);
            due = IRamp(_rampHelper()).convert(_protocolInfo.token, _due);
            lateSeconds = uint(_lateSeconds);
        }
    }

    function updateParams(
        uint _bidStart, 
        uint _bidDuration, 
        uint _periodReceivable,
        uint _minBidIncrementPercentage
    ) external {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        bidStart = _bidStart;
        bidDuration = _bidDuration;
        periodReceivable = _periodReceivable;
        minBidIncrementPercentage = _minBidIncrementPercentage;
    }
    
    function takeOverBid(uint _boughtProfileId, uint _amount) external {
        require(bids[_boughtProfileId].auctionTime < block.timestamp && bids[_boughtProfileId].lastBidder != address(0x0));
        require(bids[_boughtProfileId].lastBid * minBidIncrementPercentage / 10000 <= _amount && _amount >= bidStart);
        IERC20(IContract(contractAddress).token()).safeTransferFrom(msg.sender, address(this), _amount);
        bids[_boughtProfileId].lastBid = _amount;
        bids[_boughtProfileId].lastBidder = msg.sender;
        bids[_boughtProfileId].lastBidTime = block.timestamp;
        bids[_boughtProfileId].auctionTime = block.timestamp + bidDuration;
    }

    function updateLastBidTime(uint _boughtProfileId, uint _amount) external {
        _amount = Math.max(_amount, bids[_boughtProfileId].lastBid);
        IERC20(IContract(contractAddress).token()).safeTransferFrom(msg.sender, address(this), _amount);
        bids[_boughtProfileId].lastBid = _amount;
        bids[_boughtProfileId].lastBidTime = block.timestamp;
        bids[_boughtProfileId].auctionTime = block.timestamp + periodReceivable;
    }

    function bidForProfile(uint _amount) external {
        require(boughtProfileId < INITIAL_PROFILE_ID);
        address _token = IContract(contractAddress).token();
        if (bids[boughtProfileId].lastBidder != address(0x0)) {
            require(bids[boughtProfileId].lastBid * minBidIncrementPercentage / 10000 <= _amount && _amount >= bidStart);
            IERC20(_token).safeTransfer(bids[boughtProfileId].lastBidder, bids[boughtProfileId].lastBid);
        }
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        bids[boughtProfileId].lastBid = _amount;
        bids[boughtProfileId].lastBidder = msg.sender;
        bids[boughtProfileId].lastBidTime = block.timestamp;
        bids[boughtProfileId].auctionTime = block.timestamp;
    }

    function withdraw(address _to, uint _amount) external {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        IERC20(IContract(contractAddress).token()).safeTransfer(_to, _amount);
    }

    function processAuction() external {
        require(bids[boughtProfileId].lastBidTime + bidDuration < block.timestamp);
        boughtProfile[bids[boughtProfileId].lastBidder] = boughtProfileId++;
        bids[boughtProfileId].auctionTime = block.timestamp + periodReceivable;
    }

    function processTakeOverAuction(uint _boughtProfileId) external {
        require(bids[_boughtProfileId].lastBidTime + bidDuration < block.timestamp);
        boughtProfile[bids[_boughtProfileId].lastBidder] = _boughtProfileId;
        bids[_boughtProfileId].auctionTime = block.timestamp + periodReceivable;
    }
    
    function safeMint(address _user, uint _profileId) external {
        require(msg.sender == IContract(contractAddress).profile());
        _safeMint(_user, _profileId, "");
        createdAt[_profileId] = block.timestamp;
        IProfile(IContract(contractAddress).profile()).emitAddAccount(_profileId, _user);
    }
    
    function burn(uint _profileId) external {
        require(msg.sender == IContract(contractAddress).profile());
        _burn(_profileId);
    }

    function updateCrush(
        uint _receiverProfileId, 
        bool _add
    ) external {
        uint _profileId = IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender); 
        crushes[_profileId][_receiverProfileId] = _add;
        if (_add) {
            crushCount[_profileId] += 1;
        } else if (crushCount[_profileId] > 0) {
            crushCount[_profileId] -= 1;
        }
    }

    function checkCrush(uint _profileId) external view {
        require(crushes[_profileId][IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender)], "4");
    }
    
    function updateUriGenerator(address _uriGenerator) external {
        uint collectionId = IMarketPlace(IContract(contractAddress).marketCollections()).addressToCollectionId(msg.sender);
        if (collectionId > 0) {
            uriGenerator[collectionId] = _uriGenerator;
        }
    }

    function _getDescription(uint _tokenId) public view returns(string[] memory) {
        string[] memory _description = new string[](1);
        _description[0] = broadcast[_tokenId];
        return _description;
    }

    function _getFollowerCount(address profile, uint _profileId) internal view returns(uint) {
        return (IProfile(profile).getAllFollowers(_profileId,0)).length;
    }

    function getAccountAt(uint _profileId, uint index) external view returns(address) {
        address[] memory accounts = IProfile(IContract(contractAddress).profile()).getAllAccounts(_profileId,index);
        return accounts[0];
    }

    function updateIdentityProofs(uint _tokenId, uint[] memory _identityProofs) external {
        require(msg.sender == ownerOf(_tokenId));
        identityProofs[_tokenId] = _identityProofs;
        IProfile(IContract(contractAddress).profile()).emitUpdateMiscellaneous(
            1, 
            _tokenId, 
            "", 
            "", 
            0, 
            0,
            address(0x0),
            ""
        );
    }

    function getOptions(uint _tokenId) public view returns(string[] memory optionNames,string[] memory optionValues) {
        optionNames = new string[](3 + identityProofs[_tokenId].length * 2);
        optionValues = new string[](3 + identityProofs[_tokenId].length * 2);
        address profile = IContract(contractAddress).profile();
        uint idx;
        optionNames[idx] = "Is Unique";
        optionValues[idx++] = IProfile(profile).isUnique(_tokenId) ? "Yes" : "No";
        optionNames[idx] = "#Fans";
        optionValues[idx++] = toString(_getFollowerCount(profile, _tokenId));
        optionNames[idx] = "";
        optionValues[idx++] = toString(createdAt[_tokenId]);
        address ssi = IContract(contractAddress).ssi();
        for (uint i = 0; i < identityProofs[_tokenId].length; i++) {
            SSIData memory _metadata = ISSI(ssi).getSSIData(identityProofs[_tokenId][i]);
            optionNames[idx] = _metadata.question;
            optionValues[idx++] = _metadata.answer;
            optionNames[idx] = _metadata.deadline < block.timestamp ? "Auditor(Expired)" : "Auditor";
            optionValues[idx++] = toString(_metadata.auditorProfileId);
        }
    }

    function _constructTokenURI(uint _tokenId, string[] memory _media, string[] memory optionNames, string[] memory optionValues, string[] memory _description) internal view returns(string memory) {
        return INFTSVG(IContract(contractAddress).nftSvg()).constructTokenURI(
            _tokenId,
            address(this),
            ownerOf(_tokenId),
            ownerOf(_tokenId),
            address(0x0),
            _media.length > 0 ? _media : new string[](1),
            optionNames,
            optionValues,
            _description.length > 0 ? _description : new string[](1)
        );
    }

    function tokenURI(uint _tokenId) public view virtual override returns (string memory output) {
        address profile = IContract(contractAddress).profile();
        (,,,,,,uint _collectionId,,,,) = IProfile(profile).profileInfo(_tokenId);
        if (uriGenerator[_collectionId] != address(0x0)) {
            output = IMarketPlace(uriGenerator[_collectionId]).uri(_tokenId);
        } else {
            (string[] memory optionNames, string[] memory optionValues) = getOptions(_tokenId);
            string[] memory media = INFTicket(IContract(contractAddress).nfticketHelper()).getSponsorsMedia(_collectionId, "");
            output = _constructTokenURI(
                _tokenId, 
                media, 
                optionNames, 
                optionValues, 
                _getDescription(_tokenId)
            );
        }
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