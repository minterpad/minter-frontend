import {
    useCallback,
    useMemo,
    useEffect,
    useState,
    useDeferredValue,
} from 'react';
import { cn } from '@bem-react/classname';
import { useLocation, useNavigate } from 'react-router';
import { WalletTypes } from 'types/enums';
import { Button, Input } from 'components';
import { Icons } from 'assets';
import { ProvideType } from './ProvideAddressModal.types';
import { useAppSelector } from 'hooks/useAppSelector';
import { mintActions } from 'store/mint/mint.actions';

import './ProvideAddressModal.scss';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useDynamic } from 'hooks/useDynamic';

const CnProvideAddressModal = cn('provideAddressModal');

export const ProvideAddressModal = () => {
    const dispatch = useAppDispatch();
    const [provideType, setProvideType] = useState(ProvideType.NOW);

    const provideTypeChangeCallback = useCallback((value: ProvideType) => {
        return () => {
            setProvideType(value);
        };
    }, []);

    const navigate = useNavigate();
    const transaction = useAppSelector((store) => store.mint.transaction);

    const btcAddressChangeCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(mintActions.setMintTransactionBtcAddress(e.target.value));
        },
        [dispatch],
    );

    useEffect(() => {
        if (!transaction) {
            navigate(-1);
        }
    }, [navigate, transaction]);

    const { mint } = useDynamic();

    const mintClickCallback = useCallback(() => {
        mint(transaction);
    }, [mint, transaction]);

    return (
        <div className={CnProvideAddressModal()}>
            <div className={CnProvideAddressModal('title')}>
                Bitcoin address
            </div>

            <div className={CnProvideAddressModal('radio')}>
                <div className={CnProvideAddressModal('radio-item')}>
                    <div
                        onClick={provideTypeChangeCallback(ProvideType.NOW)}
                        className={CnProvideAddressModal('radio-item-action', {
                            selected: provideType === ProvideType.NOW,
                        })}
                    >
                        <div
                            className={CnProvideAddressModal(
                                'radio-item-action-icon',
                            )}
                        >
                            <Icons.Check />
                        </div>
                        <div
                            className={CnProvideAddressModal(
                                'radio-item-action-text',
                            )}
                        >
                            Provide the address to receive
                            <br /> the inscription NOW
                        </div>
                    </div>
                    <div
                        className={CnProvideAddressModal(
                            'radio-item-description',
                        )}
                    >
                        The Ordinal will be sent to this Bitcoin address. Please
                        specify Taproot address starting with bc1p
                    </div>

                    <Input
                        placeholder="bitcoin address"
                        view="dark"
                        inputSize="l"
                        value={transaction?.btcAddress}
                        onChange={btcAddressChangeCallback}
                    />
                </div>
                <div className={CnProvideAddressModal('radio-item')}>
                    <div
                        onClick={provideTypeChangeCallback(ProvideType.LATER)}
                        className={CnProvideAddressModal('radio-item-action', {
                            selected: provideType === ProvideType.LATER,
                        })}
                    >
                        <div
                            className={CnProvideAddressModal(
                                'radio-item-action-icon',
                            )}
                        >
                            <Icons.Check />
                        </div>
                        <div
                            className={CnProvideAddressModal(
                                'radio-item-action-text',
                            )}
                        >
                            Specify the address later
                        </div>
                    </div>
                    <div
                        className={CnProvideAddressModal(
                            'radio-item-description',
                        )}
                    >
                        We will reserve the Ordinal for you and you will receive
                        it once you provide your BTC address
                    </div>
                </div>
            </div>

            <div className={CnProvideAddressModal('price')}>
                <div className={CnProvideAddressModal('price-top')}>
                    <div className={CnProvideAddressModal('price-title')}>
                        total:
                    </div>
                    <div className={CnProvideAddressModal('price-value')}>
                        {transaction?.selectedTokenTotal.toFixed(5)}{' '}
                        {transaction?.selectedToken}
                    </div>
                </div>
                <div className={CnProvideAddressModal('price-chain')}>
                    {transaction?.network}
                </div>
            </div>

            <Button
                onClick={mintClickCallback}
                disabled={
                    provideType === ProvideType.NOW && !transaction?.btcAddress
                }
                view="orange"
                size="l"
            >
                confirm
            </Button>
        </div>
    );
};
