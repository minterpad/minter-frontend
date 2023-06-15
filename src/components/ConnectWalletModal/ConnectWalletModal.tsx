import {
    useCallback,
    useMemo,
    useEffect,
    useState,
    useDeferredValue,
} from 'react';
import { cn } from '@bem-react/classname';
import { useLocation, useNavigate } from 'react-router';
import {
    aptosWalletsList,
    badgeColorFromWallet,
    walletTypes,
} from './ConnectWalletModal.constants';
import { WalletTypes } from 'types/enums';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

import './ConnectWalletModal.scss';

const CnConnectWalletModal = cn('connectWalletModal');

export const ConnectWalletModal = () => {
    const { search, state } = useLocation();
    const navigate = useNavigate();
    const isShow = useMemo(() => search.includes('connectWallet'), [search]);
    const { wallets: dynamicWallets } = useDynamicContext();

    console.log(dynamicWallets);

    const stateWalletType = useMemo(() => {
        console.log(state);
        if (!state) return WalletTypes.All;
        return (state?.walletType as WalletTypes) ?? WalletTypes.All;
    }, [state]);

    // useEffect(() => {
    //     if (!state || !stateWalletType) {
    //         navigate('/');
    //     }
    // }, []);

    const [selectedWalletType, setSelectedWalletType] =
        useState(stateWalletType);

    const selectedWalletTypeChangeCallback = useCallback(
        (walletType: WalletTypes) => {
            setSelectedWalletType(walletType);
        },
        [],
    );

    const [walletSearch, setWalletSearch] = useState('');
    const deferredWalletSearch = useDeferredValue(
        walletSearch.toLowerCase().trim(),
    );

    const walletSearchChangeCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setWalletSearch(e.target.value);
        },
        [],
    );

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isShow]);

    // const connectEvmWalletClickCallback = useCallback(
    //     (connector: Connector) => {
    //         return async () => {
    //             try {
    //                 if (connector.name === 'WalletConnect') {
    //                     navigate('/');
    //                 }
    //                 if (evmWallet.connect) {
    //                     await evmWallet.connect(connector);
    //                 }
    //             } catch (err) {
    //                 console.log('ERROR WHILE CONNECTING', err);
    //             } finally {
    //                 navigate('/');
    //             }
    //         };
    //     },
    //     [evmWallet, navigate],
    // );

    // const evmWallets = useMemo(
    //     () =>
    //         evmWallet.connectors.map((connector) => ({
    //             key: connector.id,
    //             name: connector.name,
    //             icon: iconByEvmWalletName[connector.name],
    //             onClick: connectEvmWalletClickCallback(connector),
    //             badge: badgeColorFromWallet[connector.name] ?? '#fff',
    //             type: WalletTypes.Evm,
    //         })),
    //     [evmWallet.connectors, connectEvmWalletClickCallback],
    // );

    // const aptosWalletContext = useAptosWalletContext();

    // const connectAptosWalletClickCallback = useCallback(
    //     (walletName: WalletName<string>) => {
    //         return async () => {
    //             try {
    //                 if (aptosWalletContext.connect) {
    //                     await aptosWalletContext.connect(walletName);
    //                 }
    //             } catch (err) {
    //                 console.log('ERROR WHILE CONNECTING', err);
    //             } finally {
    //                 navigate('/');
    //             }
    //         };
    //     },
    //     [aptosWalletContext, navigate],
    // );

    const aptosWallets = useMemo(
        () =>
            aptosWalletsList.map((wallet) => ({
                key: wallet.name,
                name: wallet.title,
                icon: wallet.icon,
                onClick: () => {},
                badge: badgeColorFromWallet[wallet.name] ?? '#fff',
                type: WalletTypes.Aptos,
            })),
        [],
    );

    // const suiWalletContext = useSuiWalletContext();

    // const connectSuiWalletClickCallback = useCallback(
    //     (wallet: WalletAdapter) => {
    //         return async () => {
    //             try {
    //                 if (suiWalletContext.connect) {
    //                     await suiWalletContext.connect(wallet.name);
    //                 }
    //             } catch (err) {
    //                 console.log('ERROR WHILE CONNECTING', err);
    //             } finally {
    //                 navigate('/');
    //             }
    //         };
    //     },
    //     [suiWalletContext, navigate],
    // );

    // const suiWallets = useMemo(
    //     () =>
    //         suiWalletContext.connectors.map((connector) => ({
    //             key: connector.name,
    //             name: connector.name,
    //             icon: <img src={connector.icon} alt={connector.name} />,
    //             onClick: connectSuiWalletClickCallback(connector),
    //             badge: badgeColorFromWallet[connector.name] ?? '#fff',
    //             type: WalletTypes.Sui,
    //         })),
    //     [suiWalletContext.connectors, connectSuiWalletClickCallback],
    // );

    const walletTypesContent = useMemo(
        () =>
            walletTypes.map((type) => (
                <div
                    key={type.type}
                    onClick={() => selectedWalletTypeChangeCallback(type.type)}
                    className={CnConnectWalletModal('type', {
                        selected: type.type === selectedWalletType,
                    })}
                >
                    {type.icon ? (
                        <div className={CnConnectWalletModal('type-icon')}>
                            {type.icon}
                        </div>
                    ) : null}
                    <div className={CnConnectWalletModal('type-title')}>
                        {type.title}
                    </div>
                </div>
            )),
        [selectedWalletType, selectedWalletTypeChangeCallback],
    );

    const wallets: any = useMemo(
        () => [...aptosWallets],
        [
            aptosWallets,
            // evmWallets, suiWallets, aptosWallets
        ],
    );

    const walletsContent = useMemo(() => {
        return wallets
            .filter((wallet: any) => {
                let result = true;

                if (selectedWalletType !== WalletTypes.All) {
                    if (wallet.type !== selectedWalletType) {
                        result = false;
                    }
                }

                if (deferredWalletSearch) {
                    const lCaseWalletName = wallet.name.toLowerCase();

                    if (!lCaseWalletName.includes(deferredWalletSearch)) {
                        result = false;
                    }
                }

                return result;
            })
            .map((wallet: any) => (
                <div
                    onClick={wallet.onClick}
                    key={wallet.name}
                    className={CnConnectWalletModal('wallet')}
                >
                    <div
                        className={CnConnectWalletModal('wallet-icon')}
                        style={{ backgroundColor: wallet.badge }}
                    >
                        {wallet.icon}
                    </div>
                    <div className={CnConnectWalletModal('wallet-title')}>
                        {wallet.name}
                    </div>
                </div>
            ));
    }, [wallets, deferredWalletSearch, selectedWalletType]);

    return (
        <div className={CnConnectWalletModal()}>
            <div className={CnConnectWalletModal('title')}>Connect wallet</div>
            {isShow ? (
                <div className={CnConnectWalletModal('wallets')}>
                    <div className={CnConnectWalletModal('subtitle')}>
                        Choose type
                    </div>
                    <div className={CnConnectWalletModal('type-grid')}>
                        {walletTypesContent}
                    </div>
                    <div className={CnConnectWalletModal('subtitle')}>
                        Choose wallet
                    </div>
                    <div className={CnConnectWalletModal('wallets-grid')}>
                        {walletsContent}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
