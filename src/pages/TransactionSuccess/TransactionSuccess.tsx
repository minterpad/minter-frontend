import { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { PageLayout } from 'layouts';
import { Address, Extensions, Info } from './components';
import { useAppSelector } from 'hooks/useAppSelector';

import './TransactionSuccess.scss';
import { useNavigate } from 'react-router-dom';

const CnTransactionSuccess = cn('transactionSuccess');

export const TransactionSuccess: FC = () => {
    const navigate = useNavigate();
    const transaction = useAppSelector((store) => store.mint.transaction);

    useEffect(() => {
        if (!transaction) {
            navigate('/mint');
        }
    }, [transaction]);

    return (
        <PageLayout className={CnTransactionSuccess()}>
            <div className={CnTransactionSuccess('title')}>
                Transaction SUCCESSful
            </div>

            <div className={CnTransactionSuccess('content')}>
                <div className={CnTransactionSuccess('content-left')}>
                    <Extensions />
                    <Address />
                </div>

                <div className={CnTransactionSuccess('content-right')}>
                    <Info />
                </div>
            </div>
        </PageLayout>
    );
};
