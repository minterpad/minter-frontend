import { FC, createContext, useCallback, useMemo } from 'react';
import {
    DynamicContextProvider,
    EvmNetwork,
    useDynamicContext,
} from '@dynamic-labs/sdk-react';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import { useContractWrite, useContractRead } from 'wagmi';
import { waitForTransaction } from '@wagmi/core';
import { config } from 'conts';
import { useAppSelector } from 'hooks/useAppSelector';
import { EvmChains, Token } from 'types/enums';
import { stableCoinAbi } from 'conts/stableCoinAbi';
import moment from 'moment';
import { mintContractAbi } from 'conts/mintContractAbi';
import {
    aIsGreaterThanOrEqualToB,
    multipliedByDecimals,
} from 'utils/bignumber';
import { toDecimals } from 'utils/decimals';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { mintActions } from 'store/mint/mint.actions';
import { stringToHex } from 'utils/string';

export const DynamicWalletContext = createContext<any>({});

const DynamicWalletProvider: FC<any> = ({ children }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { primaryWallet, network: chainId } = useDynamicContext();
    const selectedToken = useAppSelector((store) => store.mint.selectedToken);

    const address = useMemo(() => primaryWallet?.address, [primaryWallet]);

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

    const currConfig = useMemo(() => {
        if (!evmNetwork) return config[EvmChains.GOERLI][Token.ETH];

        if (
            evmNetwork.chainId !== EvmChains.MUMBAI &&
            selectedToken === Token.MATIC
        ) {
            return config[EvmChains.MUMBAI][selectedToken];
        }

        if (evmNetwork.chainId !== EvmChains.MUMBAI) {
            return config[evmNetwork.chainId][selectedToken];
        }

        if (evmNetwork.chainId === EvmChains.MUMBAI) {
            if (selectedToken === Token.ETH) {
                return config[EvmChains.MUMBAI][Token.MATIC];
            }
            return config[EvmChains.MUMBAI][selectedToken];
        }

        return config[evmNetwork?.chainId][selectedToken];
    }, [evmNetwork, selectedToken]);

    const allowance = useContractRead({
        abi: stableCoinAbi?.token as any,
        address: currConfig?.token as `0x${string}`,
        functionName: 'allowance',
        args: [address, currConfig?.contract],
        enabled: false,
        cacheOnBlock: false,
    });

    const fetchAllowance = useCallback(async () => {
        return await allowance.refetch().then(
            (response) =>
                response.data as unknown as {
                    _hex: string;
                    isBignumber: boolean;
                },
        );
    }, [allowance]);

    const checkIsTokenApproved = useCallback(
        async (amount: string) => {
            const currAllowance = await fetchAllowance();

            if (!currAllowance?._hex) {
                return false;
            }

            return aIsGreaterThanOrEqualToB(currAllowance._hex, amount);
        },
        [fetchAllowance],
    );

    const approveContract = useContractWrite({
        abi: stableCoinAbi?.token as any,
        address: currConfig?.token as `0x${string}`,
        functionName: 'approve',
        mode: 'recklesslyUnprepared',
    });

    const approveToken = useCallback(
        async (amount: string) => {
            try {
                if (approveContract.writeAsync) {
                    const { wait } = await approveContract.writeAsync({
                        recklesslySetUnpreparedArgs: [
                            currConfig?.contract,
                            '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                        ],
                    });

                    await wait(1);

                    const isEvmTokenApproved = await checkIsTokenApproved(
                        amount,
                    );

                    return isEvmTokenApproved;
                }
            } catch (err: any) {
                throw err;
            }
        },
        [currConfig, approveContract, checkIsTokenApproved],
    );

    const mintContract = useContractWrite({
        address: currConfig.contract as `0x${string}`,
        abi: mintContractAbi?.abi,
        functionName: (currConfig as unknown as any)?.mintFunction,
        chainId: evmNetwork?.chainId,
        mode: 'recklesslyUnprepared',
    });

    const mint = useCallback(
        async (transaction: any) => {
            const now = moment();
            now.add(1, 'h');

            const amount = toDecimals(
                transaction.selectedTokenTotal.toFixed(currConfig.decimals),
                currConfig.decimals,
            );

            const encoder = new TextEncoder();

            const uint8Array = encoder.encode(transaction?.btcAddress);

            const btcAddress = transaction?.btcAddress ? uint8Array : [];

            try {
                const mintTokenArguments: any = {
                    recklesslySetUnpreparedArgs: [
                        address, // адрес покупателя
                        btcAddress, // btc address,
                        currConfig.token, // адресс монеты
                        amount, //скока деняк кидать в контракт
                        transaction.count, // количество нфтишек для минта
                        1, // номер когорты
                        0, // цена минта нфт
                        now.unix(), // валид бефоре
                        0,
                        0,
                        `0x${new Array(64).fill(0).join('')}`,
                        `0x${new Array(64).fill(0).join('')}`,
                    ],
                };

                console.log(mintTokenArguments);

                navigate('?modal=loader');

                if (
                    selectedToken === Token.ETH ||
                    selectedToken === Token.MATIC
                ) {
                    mintTokenArguments.recklesslySetUnpreparedOverrides = {
                        value: BigInt(amount),
                    };
                } else {
                    const isTokenApproved = await checkIsTokenApproved(
                        String(amount),
                    );

                    if (!isTokenApproved) {
                        await approveToken(String(amount));
                    }
                }

                if (mintContract.writeAsync) {
                    const { hash, wait } = await mintContract.writeAsync(
                        mintTokenArguments,
                    );

                    dispatch(
                        mintActions.updateMintTransactionBtcAddress({
                            txHash: hash,
                            date: moment().unix(),
                        }),
                    );

                    await wait(1);

                    navigate('/success');
                }
            } catch (err: any) {
                navigate('?modal=error', {
                    state: {
                        error: err?.shortMessage ?? err?.message,
                    },
                });
            }
        },
        [
            address,
            mintContract,
            currConfig,
            approveToken,
            checkIsTokenApproved,
            selectedToken,
            navigate,
            dispatch,
        ],
    );

    const saveBtcAddressContract = useContractWrite({
        address: currConfig.contract as `0x${string}`,
        abi: mintContractAbi?.abi,
        functionName: 'saveBTCAddress',
        chainId: evmNetwork?.chainId,
        mode: 'recklesslyUnprepared',
    });

    const saveBtcAddress = useCallback(
        async (btcAddress: string) => {
            try {
                navigate('?modal=loader');

                const encoder = new TextEncoder();

                const uint8Array = encoder.encode(btcAddress);

                if (saveBtcAddressContract.writeAsync) {
                    const { hash, wait } =
                        await saveBtcAddressContract.writeAsync({
                            recklesslySetUnpreparedArgs: [address, uint8Array],
                        });

                    await wait(1);

                    dispatch(
                        mintActions.setMintTransactionBtcAddress(btcAddress),
                    );

                    navigate('?modal=success');
                }
            } catch (err: any) {
                navigate('?modal=error', { state: { error: err.message } });
            }
        },
        [address, saveBtcAddressContract, navigate, dispatch],
    );

    return (
        <DynamicWalletContext.Provider
            value={{
                switchNetwork,
                evmNetworks,
                evmNetwork,
                mint,
                saveBtcAddress,
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
            <DynamicWagmiConnector>
                <DynamicWalletProvider>{children}</DynamicWalletProvider>
            </DynamicWagmiConnector>
        </DynamicContextProvider>
    );
};
