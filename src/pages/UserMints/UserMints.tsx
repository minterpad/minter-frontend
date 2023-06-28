import { cn } from '@bem-react/classname';
import { Title } from 'components';
import { PageLayout } from 'layouts';
import React, { FC } from 'react';

import './UserMints.scss';

const CnUserMints = cn('userMints');

export const UserMints: FC = () => {
    return (
        <PageLayout className={CnUserMints()}>
            <Title>My mints</Title>

            <div className={CnUserMints('list')}></div>
        </PageLayout>
    );
};
