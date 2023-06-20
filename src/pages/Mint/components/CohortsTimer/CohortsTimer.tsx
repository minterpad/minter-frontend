import { cn } from '@bem-react/classname';
import { Timer } from 'components';
import { mintTimestamp } from 'conts';
import moment from 'moment';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

var cohortsCompInterval: NodeJS.Timer | null = null;

const CnMint = cn('mint');

export const CohortsTimer: FC<any> = ({ cohorts }) => {
    const getActiveCohort = useCallback((cohorts: any) => {
        const now = moment();

        const activeCohort = cohorts.find(({ start, end }: any) => {
            const startMoment = moment.unix(start);
            const endMoment = moment.unix(end);

            return now.isAfter(startMoment) && now.isBefore(endMoment);
        });

        if (!activeCohort) {
            return cohorts[0];
        } else {
            return activeCohort;
        }
    }, []);

    const getCurrTimer = useCallback((cohort: any) => {
        const now = moment();

        const start = moment.unix(cohort.start);

        const isCohortStart = start.isBefore(now);

        if (!isCohortStart) return start.unix();

        const end = moment.unix(cohort.end);

        return end.unix();
    }, []);

    const [activeCohort, setActiveCohort] = useState<any>(
        getActiveCohort(cohorts),
    );
    const [currTimer, setCurrTimer] = useState<any>(
        getCurrTimer(getActiveCohort(cohorts)),
    );

    useEffect(() => {
        if (!cohortsCompInterval) {
            setInterval(() => {
                const activeCohort = getActiveCohort(cohorts);

                const currTimer = getCurrTimer(activeCohort);

                setActiveCohort(activeCohort);
                setCurrTimer(currTimer);
            }, 1000);
        }
    }, [cohorts, getActiveCohort, getCurrTimer]);

    // if (!activeCohort) return null;

    return (
        <>
            <div className={CnMint('timer')}>
                <div className={CnMint('timer-title')}>
                    {activeCohort?.cohort} COHORT ENDS IN:
                </div>
                <Timer deadline={currTimer} />
            </div>
        </>
    );
};
