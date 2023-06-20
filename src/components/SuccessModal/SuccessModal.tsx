import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './SuccessModal.scss';

const CnSuccessModal = cn('successModal');

export const SuccessModal: FC = () => {
    return (
        <div className={CnSuccessModal()}>
            <div className={CnSuccessModal('icon')}>
                <Icons.Success />
            </div>
            <div className={CnSuccessModal('title')}>Transaction success</div>
        </div>
    );
};
