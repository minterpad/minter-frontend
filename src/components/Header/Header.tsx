import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './Header.scss';
import { Wallet } from 'components';

const CnHeader = cn('header');

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className={CnHeader()}>
            <Icons.Logo />
            <div className={CnHeader('navigation')}>
                <div className={CnHeader('navigation-item')}>Collections</div>
                <div className={CnHeader('navigation-item')}>Collections</div>
                <div className={CnHeader('navigation-item')}>Collections</div>
            </div>
            <div className={CnHeader('wallet')}>
                <Wallet />
            </div>
        </div>
    );
};
