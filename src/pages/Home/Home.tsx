import { cn } from '@bem-react/classname';
import { ImageCarousel } from 'components';
import { PageLayout } from 'layouts';
import { Collections } from './components';

import './Home.scss';

const CnHome = cn('home');

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
    return (
        <PageLayout className={CnHome()}>
            <div className={CnHome('banner')}>
                <ImageCarousel />
            </div>

            <div className={CnHome('collections')}>
                <div className={CnHome('collections-background')}></div>
                <Collections />
            </div>
        </PageLayout>
    );
};
