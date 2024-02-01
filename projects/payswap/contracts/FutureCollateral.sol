// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma experimental ABIEncoderV2;

import "./Library.sol";

contract FutureCollateral is Context, ERC165, IERC721, IERC721Metadata {
    using SafeERC20 for IERC20;
    using Address for address;
    using EnumerableSet for EnumerableSet.UintSet;

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    address private token;
    uint private tokenId = 1;
    uint treasury;
    uint treasuryFee;
    mapping(uint => uint) public fund;
    uint constant WEEKS_PER_YEAR = 52;
    uint bufferTime = 86400 * 7 * WEEKS_PER_YEAR;
    uint constant week = 86400 * 7;
    uint minBountyPercent = 10000;
    mapping(address => bool) public isAdmin;
    struct Attachments {
        uint userBountyId;
        uint auditorBountyId;
    }
    mapping(uint => Attachments) private attachments;
    mapping(uint => address) public isAuditor;
    mapping(address => uint) public paymentCredits;
    address private contractAddress;
    struct Collateral {
        uint channel;
        uint startTime;
        uint toBorrow;
        address owner;
    }
    mapping(uint => Collateral) public collateral;
    mapping(uint => uint) public profileIdToTokenId;
    mapping(uint => uint[WEEKS_PER_YEAR]) public estimationTable;
    COLOR updateColor = COLOR.GOLD;
    COLOR minColor = COLOR.BLACK;
    uint minToBlacklist = 5;
    uint constant FC_IDX = 16;
    mapping(uint => uint) public channels;
    mapping(uint => EnumerableSet.UintSet) private isBlacklisted;
    uint nextChannelId = 1;
    uint credit_divisor = 1;
    address valuepool;
    mapping(uint => uint) public channelStartTime;
    
    event Mint (
        address _auditor,
        address _to, 
        uint _userBountyId, 
        uint _auditorBountyId, 
        uint _channel,
        uint _tokenId
    );
    event Burn(uint tokenId);
    event EraseDebt(uint tokenId);
    event SellCollateral(uint tokenId);
    event AddToChannel(uint profileId, uint channel);
    event UpdateEstimationTable(uint channel, uint[WEEKS_PER_YEAR] table);

    constructor(
        string memory name_,
        string memory symbol_,
        address _token,
        address _contractAddress
    ) {
        _name = name_;
        _symbol = symbol_;
        token = _token;
        isAdmin[msg.sender] = true;
        contractAddress = _contractAddress;
    }

    // simple re-entrancy check 
    uint internal _unlocked = 1;
    modifier lock() {
        require(_unlocked == 1);
        _unlocked = 2;
        _;
        _unlocked = 1;
    }

    function init() external {
        address trustBounty = IContract(contractAddress).trustBounty();
        address trustBountyHelper = IContract(contractAddress).trustBountyHelper();
        _setApprovalForAll(address(this), trustBounty, true);
        _setApprovalForAll(address(this), trustBountyHelper, true);
        erc20(token).approve(trustBounty, type(uint).max);
        erc20(token).approve(trustBountyHelper, type(uint).max);
    }

    modifier checkMinAuditor() {
        if (IAuth(contractAddress).devaddr_() != msg.sender) {
            address profile = IContract(contractAddress).profile();
            uint _auditorId = IProfile(profile).addressToProfileId(msg.sender);
            (address gauge,,COLOR _badgeColor) = IAuditor(IContract(contractAddress).auditorNote()).getGaugeNColor(_auditorId);
            uint _category = IAuditor(IContract(contractAddress).auditorHelper()).categories(gauge);
            require(isAdmin[msg.sender] || (_category == FC_IDX && _badgeColor >= minColor));
            require(IProfile(profile).isUnique(_auditorId));
            require(isBlacklisted[_auditorId].length() < minToBlacklist);
        }
        _;
    }
    
    function getParams() external view returns(uint,uint,uint,uint,uint,uint,address) {
        return (
            treasury,
            treasuryFee,
            bufferTime,
            minBountyPercent,
            minToBlacklist,
            credit_divisor,
            valuepool
        );
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC721-balanceOf}.
     */
    function balanceOf(address owner) external view virtual override returns (uint256) {
        require(owner != address(0));
        return _balances[owner];
    }

    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 _tokenId) public view virtual override returns (address) {
        address owner = _owners[_tokenId];
        require(owner != address(0));
        return owner;
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() external view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() external view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev See {IERC721-approve}.
     */
    function approve(address to, uint256 _tokenId) external virtual override {
        address owner = ownerOf(_tokenId);
        require(to != owner);

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender())
        );

        _approve(to, _tokenId);
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256 _tokenId) public view virtual override returns (address) {
        require(_exists(_tokenId));

        return _tokenApprovals[_tokenId];
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    function setApprovalForAll(address operator, bool approved) external virtual override {
        _setApprovalForAll(_msgSender(), operator, approved);
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(
        address from,
        address to,
        uint256 _tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), _tokenId));

        _transfer(from, to, _tokenId);
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 _tokenId
    ) public virtual override {
        safeTransferFrom(from, to, _tokenId, "");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 _tokenId,
        bytes memory _data
    ) public virtual override {
        require(_isApprovedOrOwner(_msgSender(), _tokenId));
        _safeTransfer(from, to, _tokenId, _data);
    }

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * `_data` is additional data, it has no specified format and it is sent in call to `to`.
     *
     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.
     * implement alternative mechanisms to perform token transfer, such as signature-based.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must exist and be owned by `from`.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function _safeTransfer(
        address from,
        address to,
        uint256 _tokenId,
        bytes memory _data
    ) internal virtual {
        _transfer(from, to, _tokenId);
        require(_checkOnERC721Received(from, to, _tokenId, _data));
    }

    /**
     * @dev Returns whether `tokenId` exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     */
    function _exists(uint256 _tokenId) internal view virtual returns (bool) {
        return _owners[_tokenId] != address(0);
    }

    /**
     * @dev Returns whether `spender` is allowed to manage `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _isApprovedOrOwner(address spender, uint256 _tokenId) internal view virtual returns (bool) {
        require(_exists(_tokenId));
        address owner = ownerOf(_tokenId);
        return (spender == owner || getApproved(_tokenId) == spender || isApprovedForAll(owner, spender));
    }

    /**
     * @dev Mints `tokenId` and transfers it to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - `to` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function _mint(address to, uint256 _tokenId) internal virtual {
        require(to != address(0));
        require(!_exists(_tokenId));

        _beforeTokenTransfer(address(0), to, _tokenId);

        _balances[to] += 1;
        _owners[_tokenId] = to;

        emit Transfer(address(0), to, _tokenId);

        _afterTokenTransfer(address(0), to, _tokenId);

        require(
            _checkOnERC721Received(address(0), to, _tokenId, "")
        );
    }

    /**
     * @dev Destroys `tokenId`.
     * The approval is cleared when the token is burned.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     *
     * Emits a {Transfer} event.
     */
    function _burn(uint256 _tokenId) internal virtual {
        address owner = ownerOf(_tokenId);

        _beforeTokenTransfer(owner, address(0), _tokenId);

        // Clear approvals
        _approve(address(0), _tokenId);

        _balances[owner] -= 1;
        delete _owners[_tokenId];

        emit Transfer(owner, address(0), _tokenId);

        _afterTokenTransfer(owner, address(0), _tokenId);
    }

    /**
     * @dev Transfers `tokenId` from `from` to `to`.
     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `tokenId` token must be owned by `from`.
     *
     * Emits a {Transfer} event.
     */
    function _transfer(
        address from,
        address to,
        uint256 _tokenId
    ) internal virtual {
        require(ownerOf(_tokenId) == from);
        require(to != address(0));

        _beforeTokenTransfer(from, to, _tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), _tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[_tokenId] = to;

        emit Transfer(from, to, _tokenId);

        _afterTokenTransfer(from, to, _tokenId);
    }

    /**
     * @dev Approve `to` to operate on `tokenId`
     *
     * Emits a {Approval} event.
     */
    function _approve(address to, uint256 _tokenId) internal virtual {
        _tokenApprovals[_tokenId] = to;
        emit Approval(ownerOf(_tokenId), to, _tokenId);
    }

    /**
     * @dev Approve `operator` to operate on all of `owner` tokens
     *
     * Emits a {ApprovalForAll} event.
     */
    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal virtual {
        require(owner != operator);
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

    /**
     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.
     * The call is not executed if the target address is not a contract.
     *
     * @param from address representing the previous owner of the given token ID
     * @param to target address that will receive the tokens
     * @param _tokenId uint256 ID of the token to be transferred
     * @param _data bytes optional data to send along with the call
     * @return bool whether the call correctly returned the expected magic value
     */
    function _checkOnERC721Received(
        address from,
        address to,
        uint256 _tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            try IERC721Receiver(to).onERC721Received(_msgSender(), from, _tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721:1");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    function updateAdmin(address _devaddr, bool _add) external {
        require(isAdmin[msg.sender]);
        isAdmin[_devaddr] = _add;
    }
    
    function updateEstimationTable(uint[WEEKS_PER_YEAR] memory _table) external {
        address profile = IContract(contractAddress).profile();
        uint _auditorId = IProfile(profile).addressToProfileId(msg.sender);
        (address gauge,,COLOR _badgeColor) = IAuditor(IContract(contractAddress).auditorNote()).getGaugeNColor(_auditorId);
        uint _category = IAuditor(IContract(contractAddress).auditorHelper()).categories(gauge);
        require(isAdmin[msg.sender] || (_category == FC_IDX && _badgeColor >= updateColor));
        require(IProfile(profile).isUnique(_auditorId));
        require(isBlacklisted[_auditorId].length() < minToBlacklist);
        estimationTable[nextChannelId] = _table;
        channelStartTime[nextChannelId] = block.timestamp;

        emit UpdateEstimationTable(nextChannelId++, _table);
    }

    function addToChannel(uint _profileId, uint _channel) external checkMinAuditor {
        require(IProfile(IContract(contractAddress).profile()).isUnique(_profileId));
        require(_channel < nextChannelId && _channel > 0);
        channels[_profileId] = _channel;

        emit AddToChannel(_profileId, _channel);
    }

    function updateBlacklist(uint _profileId, bool _add) external checkMinAuditor {
        uint _auditorId = IProfile(IContract(contractAddress).profile()).addressToProfileId(msg.sender);
        if (_add) {
            isBlacklisted[_profileId].add(_auditorId);
        } else {
            isBlacklisted[_profileId].remove(_auditorId);
        }
    }

    function updateParams(
        uint _treasuryFee, 
        uint _bufferTime,
        uint _minToBlacklist,
        uint _minBountyPercent,
        address _valuepool,
        COLOR _updateColor,
        COLOR _minColor
    ) external {
        require(isAdmin[msg.sender]);
        treasuryFee = _treasuryFee;
        bufferTime = _bufferTime;
        minToBlacklist = _minToBlacklist;
        minBountyPercent = _minBountyPercent;
        updateColor = _updateColor;
        minColor = _minColor;
        valuepool = _valuepool;
    }

    function updateDivisor(uint _credit_divisor) external {
        require(isAdmin[msg.sender] && _credit_divisor > 1);
        credit_divisor = _credit_divisor;
    }

    function withdrawTreasury() external {
        require(isAdmin[msg.sender]);
        IERC20(token).safeTransfer(msg.sender, treasury);
        treasury = 0;
    }

    function getPriceAt(uint _tokenId, uint _time) public view returns(uint _price) {
        return getChannelPriceAt(collateral[_tokenId].channel, _time);
    }

    function getChannelPriceAt(uint _channel, uint _time) public view returns(uint _price) {
        uint _numOfWeeks = (block.timestamp + _time - channelStartTime[_channel])/ week;
        _price = estimationTable[_channel][_numOfWeeks % WEEKS_PER_YEAR];
        _price += estimationTable[_channel][WEEKS_PER_YEAR-1] * (_numOfWeeks / WEEKS_PER_YEAR);
    }

    function _profile() internal view returns(address) {
        return IContract(contractAddress).profile();
    }

    function _trustBounty() internal view returns(address) {
        return IContract(contractAddress).trustBounty();
    }
    
    function mint(
        address _auditor,
        address _to, 
        uint _userBountyId, 
        uint _auditorBountyId, 
        uint _channel,
        uint _toBorrow
    ) external {
        _mintTo(_to, _channel, _toBorrow);
        address trustBounty = _trustBounty();
        _updateAuditor(
            _auditor,
            _to, 
            tokenId, 
            _userBountyId, 
            _auditorBountyId
        );
        ITrustBounty(trustBounty).addBalance(_userBountyId, trustBounty, 0, tokenId);

        emit Mint(
            _auditor,
            _to, 
            _userBountyId, 
            _auditorBountyId, 
            _channel,
            tokenId++
        );
    }
    
    function _mintTo(address _to, uint _channel, uint _toBorrow) internal lock {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(_to);
        require(IProfile(profile).isUnique(_profileId));
        require(profileIdToTokenId[_profileId] == 0);
        require(channels[_profileId] == _channel);
        
        address trustBountyHelper = IContract(contractAddress).trustBountyHelper();
        uint _price = getChannelPriceAt(_channel, 0);
        uint _fees = ITrustBounty(trustBountyHelper).tradingNFTFee();
        IERC20(token).safeTransferFrom(msg.sender, address(this), _price + _fees);
        paymentCredits[_to] = _price / (2 * credit_divisor);
        _mint(address(this), tokenId);
        
        uint _fee = _price * treasuryFee / 10000;
        treasury += _fee;
        fund[_channel] += _price - _fee;
        profileIdToTokenId[_profileId] = tokenId;
        collateral[tokenId].owner = _to;
        collateral[tokenId].channel = _channel;
        collateral[tokenId].startTime = block.timestamp;
        collateral[tokenId].toBorrow = _toBorrow;
    }


    function _updateAuditor(
        address _auditor, 
        address _user,
        uint _tokenId, 
        uint _userBountyId, 
        uint _auditorBountyId
    ) internal {
        // Bounty checks
        address trustBounty = _trustBounty();
        address trustBountyHelper = IContract(contractAddress).trustBountyHelper();
        (address _owner,address _token,,address claimableBy,,,,,,) = ITrustBounty(trustBounty).bountyInfo(_userBountyId);
        require(_owner == _user && _token == address(this) && claimableBy == address(0));
        // bounty actually contains requested token id
        _auditorBountyCheck(_auditorBountyId, _tokenId, _auditor);
        ITrustBounty(trustBountyHelper).attach(_auditorBountyId);
        ITrustBounty(trustBountyHelper).attach(_userBountyId);
        attachments[_tokenId].userBountyId = _userBountyId;
        attachments[_tokenId].auditorBountyId = _auditorBountyId;
        isAuditor[_tokenId] = _auditor;
    }

    function _auditorBountyCheck(
        uint _auditorBountyId, 
        uint _tokenId,
        address _auditor
    ) internal view {
        address trustBounty = _trustBounty();
        (address _owner2,address _token2,,address claimableBy2,,,uint endTime,,,) = ITrustBounty(trustBounty).bountyInfo(_auditorBountyId);
        require(_owner2 == _auditor && _token2 == IContract(contractAddress).token() && claimableBy2 == address(0x0) && block.timestamp + bufferTime < endTime);
        uint _balance = ITrustBounty(trustBounty).getBalance(_auditorBountyId);
        require(_balance >= getPriceAt(_tokenId, 0) * minBountyPercent / 10000);
    }

    function notifyReward(uint _channel, uint _amount) external {
        IERC20(IContract(contractAddress).token()).safeTransferFrom(msg.sender, address(this), _amount);
        fund[_channel] += _amount;
        paymentCredits[msg.sender] = _amount / credit_divisor;
    }

    function burn() external {
        uint _profileId = IProfile(_profile()).addressToProfileId(msg.sender);
        uint _tokenId = profileIdToTokenId[_profileId];
        address _owner = ownerOf(_tokenId);
        require(_owner == msg.sender || _owner == address(this));
        address trustBountyHelper = IContract(contractAddress).trustBountyHelper();

        _burn(_tokenId);

        ITrustBounty(trustBountyHelper).detach(attachments[_tokenId].userBountyId);
        ITrustBounty(trustBountyHelper).detach(attachments[_tokenId].auditorBountyId);

        delete collateral[_tokenId];
        delete attachments[_tokenId];
        delete profileIdToTokenId[_profileId];

        emit Burn(_tokenId);
    }

    function eraseDebt(address _account) external lock {
        uint _profileId = IProfile(_profile()).addressToProfileId(_account);
        uint _tokenId = profileIdToTokenId[_profileId];

        
        uint _due = getPriceAt(_tokenId, 0);
        IERC20(token).safeTransferFrom(msg.sender, address(this), _due);
        fund[collateral[_tokenId].channel] += _due;

        delete collateral[_tokenId];
        delete profileIdToTokenId[_profileId];

        emit EraseDebt(_tokenId);
    }

    function sellCollateral(address _borrower, uint _bountyId, uint _claimId) external lock {
        address trustBounty = _trustBounty();
        address trustBountyHelper = IContract(contractAddress).trustBountyHelper();
        address _bountyOwner = ITrustBounty(trustBounty).getOwner(_bountyId);
        Claim memory _claim = ITrustBounty(trustBounty).claims(_bountyId, _claimId - _bountyId - 1);
        require(_claim.winner == msg.sender && _claim.status == StakeStatusEnum.AtPeace && !_claim.friendly && _bountyOwner == _borrower);
        uint _profileId = IProfile(_profile()).addressToProfileId(_borrower);
        uint _tokenId = profileIdToTokenId[_profileId];
        uint _due = Math.min(getPriceAt(_tokenId, 0), collateral[_tokenId].toBorrow);
        require(fund[collateral[_tokenId].channel] > _due && isAuditor[_tokenId] == msg.sender);
        require(ownerOf(_tokenId) == address(this));

        ITrustBounty(trustBountyHelper).detach(_bountyId);
        ITrustBounty(trustBountyHelper).detach(attachments[_tokenId].auditorBountyId);
        
        _burn(_tokenId);
        delete attachments[_tokenId];

        fund[collateral[_tokenId].channel] -= _due;
        IERC20(token).safeTransfer(msg.sender, _due);

        emit SellCollateral(_tokenId);
    }

    function _constructTokenURI(uint _tokenId, string[] memory optionNames, string[] memory optionValues) internal view returns(string memory) {
        return IMarketPlace(IContract(contractAddress).nftSvg()).constructTokenURI(
            _tokenId,
            token,
            isAuditor[_tokenId],
            collateral[_tokenId].owner,
            address(0x0),
            IValuePool(IContract(contractAddress).valuepoolHelper2()).getMedia(valuepool,_tokenId),
            optionNames,
            optionValues,
            new string[](1)
        );
    }

    function tokenURI(uint _tokenId) public override view returns (string memory output) {
        uint idx;
        string[] memory optionNames = new string[](8);
        string[] memory optionValues = new string[](8);
        address profile = IContract(contractAddress).profile();
        optionValues[idx++] = toString(_tokenId);
        optionNames[idx] = "AID";
        optionValues[idx++] = toString(attachments[_tokenId].auditorBountyId);
        optionNames[idx] = "PID";
        optionValues[idx++] = toString(IProfile(profile).addressToProfileId(collateral[_tokenId].owner));
        optionNames[idx] = "Channel";
        optionValues[idx++] = toString(collateral[_tokenId].channel);
        optionNames[idx] = "Balance";
        optionValues[idx++] = toString(fund[collateral[_tokenId].channel]);
        optionNames[idx] = "Mint Date";
        optionValues[idx++] = toString(collateral[_tokenId].startTime);
        optionNames[idx] = "Price";
        optionValues[idx++] = toString(getPriceAt(_tokenId, 0));
        optionNames[idx] = "Token";
        optionValues[idx++] = IMarketPlace(token).symbol();
        output = _constructTokenURI(
            _tokenId, 
            optionNames, 
            optionValues 
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

    /**
     * @dev See {ERC1155-_beforeTokenTransfer}.
     *
     * Requirements:
     *
     * - the contract must not be paused.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 _tokenId
    )
        internal
        virtual
        // override 
    {
        // super._beforeTokenTransfer(from, to, _tokenId);
        if (from != address(this) && to != address(this)) {
            require(isAdmin[from] || isAdmin[to]);
        }
    }


    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 _tokenId
    ) internal virtual {}

    // function _stateCheck(uint _stakeId, address _auditor, address _user) internal view {
    //     address stakeMarket = IContract(contractAddress).stakeMarket();
    //     Stake memory stake = IStakeMarket(stakeMarket).getStake(_stakeId);
    //     Stake memory parentStake = IStakeMarket(stakeMarket).getStake(stake.parentStakeId);
    //     require(IStakeMarket(stakeMarket).isStake(_stakeId) && IStakeMarket(stakeMarket).isStake(stake.parentStakeId));
    //     require(
    //         (stake.owner == _auditor && parentStake.owner == _user) ||
    //         (stake.owner == _user && parentStake.owner == _auditor)
    //     );
    // }

    function onERC721Received(address,address,uint256,bytes memory) public virtual returns (bytes4) {
        return this.onERC721Received.selector; 
    }
}

contract ColleteralCredits is ERC721Pausable {
    address public contractAddress;
    address public fc;
    uint public tokenId = 1;
    mapping(uint => uint) minted;
    mapping(uint => uint) public spentPaymentCredits;

    constructor(address _contractAddress, address _fc) ERC721("ColleteralCredits", "FCredits") {
        fc = _fc;
        contractAddress = _contractAddress;
    }

    function setContractAddress(address _contractAddress) external {
        require(contractAddress == address(0x0) || IAuth(contractAddress).devaddr_() == msg.sender);
        contractAddress = _contractAddress;
    }

    function verifyNFT(uint _tokenId, uint merchantId, string memory item) external view returns(uint) {
        address _user = ownerOf(_tokenId);
        address _profileAddress = IContract(contractAddress).profile();
        uint _profileId = IProfile(_profileAddress).addressToProfileId(msg.sender);
        return IFutureCollateral(fc).paymentCredits(_user) > spentPaymentCredits[_profileId]
        ? IFutureCollateral(fc).paymentCredits(_user) - spentPaymentCredits[_profileId]
        : 0;
    }

    function mint() external {
        address _profileAddress = IContract(contractAddress).profile();
        uint _profileId = IProfile(_profileAddress).addressToProfileId(msg.sender);
        require(IProfile(_profileAddress).isUnique(_profileId), "CC1");
        if (minted[_profileId] > 0) {
            spentPaymentCredits[_profileId] = IFutureCollateral(fc).paymentCredits(msg.sender);
        }
        minted[_profileId] += 1;
        _safeMint(msg.sender, tokenId++, msg.data);
    }
}