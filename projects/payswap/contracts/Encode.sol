// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma experimental ABIEncoderV2;

import "./Library.sol";

contract Encode {
    bytes32 public e;
    function enc(string memory _tokenId) external returns(bytes32) {
        e = keccak256(abi.encodePacked(_tokenId));
        return e;
    }
}