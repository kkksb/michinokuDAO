// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MichinokuMarket {
  string defaultMessage; 

  constructor() public {
    defaultMessage = 'Welcome to MichinokuDAO';
  }
  function getMessage() public view returns(string memory) {
    return defaultMessage;
  }
}
