// contracts/Razec.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Razec is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("Razec", "RZC")
        Ownable(initialOwner)
    {}
}