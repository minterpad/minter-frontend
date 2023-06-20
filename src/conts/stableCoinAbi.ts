export const stableCoinAbi = {
    token: [
        {
            inputs: [
                {
                    internalType: 'string',
                    name: 'name_',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'symbol_',
                    type: 'string',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'subtractedValue',
                    type: 'uint256',
                },
            ],
            name: 'decreaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'addedValue',
                    type: 'uint256',
                },
            ],
            name: 'increaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
    contract: [
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
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'previousAdminRole',
                    type: 'bytes32',
                },
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'newAdminRole',
                    type: 'bytes32',
                },
            ],
            name: 'RoleAdminChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
            ],
            name: 'RoleGranted',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
            ],
            name: 'RoleRevoked',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'srcChainId',
                    type: 'uint256',
                },
            ],
            name: 'SwapInEvent',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'to',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'asset',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'chain',
                    type: 'uint256',
                },
            ],
            name: 'SwapOutEvent',
            type: 'event',
        },
        {
            inputs: [],
            name: 'DEFAULT_ADMIN_ROLE',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'addToAccountWhitelist',
            outputs: [],
            stateMutability: 'nonpayable',
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
            name: 'addToAssetWhitelist',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
            ],
            name: 'getRoleAdmin',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'grantRole',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'hasRole',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'isWhitelistedAccount',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'removeFromAccountWhitelist',
            outputs: [],
            stateMutability: 'nonpayable',
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
            name: 'removeFromAssetWhitelist',
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
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'renounceRole',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'role',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'revokeRole',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes4',
                    name: 'interfaceId',
                    type: 'bytes4',
                },
            ],
            name: 'supportsInterface',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_asset',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_srcChainId',
                    type: 'uint256',
                },
            ],
            name: 'swapInERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'addresspayable',
                    name: '_to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_srcChainId',
                    type: 'uint256',
                },
            ],
            name: 'swapInNative',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_to',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_asset',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_chainId',
                    type: 'uint256',
                },
            ],
            name: 'swapOutERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'to',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'chainId',
                    type: 'uint256',
                },
            ],
            name: 'swapOutNative',
            outputs: [],
            stateMutability: 'payable',
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
            name: 'withdraw',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'addresspayable',
                    name: '_to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'withdraw',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
    ],
};
