// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MichinokuMarket is ERC721URIStorage {
    mapping(uint256 => string) public tokenName;
    uint256 public tokenCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        // 発行したNFTのIDを指定するためのカウンター
        tokenCounter = 0;
    }

    function getTokenName(uint256 tokenId)
        external
        view
        returns (string memory)
    {
        return tokenName[tokenId];
    }

    function michinokuMint(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }

    function batchMint(string memory tokenURI, uint256 mintAmount)
        public
        returns (uint256)
    {
        for (uint256 i = 0; i < mintAmount; i++) {
            michinokuMint(tokenURI);
        }
        return mintAmount;
    }
}
