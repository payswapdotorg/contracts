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

    address public token;
    uint private tokenId = 1;
    uint public treasury;
    uint public treasuryFee;
    mapping(uint => uint) public fund;
    uint constant WEEKS_PER_YEAR = 52;
    uint public bufferTime = 86400 * 7 * WEEKS_PER_YEAR;
    uint constant week = 86400 * 7;
    uint public minBountyPercent = 10000;
    mapping(address => bool) public isAdmin;
    mapping(uint => uint) public attachments;
    mapping(uint => address) public isAuditor;
    mapping(uint => address) public channelToValuepool;
    address private contractAddress;
    struct Collateral {
        uint channel;
        uint startTime;
        address owner;
    }
    mapping(uint => Collateral) public collateral;
    mapping(uint => uint) private profileIdToTokenId;
    mapping(uint => uint[WEEKS_PER_YEAR]) public estimationTable;
    COLOR updateColor = COLOR.GOLD;
    COLOR minColor = COLOR.GOLD;
    uint public minToBlacklist;
    uint constant FC_IDX = 3;
    mapping(uint => uint) public channels;
    mapping(uint => EnumerableSet.UintSet) private isBlacklisted;
    mapping(uint => bool) public isValidChannel;

    event Mint (
        address _auditor,
        address _to, 
        uint _stakeId,
        uint _userBountyId, 
        uint _auditorBountyId, 
        uint _channel,
        uint _tokenId
    );
    event Burn(uint profileId);
    event EraseDebt(uint profileId);
    event SellCollateral(uint profileId);
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
    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
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
    function approve(address to, uint256 tokenId) external virtual override {
        address owner = ownerOf(tokenId);
        require(to != owner);

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender())
        );

        _approve(to, tokenId);
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256 tokenId) public view virtual override returns (address) {
        require(_exists(tokenId));

        return _tokenApprovals[tokenId];
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
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId));

        _transfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override {
        require(_isApprovedOrOwner(_msgSender(), tokenId));
        _safeTransfer(from, to, tokenId, _data);
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
        uint256 tokenId,
        bytes memory _data
    ) internal virtual {
        _transfer(from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data));
    }

    /**
     * @dev Returns whether `tokenId` exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     */
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }

    /**
     * @dev Returns whether `spender` is allowed to manage `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {
        require(_exists(tokenId));
        address owner = ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
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
    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0));
        require(!_exists(tokenId));

        _beforeTokenTransfer(address(0), to, tokenId);

        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);

        _afterTokenTransfer(address(0), to, tokenId);

        require(
            _checkOnERC721Received(address(0), to, tokenId, "")
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
    function _burn(uint256 tokenId) internal virtual {
        address owner = ownerOf(tokenId);

        _beforeTokenTransfer(owner, address(0), tokenId);

        // Clear approvals
        _approve(address(0), tokenId);

        _balances[owner] -= 1;
        delete _owners[tokenId];

        emit Transfer(owner, address(0), tokenId);

        _afterTokenTransfer(owner, address(0), tokenId);
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
        uint256 tokenId
    ) internal virtual {
        require(ownerOf(tokenId) == from);
        require(to != address(0));

        _beforeTokenTransfer(from, to, tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);

        _afterTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev Approve `to` to operate on `tokenId`
     *
     * Emits a {Approval} event.
     */
    function _approve(address to, uint256 tokenId) internal virtual {
        _tokenApprovals[tokenId] = to;
        emit Approval(ownerOf(tokenId), to, tokenId);
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
     * @param tokenId uint256 ID of the token to be transferred
     * @param _data bytes optional data to send along with the call
     * @return bool whether the call correctly returned the expected magic value
     */
    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: transfer to non ERC721Receiver implementer");
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

    function updateDev(address _devaddr, bool _add) external {
        require(isAdmin[msg.sender]);
        isAdmin[_devaddr] = _add;
    }
    
    function updateEstimationTable(uint _channel, uint[WEEKS_PER_YEAR] memory _table) external {
        address profile = IContract(contractAddress).profile();
        uint _auditorId = IProfile(profile).addressToProfileId(msg.sender);
        (address gauge,,COLOR _badgeColor) = IAuditor(IContract(contractAddress).auditorNote()).getGaugeNColor(_auditorId);
        uint _category = IAuditor(IContract(contractAddress).auditorHelper()).categories(gauge);
        require(isAdmin[msg.sender] || (_category == FC_IDX && _badgeColor >= updateColor));
        require(IProfile(profile).isUnique(_auditorId) && isValidChannel[_channel]);
        require(isBlacklisted[_auditorId].length() < minToBlacklist);
        estimationTable[_channel] = _table;

        emit UpdateEstimationTable(_channel, _table);
    }

    function addToChannel(uint _profileId, uint _channel) external checkMinAuditor {
        require(IProfile(IContract(contractAddress).profile()).isUnique(_profileId));
        require(isValidChannel[_channel]);
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
    }

    function withdrawTreasury() external {
        require(isAdmin[msg.sender]);
        IERC20(token).safeTransfer(msg.sender, treasury);
        treasury = 0;
    }
    
    /**
        This function returns whether the previous channel has reached a price
        high enough to unlock the requested channel
    */ 
    function updateValidChannel(uint _channel, bool _add) public {
        require(IAuth(contractAddress).devaddr_() == msg.sender);
        isValidChannel[_channel] = _add;
    }

    function getPriceAt(uint _tokenId, uint _time) public view returns(uint _price) {
        uint _numOfWeeks = (block.timestamp + _time - collateral[_tokenId].startTime)/ week;
        _price = estimationTable[collateral[_tokenId].channel][_numOfWeeks % WEEKS_PER_YEAR];
        _price += estimationTable[collateral[_tokenId].channel][WEEKS_PER_YEAR-1] * _numOfWeeks / WEEKS_PER_YEAR;
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
        uint _stakeId,
        uint _userBountyId, 
        uint _auditorBountyId, 
        uint _channel
    ) external {
        _mintTo(_to, _channel);
        address trustBounty = _trustBounty();
        _updateAuditor(
            _auditor,
            _to, 
            tokenId, 
            _stakeId,
            _userBountyId, 
            _auditorBountyId
        );

        _approve(IContract(contractAddress).trustBountyHelper(), tokenId);
        ITrustBounty(trustBounty).addBalance(_userBountyId, trustBounty, 0, tokenId);

        emit Mint(
            _auditor,
            _to, 
            _stakeId,
            _userBountyId, 
            _auditorBountyId, 
            _channel,
            tokenId++
        );
    }
    
    function _mintTo(address _to, uint _channel) internal lock {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(msg.sender);
        require(IProfile(profile).isUnique(_profileId));
        require(profileIdToTokenId[_profileId] == 0);
        require(channels[_profileId] == _channel);
        
        uint _price = estimationTable[_channel][0];
        IERC20(token).safeTransferFrom(msg.sender, address(this), _price);
        _mint(address(this), tokenId);
        
        uint _fee = _price * treasuryFee / 10000;
        treasury += _fee;
        fund[_channel] += _price - _fee;
        profileIdToTokenId[_profileId] = tokenId;
        collateral[tokenId].owner = _to;
        collateral[tokenId].channel = _channel;
        collateral[tokenId].startTime = block.timestamp;
    }

    function notifyReward(uint _channel, uint _amount) external {
        IERC20(IContract(contractAddress).token()).safeTransferFrom(msg.sender, address(this), _amount);
        fund[_channel] += _amount;
    }

    function burn(address _from) external {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(_from);
        uint _tokenId = profileIdToTokenId[_profileId];
        require(_tokenId > 0 && ownerOf(_tokenId) == msg.sender);

        _burn(_tokenId);
        
        delete collateral[_tokenId];
        delete profileIdToTokenId[_profileId];

        emit Burn(_tokenId);
    }

    function eraseDebt(address _account) external lock {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(_account);
        uint _tokenId = profileIdToTokenId[_profileId];

        
        IERC20(token).safeTransferFrom(msg.sender, address(this), getPriceAt(_tokenId, 0));

        delete collateral[_tokenId];
        delete profileIdToTokenId[_profileId];

        emit EraseDebt(_profileId);
    }

    function getProfileId(address _account) external view returns(uint) {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(_account);
        return profileIdToTokenId[_profileId];
    }

    function sellCollateral(address _from) external lock {
        address profile = _profile();
        uint _profileId = IProfile(profile).addressToProfileId(_from);
        uint _tokenId = profileIdToTokenId[_profileId];
        uint _due = getPriceAt(_tokenId, 0);
        require(fund[collateral[_tokenId].channel] >= _due);

        require(_tokenId > 0 && ownerOf(_tokenId) == msg.sender);
        ITrustBounty(IContract(contractAddress).trustBountyHelper()).detach(attachments[_tokenId]);
        
        _burn(_tokenId);
        fund[collateral[_tokenId].channel] -= _due;
        IERC20(token).safeTransfer(msg.sender, _due);

        emit SellCollateral(_profileId);
    }

    function _constructTokenURI(uint _tokenId, string[] memory optionNames, string[] memory optionValues) internal view returns(string memory) {
        return IMarketPlace(IContract(contractAddress).nftSvg()).constructTokenURI(
            _tokenId,
            "",
            token,
            isAuditor[_tokenId],
            collateral[_tokenId].owner,
            address(0x0),
            new string[](1),
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
        optionValues[idx++] = toString(attachments[_tokenId]);
        optionNames[idx] = "PID";
        optionValues[idx++] = toString(IProfile(profile).addressToProfileId(collateral[_tokenId].owner));
        optionNames[idx] = "Channel";
        optionValues[idx++] = toString(collateral[_tokenId].channel);
        optionNames[idx] = "Channel Balance";
        optionValues[idx++] = toString(fund[collateral[_tokenId].channel]);
        optionNames[idx] = "Start";
        optionValues[idx++] = toString(collateral[_tokenId].startTime);
        optionNames[idx] = "Current Price";
        optionValues[idx++] = toString(getPriceAt(_tokenId, 0));
        optionNames[idx] = "Token";
        optionValues[idx++] = string(abi.encodePacked(IMarketPlace(token).symbol()));
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
            require(
                (isAdmin[from] || isAuditor[_tokenId] == from) &&
                (isAdmin[to] || isAuditor[_tokenId] == from)
            );
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
        uint256 tokenId
    ) internal virtual {}

    function _updateAuditor(
        address _auditor, 
        address _user,
        uint _tokenId, 
        uint _stakeId,
        uint _userBountyId, 
        uint _auditorBountyId
    ) internal {
        // Bounty checks
        address trustBounty = _trustBounty();
        (address _owner,address _token,,address claimableBy,,,,,,) = ITrustBounty(trustBounty).bountyInfo(_userBountyId);
        require(_owner == _user && _token == address(this) && claimableBy == _auditor);
        // bounty actually contains requested token id
        _auditorBountyCheck(_auditorBountyId, _tokenId, _auditor);
        ITrustBounty(IContract(contractAddress).trustBountyHelper()).attach(_auditorBountyId);
        attachments[_tokenId] = _auditorBountyId;
        // stake checks
        _stateCheck(_stakeId, _auditor, _user);
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

    function _stateCheck(uint _stakeId, address _auditor, address _user) internal view {
        address stakeMarket = IContract(contractAddress).stakeMarket();
        Stake memory stake = IStakeMarket(stakeMarket).getStake(_stakeId);
        Stake memory parentStake = IStakeMarket(stakeMarket).getStake(stake.parentStakeId);
        require(IStakeMarket(stakeMarket).isStake(_stakeId) && IStakeMarket(stakeMarket).isStake(stake.parentStakeId));
        require(
            (stake.owner == _auditor && parentStake.owner == _user) ||
            (stake.owner == _user && parentStake.owner == _auditor)
        );
    }

    function onERC721Received(address,address,uint256,bytes memory) public virtual returns (bytes4) {
        return this.onERC721Received.selector; 
    }
}