import { FC } from 'react';
import { cn } from '@bem-react/classname';
import Lottie from 'lottie-react';

import animationData from './LoaderModal.animationData.json';

import './LoaderModal.scss';

const CnLoaderModal = cn('loaderModal');

export const LoaderModal: FC = () => {
    return (
        <div className={CnLoaderModal()}>
            <Lottie animationData={animationData} />
        </div>
    );
};
