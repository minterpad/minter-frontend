import { cn } from '@bem-react/classname';
import { Icons } from 'assets';
import { Wallet } from 'components';
import { Link } from 'react-router-dom';

import './Header.scss';

const CnHeader = cn('header');

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className={CnHeader()}>
            <div className={CnHeader('logo')}>
                <Link to="/">
                    <Icons.Logo />
                </Link>
            </div>
            <div className={CnHeader('navigation')}>
                <div className={CnHeader('navigation-item')}>Collections</div>
                <div className={CnHeader('navigation-item')}>Inscriptions</div>
                <div className={CnHeader('navigation-item')}>Mint Calendar</div>
            </div>
            <div className={CnHeader('wallet')}>
                <Wallet />
            </div>
        </div>
    );
};
