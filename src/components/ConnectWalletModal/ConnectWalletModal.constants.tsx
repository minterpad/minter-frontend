import { Icons } from 'assets';
import { WalletTypes } from 'types/enums';

export const badgeColorFromWallet: any = {
    MetaMask: '#EDC79B',
    WalletConnect: '#fff',
    'OKX Wallet': '#E6E6E6',
    MartianWalletName: '#E6E6E6',
    AptosWalletName: '#FFCACB',
    PontemWalletName: '#09031F',
    NightlyWalletName: '#1C1E31',
    RiseWalletName: '#E7E7E7',
    Suiet: '#48ADFC',
    'Sui Wallet': '#E6E6E6',
    'Ethos Wallet': '#6E25DB',
    GlassWallet: '#FFCACB',
    'Martian Sui Wallet': '#E6E6E6',
    'Morphis Wallet': '#FFFFFF',
    'OneKey Wallet': '#fff',
    'Spacecy Sui Wallet': '#fff',
    'Surf Wallet': '#FFFFFF',
    'Nightly Wallet': '#FFFFFF',
};

export const aptosWalletsList = [
    {
        icon: <Icons.Martian />,
        title: 'Martian',
        name: 'MartianWalletName',
    },
    {
        icon: <Icons.Petra />,
        title: 'Petra',
        name: 'AptosWalletName',
    },
    {
        icon: <Icons.Pontem />,
        title: 'Pontem',
        name: 'PontemWalletName',
    },
    {
        icon: <Icons.Nightly />,
        title: 'Nightly',
        name: 'NightlyWalletName',
    },
    {
        icon: <Icons.RiseBlack />,
        title: 'Rise',
        name: 'RiseWalletName',
    },
];

export const walletTypes = [
    {
        icon: null,
        title: 'All',
        type: WalletTypes.All,
    },
    {
        icon: <Icons.Ethereum />,
        title: 'EVM',
        type: WalletTypes.Evm,
    },
    {
        icon: <Icons.Aptos style={{ width: 22, height: 22 }} />,
        title: 'Aptos',
        type: WalletTypes.Aptos,
    },
    {
        icon: <Icons.Sui />,
        title: 'Sui',
        type: WalletTypes.Sui,
    },
];
