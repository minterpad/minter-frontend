import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { mintTimestamp } from 'conts';
import moment from 'moment';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import './Cohorts.scss';
import { timerFromTimestamp } from 'utils/timer';

const CnCohorts = cn('cohorts');

interface ICohortsProps {
    cohorts: any[];
}

export const Cohorts: React.FC<ICohortsProps> = ({ cohorts }) => {
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
                    {cohorts.map((props: any) => {
                        return <CohortsItem key={props.start} {...props} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

const CohortsItem: FC<any> = ({ cohort, price, limit, start, end }) => {
    const calcCohortData = useCallback((start: number, end: number) => {
        const now = moment();
        const startMoment = moment.unix(start);
        const endMoment = moment.unix(end);

        const isStarted = now.isAfter(startMoment);

        const isEnded = now.isAfter(endMoment);

        const isCohortActive = isStarted && !isEnded;

        const currTimer = isStarted ? end : start;

        return {
            isStarted,
            isEnded,
            isCohortActive,
            currTimer,
        };
    }, []);

    const [{ isStarted, isCohortActive, isEnded, currTimer }, setCohortData] =
        useState(calcCohortData(start, end));

    const calcTimer = useCallback((deadline: number) => {
        const { d, h, m, s } = timerFromTimestamp(
            moment.unix(deadline).toDate().getTime(),
        );

        return {
            d: d < 10 ? '0' + d : `${d}`,
            h: h < 10 ? '0' + h : h === 60 ? '00' : `${h}`,
            m:
                s === 60
                    ? m === 60
                        ? '00'
                        : m < 10
                        ? '0' + (m + 1)
                        : m + 1
                    : m < 10
                    ? '0' + m
                    : m === 60
                    ? '00'
                    : `${m}`,
            s: s < 10 ? '0' + s : s === 60 ? '00' : `${s}`,
        };
    }, []);

    const [timer, setTimer] = useState<any>(calcTimer(currTimer));

    useEffect(() => {
        if (currTimer) {
            const interval = setInterval(() => {
                const data = calcCohortData(start, end);

                if (data.isEnded) {
                    clearInterval(interval);
                }

                setCohortData(data);

                setTimer(calcTimer(currTimer));
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currTimer, calcTimer, start, end, calcCohortData]);

    return (
        <tr className={isCohortActive ? CnCohorts('table-tractive') : ''}>
            <td>
                <div className={CnCohorts('table-name')}>
                    {cohort}
                    {isCohortActive && (
                        <div className={CnCohorts('table-active')}>
                            Active now
                        </div>
                    )}
                </div>
            </td>
            <td>{price}</td>
            <td>{limit}</td>
            <td>
                {isEnded ? (
                    'ENDED'
                ) : (
                    <>
                        {timer.d}:{timer.h}:{timer.m}:{timer.s}{' '}
                        {isStarted ? 'TILL END' : 'before start'}
                    </>
                )}
                {/* {moment.unix(start).format('DD.MM.YYYY HH:mm')} -{' '}
                {moment.unix(end).format('DD.MM.YYYY HH:mm')} */}
            </td>
        </tr>
    );
};
