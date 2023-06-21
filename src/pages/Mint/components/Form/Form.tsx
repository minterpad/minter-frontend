import { cn } from '@bem-react/classname';
import { Button, Counter, Select } from 'components';
import { Link } from 'react-router-dom';
import { Icons } from 'assets';
import { useCallback, useEffect, useMemo, useState } from 'react';

import './Form.scss';
import { useDynamic } from 'hooks/useDynamic';
import {
    EvmNetwork,
    useDynamicContext,
    DynamicConnectButton,
} from '@dynamic-labs/sdk-react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { EvmChains, Token } from 'types/enums';
import { useAppSelector } from 'hooks/useAppSelector';
import { mintActions } from 'store/mint/mint.actions';
import { fetchCoinsPrice } from 'api/coingecko';
import { coingeckoIdFromToken } from 'conts/mappers';

const CnForm = cn('form');

interface IFormProps {}

const baseServiceFee = 0.000005;
const baseTxnFee = 0.000002;

export const Form: React.FC<IFormProps> = () => {
    const dispatch = useAppDispatch();
    const { evmNetwork, address } = useDynamic();
    const [mintCount, setMintCount] = useState(1);
    const [tokensPrice, setTokensPrice] = useState<any>(null);
    const selectedToken = useAppSelector((store) => store.mint.selectedToken);

    useEffect(() => {
        fetchCoinsPrice().then((res) => setTokensPrice(res));
    }, []);

    const {
        serviceFee,
        txnFee,
        selectedTokenServiceFee,
        selectedTokenTxnFee,
        btcTotal,
        selectedTokenTotal,
    } = useMemo(() => {
        let serviceFee = baseServiceFee * mintCount;
        let txnFee = baseTxnFee * mintCount;

        if (!tokensPrice) return { serviceFee, txnFee };
        const btcRate = tokensPrice.bitcoin.usd;
        const ethRate = tokensPrice[coingeckoIdFromToken[Token.ETH]].usd;
        const maticRate = tokensPrice[coingeckoIdFromToken[Token.MATIC]].usd;

        if (selectedToken === Token.USDC || selectedToken === Token.USDT) {
            const selectedTokenServiceFee = btcRate * serviceFee;
            const selectedTokenTxnFee = btcRate * txnFee;
            const btcTotal = serviceFee + txnFee;
            const selectedTokenTotal =
                selectedTokenServiceFee + selectedTokenTxnFee;

            return {
                serviceFee,
                txnFee,
                selectedTokenServiceFee,
                selectedTokenTxnFee,
                btcTotal,
                selectedTokenTotal,
            };
        } else {
            const selectedTokenServiceFee =
                (btcRate * serviceFee) /
                (selectedToken === Token.ETH ? ethRate : maticRate);
            const selectedTokenTxnFee =
                (btcRate * txnFee) /
                (selectedToken === Token.ETH ? ethRate : maticRate);
            const btcTotal = serviceFee + txnFee;
            const selectedTokenTotal =
                selectedTokenServiceFee + selectedTokenTxnFee;
            return {
                serviceFee,
                txnFee,
                selectedTokenServiceFee,
                selectedTokenTxnFee,
                btcTotal,
                selectedTokenTotal,
            };
        }
    }, [tokensPrice, mintCount, selectedToken]);

    const mintCountChangeCallback = useCallback((value: number) => {
        setMintCount(value);
    }, []);

    const mintClickCallback = useCallback(() => {
        dispatch(
            mintActions.setMintTransaction({
                serviceFee,
                txnFee,
                selectedTokenServiceFee,
                selectedTokenTxnFee,
                selectedToken,
                btcTotal,
                selectedTokenTotal,
                network: evmNetwork.vanityName ?? evmNetwork?.chainName,
                count: mintCount,
            }),
        );
    }, [
        dispatch,
        serviceFee,
        txnFee,
        selectedToken,
        selectedTokenTotal,
        selectedTokenServiceFee,
        selectedTokenTxnFee,
        btcTotal,
        evmNetwork,
        mintCount,
    ]);

    return (
        <div className={CnForm()}>
            <div className={CnForm('head')}>
                <div className={CnForm('title')}>Select Token & Network</div>

                <MintSelect />

                <div className={CnForm('title')}>Select Count to Mint</div>

                <div className={CnForm('counter')}>
                    <Counter
                        max={100}
                        value={mintCount}
                        onChange={mintCountChangeCallback}
                    />

                    <div className={CnForm('subtext')}>
                        Your limit for mint: 100
                    </div>
                </div>
            </div>

            <div className={CnForm('info')}>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Mint Price:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>FREE</div>
                        <div className={CnForm('subtext')}>
                            0 {selectedToken}
                        </div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Subtotal:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>0 BTC</div>
                        <div className={CnForm('subtext')}>
                            0 {selectedToken}
                        </div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Service fee:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            {serviceFee.toFixed(6)} BTC
                        </div>
                        <div className={CnForm('subtext')}>
                            {selectedTokenServiceFee?.toFixed(6)}{' '}
                            {selectedToken}
                        </div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            TxN fee:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            {txnFee.toFixed(6)} BTC
                        </div>
                        <div className={CnForm('subtext')}>
                            {selectedTokenTxnFee?.toFixed(6)} {selectedToken}
                        </div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left', { total: true })}>
                        <div className={CnForm('info-item-title')}>Total:</div>
                    </div>
                    <div className={CnForm('info-item-right', { total: true })}>
                        <div className={CnForm('info-item-price')}>
                            {selectedTokenTotal?.toFixed(6)} {selectedToken}
                        </div>
                        <div className={CnForm('subtext')}>
                            {btcTotal?.toFixed(6)} BTC
                        </div>
                    </div>
                </div>

                <div className={CnForm('action')}>
                    <Link to="?modal=provideAddress">
                        <Button
                            disabled={!evmNetwork}
                            onClick={mintClickCallback}
                            view="orange"
                            size="l"
                        >
                            Mint
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const tokensList = [
    {
        icon: <Icons.Eth />,
        title: 'ETH',
        value: Token.ETH,
    },
    {
        icon: <Icons.Usdt />,
        title: 'USDT',
        value: Token.USDT,
    },
    {
        icon: <Icons.Usdc />,
        title: 'USDC',
        value: Token.USDC,
    },
    {
        icon: <Icons.Matic />,
        title: 'MATIC',
        value: Token.MATIC,
    },
];

const itemFromToken = {
    [Token.ETH]: {
        icon: <Icons.Eth />,
        title: 'ETH',
    },
    [Token.USDT]: {
        icon: <Icons.Usdt />,
        title: 'USDT',
    },
    [Token.USDC]: {
        icon: <Icons.Usdc />,
        title: 'USDC',
    },
    [Token.MATIC]: {
        icon: <Icons.Matic />,
        title: 'MATIC',
    },
};

const MintSelect = () => {
    const dispatch = useAppDispatch();
    const { switchNetwork, evmNetworks, evmNetwork } = useDynamic();
    const selectedToken = useAppSelector((store) => store.mint.selectedToken);

    const networkSelectClickCallback = useCallback(
        (value: EvmNetwork) => {
            switchNetwork(value).then(() => {
                if (
                    value.chainId === EvmChains.MUMBAI &&
                    selectedToken === Token.ETH
                ) {
                    dispatch(mintActions.setSelectedToken(Token.MATIC));
                }

                if (
                    value.chainId !== EvmChains.MUMBAI &&
                    selectedToken === Token.MATIC
                ) {
                    dispatch(mintActions.setSelectedToken(Token.ETH));
                }
            });
        },
        [dispatch, switchNetwork, selectedToken],
    );

    useEffect(() => {
        if (evmNetwork) {
            if (
                evmNetwork.chainId === EvmChains.MUMBAI &&
                selectedToken === Token.ETH
            ) {
                dispatch(mintActions.setSelectedToken(Token.MATIC));
            }

            if (
                evmNetwork.chainId !== EvmChains.MUMBAI &&
                selectedToken === Token.MATIC
            ) {
                dispatch(mintActions.setSelectedToken(Token.ETH));
            }
        }
    }, [evmNetwork, dispatch]);

    const networkItems = useMemo(
        () =>
            evmNetworks.map((network: EvmNetwork) => ({
                icon: (
                    <img
                        src={network?.iconUrls ? network?.iconUrls[0] : ''}
                        alt={network.chainName}
                    />
                ),
                title: network.vanityName ?? network?.chainName,
                value: network,
            })),
        [evmNetworks],
    );

    const selectNetworkContent = useMemo(() => {
        if (!evmNetwork) return null;

        return (
            <Select
                itemClickHandler={networkSelectClickCallback}
                selectedItem={{
                    icon: (
                        <img
                            src={evmNetwork.iconUrls[0]}
                            alt={evmNetwork.chainName}
                        />
                    ),
                    title: evmNetwork.vanityName ?? evmNetwork.chainName,
                }}
                items={networkItems}
            />
        );
    }, [evmNetwork, networkItems, networkSelectClickCallback]);

    const tokenSelectClickCallback = useCallback(
        (value: Token) => {
            dispatch(mintActions.setSelectedToken(value));
        },
        [dispatch],
    );

    const selectedTokenItem = useMemo(
        () => itemFromToken[selectedToken],
        [selectedToken],
    );

    const tokenItems = useMemo(() => {
        if (!evmNetwork?.chainId) return [];

        if (evmNetwork?.chainId === EvmChains.MUMBAI) {
            return tokensList.filter((token) => token.value !== Token.ETH);
        } else {
            return tokensList.filter((token) => token.value !== Token.MATIC);
        }
    }, [evmNetwork]);

    const selectTokenContent = useMemo(() => {
        return (
            <Select
                itemClickHandler={tokenSelectClickCallback}
                selectedItem={selectedTokenItem}
                items={tokenItems}
            />
        );
    }, [selectedTokenItem, tokenSelectClickCallback, tokenItems]);

    if (!evmNetworks || !evmNetwork) {
        return (
            <div className={CnForm('select')}>
                {/* <Button view="orange" size="m" onClick={}>
                    Connect wallet
                </Button> */}
                <DynamicConnectButton
                    buttonContainerClassName={CnForm('select-action')}
                    buttonClassName="button button_view_orange button_size_m"
                >
                    Connect wallet
                </DynamicConnectButton>
            </div>
        );
    }

    return (
        <div className={CnForm('select')}>
            {selectNetworkContent}
            {selectTokenContent}
        </div>
    );
};
