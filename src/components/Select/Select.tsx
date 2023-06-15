import { cn } from '@bem-react/classname';

import './Select.scss';
import { Icons } from 'assets';

const CnSelect = cn('select');

interface SelectToken {
    title: string;
    icon: any;
}

interface ISelectProps {
    selectedToken?: SelectToken;
    items?: SelectToken[];
}

export const Select: React.FC<ISelectProps> = ({}) => {
    return (
        <div className={CnSelect()}>
            <div className={CnSelect('token')}>
                <div className={CnSelect('token-icon')}>
                    <Icons.Ethereum />
                </div>
                <div className={CnSelect('token-name')}>Ethereum</div>
            </div>
            <div className={CnSelect('action')}>
                <Icons.AngleDown />
            </div>
        </div>
    );
};
