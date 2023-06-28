import { cn } from '@bem-react/classname';
import { FC } from 'react';

import './UserMintsItem.scss';

const CnUserMintsItem = cn('userMintsItem');

export const UserMintsItemItem: FC = () => {
    return (
        <div className={CnUserMintsItem()}>
            <div className={CnUserMintsItem()}></div>
            <div className={CnUserMintsItem('info')}>
                <div className={CnUserMintsItem('info-wallet')}></div>
                <div className={CnUserMintsItem('info-wallet')}></div>
            </div>
        </div>
    );
};
