import { FC, createContext, useCallback, useMemo } from 'react';
import {
    DynamicContextProvider,
    EvmNetwork,
    useDynamicContext,
} from '@dynamic-labs/sdk-react';

export const DynamicWalletContext = createContext<any>({});

const DynamicWalletProvider: FC<any> = ({ children }) => {
    const { primaryWallet, network: chainId, ...other } = useDynamicContext();

    // const evmNetwork = useMemo(() => network, [network]);
    const evmNetworks: EvmNetwork[] = useMemo(
        () => (primaryWallet?.connector as any)?.evmNetworks ?? [],
        [primaryWallet],
    );

    const evmNetwork: EvmNetwork | null = useMemo(() => {
        if (!evmNetworks) return null;

        return (
            evmNetworks.find(
                (network: EvmNetwork) => network.chainId === chainId,
            ) ?? null
        );
    }, [evmNetworks, chainId]);

    const switchNetwork = useCallback(
        async (network: EvmNetwork) => {
            console.log(network);
            try {
                await primaryWallet?.connector.switchNetwork({
                    networkChainId: network.chainId,
                });
            } catch {}
        },
        [primaryWallet],
    );

    return (
        <DynamicWalletContext.Provider
            value={{
                switchNetwork,
                evmNetworks,
                evmNetwork,
            }}
        >
            {children}
        </DynamicWalletContext.Provider>
    );
};

export const DynamicProvider: FC<{ children?: any }> = ({ children }) => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: 'eede3ed2-4511-4c6f-9643-4974ff61fae5',
                initialAuthenticationMode: 'connect-only',
                enableVisitTrackingOnConnectOnly: false,
            }}
        >
            <DynamicWalletProvider>{children}</DynamicWalletProvider>
        </DynamicContextProvider>
    );
};
