// contracts/Chaintify.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Chaintify is ERC1155 {
    mapping(uint => string) private customUri;
    mapping(uint => uint) public maxSupply;
    mapping(uint => uint) public totalSupply;

    constructor() ERC1155("") {}

    function _setURI(uint id_, string memory uri_) private {
        customUri[id_] = uri_;
    }

    function _setMaxSupply(uint id_, uint maxSupply_) private {
        maxSupply[id_] = maxSupply_;
    }

    function _addTotalSupply(uint id_, uint totalSupply_) private {
        totalSupply[id_] = totalSupply[id_] + totalSupply_;
    }

    function uri(uint id_) public view override returns (string memory) {
        return customUri[id_];
    }

    function mint(
        address to_,
        uint256 id_,
        uint256 amount_,
        uint256 maxSupply_,
        string memory uri_,
        bytes memory data_
    ) public {
        _mint(to_, id_, amount_, data_);
        _addTotalSupply(id_, amount_);
        if (maxSupply[id_] == 0) {
            require(amount_ <= maxSupply_, "Amount than maxSupply");
            _setMaxSupply(id_, maxSupply_);
        }
        bytes memory customUriByte = bytes(customUri[id_]);
        if (customUriByte.length == 0) {
            _setURI(id_, uri_);
        }
    }
}
