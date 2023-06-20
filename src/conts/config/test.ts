import { EvmChains, Network, Token } from 'types/enums';

export const testConfig = {
    [EvmChains.GOERLI]: {
        [Token.ETH]: {
            contract: '0x4996E8EEBD486eB873F89cC8A3A5283A6B239a26',
            token: '0x0000000000000000000000000000000000000000',
            mintFunction: 'buy',
            decimals: 18,
        },
        [Token.USDT]: {
            contract: '0x4996E8EEBD486eB873F89cC8A3A5283A6B239a26',
            token: '0x79C950C7446B234a6Ad53B908fBF342b01c4d446',
            mintFunction: 'buy',
            decimals: 6,
        },
        [Token.USDC]: {
            contract: '0x4996E8EEBD486eB873F89cC8A3A5283A6B239a26',
            token: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
            mintFunction: 'buy',
            decimals: 6,
        },
    },
    [EvmChains.OPTIMISM_GOERLI]: {
        [Token.ETH]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x0000000000000000000000000000000000000000',
            mintFunction: 'buy',
            decimals: 18,
        },
        [Token.USDT]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x853eb4ba5d0ba2b77a0a5329fd2110d5ce149ece',
            mintFunction: 'buy',
            decimals: 6,
        },
        [Token.USDC]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E',
            mintFunction: 'buy',
            decimals: 6,
        },
    },
    [EvmChains.ARBITRUM_GOERLI]: {
        [Token.ETH]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x0000000000000000000000000000000000000000',
            mintFunction: 'buy',
            decimals: 18,
        },
        [Token.USDT]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '-',
            mintFunction: 'buy',
            decimals: 6,
        },
        [Token.USDC]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892',
            mintFunction: 'buy',
            decimals: 6,
        },
    },
    [EvmChains.MUMBAI]: {
        [Token.MATIC]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0x0000000000000000000000000000000000000000',
            mintFunction: 'buy',
            decimals: 18,
        },
        [Token.USDT]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0xAcDe43b9E5f72a4F554D4346e69e8e7AC8F352f0',
            mintFunction: 'buy',
            decimals: 6,
        },
        [Token.USDC]: {
            contract: '0x7ca4Ce35f65e5ba866C9959F3787F2Fd6368b8c7',
            token: '0xe9dce89b076ba6107bb64ef30678efec11939234',
            mintFunction: 'buy',
            decimals: 6,
        },
    },
};
