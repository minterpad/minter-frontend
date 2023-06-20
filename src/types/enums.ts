export enum WalletTypes {
    All = 'all',
    Aptos = 'aptos',
    Sui = 'sui',
    Evm = 'evm',
}

export enum FetchStatus {
    FETCHING = 'FETCHING',
    FETCHED = 'FETCHED',
    ERROR = 'ERROR',
    INITIAL = 'INITIAL',
}

export enum Token {
    ETH = 'eth',
    USDT = 'usdt',
    USDC = 'usdc',
    MATIC = 'matic',
}

export enum Network {
    GOERLI = 'goerli',
    MUMBAI = 'mumbai',
    OPTIMISM_GOERLI = 'optimism_goerli',
    ARBITRUM_GOERLI = 'arbitrum_goerli',
}

export enum EvmChains {
    GOERLI = 5,
    MUMBAI = 80001,
    OPTIMISM_GOERLI = 420,
    ARBITRUM_GOERLI = 421613,
}
