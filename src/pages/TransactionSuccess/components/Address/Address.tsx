import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { Button, Input } from 'components';

import './Address.scss';

const CnAddress = cn('address');

export const Address: FC = () => {
    return (
        <div className={CnAddress()}>
            <div className={CnAddress('title')}>enter your adDress here</div>
            <div className={CnAddress('description')}>
                The NFT will be sent to this Bitcoin address. Please specify
                Taproot address starting with bc1p
            </div>
            <div className={CnAddress('input')}>
                <Input view="dark" inputSize="l" placeholder="bc1p..." />
            </div>
            <div className={CnAddress('action')}>
                <Button view="orange" size="l">
                    receive nft
                </Button>
            </div>
        </div>
    );
};
