import { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './ErrorModal.scss';
import { useLocation } from 'react-router-dom';

const CnErrorModal = cn('errorModal');

export const ErrorModal: FC = () => {
    const { state } = useLocation();

    return (
        <div className={CnErrorModal()}>
            {/* <Lottie animationData={animationData} /> */}
            <div className={CnErrorModal('icon')}>
                <Icons.Error />
            </div>
            <div className={CnErrorModal('title')}>Transaction failed</div>
            {state?.error && (
                <div className={CnErrorModal('text')}>{state?.error}</div>
            )}
        </div>
    );
};
