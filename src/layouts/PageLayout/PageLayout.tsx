import { cn } from '@bem-react/classname';
import { Header, Wallet } from 'components';

import './PageLayout.scss';

const CnPageLayout = cn('pageLayout');

interface IPageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <div className={CnPageLayout({}, className)}>
            <Header />

            <div className={CnPageLayout('content')}>{children}</div>
        </div>
    );
};
