import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './Counter.scss';

const CnCounter = cn('counter');

interface ICounterProps {}

export const Counter: React.FC<ICounterProps> = ({}) => {
    return (
        <div className={CnCounter()}>
            <div className={CnCounter('action')}>
                <Icons.Minus />
            </div>
            <div className={CnCounter('value')}>20</div>
            <div className={CnCounter('action')}>
                <Icons.Plus />
            </div>
        </div>
    );
};
