import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { mintTimestamp } from 'conts';
import moment from 'moment';

import './Cohorts.scss';
import { FC } from 'react';

const chortsItems = [
    {
        cohort: 'OG',
        price: 'FREE',
        limit: '-',
        start: mintTimestamp,
    },
    {
        cohort: 'WL',
        price: 'FREE',
        limit: '-',
        start: 1687435200,
    },
    {
        cohort: 'PUBLIC',
        price: 'FREE',
        limit: '-',
        start: 1690027200,
    },
];

const CnCohorts = cn('cohorts');

interface ICohortsProps {}

export const Cohorts: React.FC<ICohortsProps> = () => {
    return (
        <div className={CnCohorts()}>
            <div className={CnCohorts('title')}>Cohorts</div>
            <table className={CnCohorts('table')}>
                <thead>
                    <tr>
                        <th>Cohort</th>
                        <th>price</th>
                        <th>limit</th>
                        <th>time to start</th>
                    </tr>
                </thead>

                <tbody>
                    {chortsItems.map((props) => {
                        return <CohortsItem key={props.start} {...props} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

const CohortsItem: FC<any> = ({ cohort, price, limit, start }) => {
    return (
        <tr className={CnCohorts('table-tractive')}>
            <td>
                <div className={CnCohorts('table-name')}>
                    {cohort}
                    <div className={CnCohorts('table-active')}>Active now</div>
                </div>
            </td>
            <td>{price}</td>
            <td>{limit}</td>
            <td>{moment.unix(start).format('DD.MM.YYYY')}</td>
        </tr>
    );
};
