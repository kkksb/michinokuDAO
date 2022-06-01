// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MichinokuMarket is ERC721URIStorage {
    mapping(uint256 => string) public tokenName;
    uint256 public tokenCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        tokenCounter = 0;
    }

    function createToken(uint256 tokenId, string memory name) external {
        _safeMint(msg.sender, tokenId);
        tokenName[tokenId] = name;
    }

    function getTokenName(uint256 tokenId)
        external
        view
        returns (string memory)
    {
        return tokenName[tokenId];
    }

    function createCollectible(string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }
}
