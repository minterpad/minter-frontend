import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './Counter.scss';
import { useCallback } from 'react';

const CnCounter = cn('counter');

interface ICounterProps {
    value: number;
    max?: number;
    onChange: (newValue: number) => void;
}

export const Counter: React.FC<ICounterProps> = ({ value, onChange, max }) => {
    const plusClickCallback = useCallback(() => {
        if (max && value === max) return;

        onChange(value + 1);
    }, [onChange, value, max]);

    const minusClickCallback = useCallback(() => {
        if (value <= 1) return;

        onChange(value - 1);
    }, [onChange, value]);

    return (
        <div className={CnCounter()}>
            <div onClick={minusClickCallback} className={CnCounter('action')}>
                <Icons.Minus />
            </div>
            <div className={CnCounter('value')}>{value}</div>
            <div onClick={plusClickCallback} className={CnCounter('action')}>
                <Icons.Plus />
            </div>
        </div>
    );
};
