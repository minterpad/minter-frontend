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

import './ProvideAddressModal.scss';

const CnProvideAddressModal = cn('provideAddressModal');

export const ProvideAddressModal = () => {
    const [selectedItem, setSelectedItem] = useState(ProvideType.NOW);

    const selectedItemChangeCallback = useCallback((value: ProvideType) => {
        return () => {
            setSelectedItem(value);
        };
    }, []);

    return (
        <div className={CnProvideAddressModal()}>
            <div className={CnProvideAddressModal('title')}>
                Bitcoin address
            </div>

            <div className={CnProvideAddressModal('radio')}>
                <div className={CnProvideAddressModal('radio-item')}>
                    <div
                        onClick={selectedItemChangeCallback(ProvideType.NOW)}
                        className={CnProvideAddressModal('radio-item-action', {
                            selected: selectedItem === ProvideType.NOW,
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
                    />
                </div>
                <div className={CnProvideAddressModal('radio-item')}>
                    <div
                        onClick={selectedItemChangeCallback(ProvideType.LATER)}
                        className={CnProvideAddressModal('radio-item-action', {
                            selected: selectedItem === ProvideType.LATER,
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
                        2639.50 usdt
                    </div>
                </div>
                <div className={CnProvideAddressModal('price-chain')}>
                    Ethereum
                </div>
            </div>

            <Button view="orange" size="l">
                confirm
            </Button>
        </div>
    );
};
