export const ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getBetsLocked",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "seed",
        "type": "bytes32"
      }
    ],
    "name": "serverSeed",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "chance",
        "type": "uint256"
      }
    ],
    "name": "calcWinnings",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankroll",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "claimTimeout",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "secret",
        "type": "bytes32"
      }
    ],
    "name": "didWin",
    "outputs": [
      {
        "name": "_r",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMaxPayout",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "isReadyFor",
    "outputs": [
      {
        "name": "_r",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "lockBetsForWithdraw",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newFeed",
        "type": "address"
      }
    ],
    "name": "setFeed",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMinimumBet",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "chance",
        "type": "uint256"
      },
      {
        "name": "secretHash",
        "type": "bytes32"
      }
    ],
    "name": "roll",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isReady",
    "outputs": [
      {
        "name": "_r",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unlockBets",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "secret",
        "type": "bytes32"
      }
    ],
    "name": "getResult",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "secret",
        "type": "bytes32"
      }
    ],
    "name": "claim",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "canClaimTimeout",
    "outputs": [
      {
        "name": "_r",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "hashTo256",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "input",
        "type": "bytes32"
      }
    ],
    "name": "hash",
    "outputs": [
      {
        "name": "_r",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "inputs": [],
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "blocknum",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "chance",
        "type": "uint256"
      }
    ],
    "name": "Bet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "chance",
        "type": "uint256"
      }
    ],
    "name": "Won",
    "type": "event"
  }
];