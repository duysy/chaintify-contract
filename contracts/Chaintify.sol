// contracts/Chaintify.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Chaintify is ERC1155 {
    uint256 public constant GOLD = 0;
    mapping(uint => string) public customUri;

    constructor() ERC1155("") {
        _mint(msg.sender, GOLD, 10 ** 18, "");
    }

    function _setURI(uint id_, string memory uri_) private {
        customUri[id_] = uri_;
    }

    function uri(
        uint id_
    ) public view override returns (string memory) {
        return customUri[id_];
    }

    function mint(
        address to_,
        uint256 id_,
        uint256 amount_,
        string memory uri_,
        bytes memory data_
    ) public {
        _mint(to_, id_, amount_, data_);
        _setURI(id_, uri_);
    }
}
