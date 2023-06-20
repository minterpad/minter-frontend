import { FC, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { Button, Input } from 'components';

import './Address.scss';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { mintActions } from 'store/mint/mint.actions';

const CnAddress = cn('address');

export const Address: FC = () => {
    const dispatch = useAppDispatch();
    const transaction = useAppSelector((store) => store.mint.transaction);

    const btcAddressChangeCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
                mintActions.updateMintTransactionBtcAddress(e.target.value),
            );
        },
        [dispatch],
    );

    return (
        <div className={CnAddress()}>
            <div className={CnAddress('title')}>enter your adDress here</div>
            <div className={CnAddress('description')}>
                The NFT will be sent to this Bitcoin address. Please specify
                Taproot address starting with bc1p
            </div>
            <div className={CnAddress('input')}>
                <Input
                    value={transaction?.btcAddress}
                    onChange={btcAddressChangeCallback}
                    view="dark"
                    inputSize="l"
                    placeholder="bc1p..."
                />
            </div>
            <div className={CnAddress('action')}>
                <Button view="orange" size="l">
                    receive nft
                </Button>
            </div>
        </div>
    );
};
