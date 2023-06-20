import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@bem-react/classname';
import { timerFromTimestamp } from 'utils/timer';
import moment from 'moment';

import './Timer.scss';

const CnTimer = cn('timer');

export const Timer: React.FC<{ deadline: number }> = memo(({ deadline }) => {
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

    const [timer, setTimer] = useState<any>(calcTimer(deadline));

    useEffect(() => {
        if (deadline) {
            const interval = setInterval(() => {
                setTimer(calcTimer(deadline));
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [deadline, calcTimer]);

    return (
        <div className={CnTimer()}>
            <TimerItem value={timer.d} label={'Days'} />
            <TimerItem value={timer.h} label={'Hours'} />
            <TimerItem value={timer.m} label={'Minutes'} />
            <TimerItem value={timer.s} label={'Seconds'} />
        </div>
    );
});

const TimerItem: React.FC<{ value: string; label: string }> = memo(
    ({ value, label }) => {
        return (
            <div className={CnTimer('item')}>
                <div className={CnTimer('value')}>{value}</div>

                <div className={CnTimer('label')}>{label}</div>
            </div>
        );
    },
);
