import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { PageLayout } from 'layouts';
import { Address, Extensions, Info } from './components';

import './TransactionSuccess.scss';

const CnTransactionSuccess = cn('transactionSuccess');

export const TransactionSuccess: FC = () => {
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
