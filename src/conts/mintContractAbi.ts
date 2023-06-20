export const mintContractAbi = {
    abi: [
        {
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'buyer',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes',
                    name: 'btcAddress',
                    type: 'bytes',
                },
            ],
            name: 'BtcAddressSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'buyer',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes',
                    name: 'btcAddress',
                    type: 'bytes',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'currency',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amountIn',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amountOut',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'cohort',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'price',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'validBefore',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'nonce',
                    type: 'uint256',
                },
            ],
            name: 'TokenBought',
            type: 'event',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
            ],
            name: 'addCurrency',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_buyer',
                    type: 'address',
                },
                {
                    internalType: 'bytes',
                    name: '_btcAddress',
                    type: 'bytes',
                },
                {
                    internalType: 'address',
                    name: '_currency',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_amountIn',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_amountOut',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_cohort',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_price',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_validBefore',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_nonce',
                    type: 'uint256',
                },
                {
                    internalType: 'uint8',
                    name: 'v',
                    type: 'uint8',
                },
                {
                    internalType: 'bytes32',
                    name: 'r',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 's',
                    type: 'bytes32',
                },
            ],
            name: 'buy',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'disableDemoMode',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'enableDemoMode',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_messageHash',
                    type: 'bytes32',
                },
            ],
            name: 'getEthSignedMessageHash',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_ethSignedMessageHash',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes',
                    name: '_signature',
                    type: 'bytes',
                },
            ],
            name: 'recoverSigner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
            ],
            name: 'removeCurrency',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_buyer',
                    type: 'address',
                },
                {
                    internalType: 'bytes',
                    name: '_btcAddress',
                    type: 'bytes',
                },
            ],
            name: 'saveBTCAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_signer',
                    type: 'address',
                },
            ],
            name: 'setMinterSigner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes',
                    name: 'sig',
                    type: 'bytes',
                },
            ],
            name: 'splitSignature',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: 'r',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 's',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint8',
                    name: 'v',
                    type: 'uint8',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_buyer',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_currency',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_amountIn',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_amountOut',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_cohort',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_price',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_validBefore',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_nonce',
                    type: 'uint256',
                },
                {
                    internalType: 'uint8',
                    name: 'v',
                    type: 'uint8',
                },
                {
                    internalType: 'bytes32',
                    name: 'r',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 's',
                    type: 'bytes32',
                },
            ],
            name: 'verifySignature',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_to',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
            ],
            name: 'withdrawAllERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address payable',
                    name: '_to',
                    type: 'address',
                },
            ],
            name: 'withdrawAllNative',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
            ],
            name: 'withdrawERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address payable',
                    name: '_to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
            ],
            name: 'withdrawNative',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
    ],
};
