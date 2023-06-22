import { FC, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { Button, Input } from 'components';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { mintActions } from 'store/mint/mint.actions';

import './Address.scss';
import { useDynamic } from 'hooks/useDynamic';

const CnAddress = cn('address');

export const Address: FC = () => {
    const dispatch = useAppDispatch();
    const transaction = useAppSelector((store) => store.mint.transaction);
    const [btcAddress, setBtcAddress] = useState('');
    const { saveBtcAddress } = useDynamic();

    const btcAddressChangeCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setBtcAddress(e.target.value);
        },
        [],
    );

    const buttonClickCallback = useCallback(() => {
        saveBtcAddress(btcAddress);
    }, [saveBtcAddress, btcAddress]);

    // const btcAddressChangeCallback = useCallback(
    //     (e: React.ChangeEvent<HTMLInputElement>) => {
    //         dispatch(
    //             mintActions.updateMintTransactionBtcAddress(e.target.value),
    //         );
    //     },
    //     [dispatch],
    // );

    return (
        <div className={CnAddress()}>
            <div className={CnAddress('title')}>
                {transaction?.btcAddress
                    ? 'Your tokens will be delivered to this address'
                    : 'enter your adDress here'}
            </div>
            {!transaction?.btcAddress && (
                <div className={CnAddress('description')}>
                    The NFT will be sent to this Bitcoin address. Please specify
                    Taproot address starting with bc1p
                </div>
            )}
            <div className={CnAddress('input')}>
                <Input
                    value={transaction?.btcAddress ?? btcAddress}
                    onChange={btcAddressChangeCallback}
                    disabled={transaction?.btcAddress}
                    view="dark"
                    inputSize="l"
                    placeholder="bc1p..."
                />
            </div>
            {!transaction?.btcAddress && (
                <div className={CnAddress('action')}>
                    <Button
                        disabled={!btcAddress}
                        onClick={buttonClickCallback}
                        view="orange"
                        size="l"
                    >
                        receive nft
                    </Button>
                </div>
            )}
        </div>
    );
};
