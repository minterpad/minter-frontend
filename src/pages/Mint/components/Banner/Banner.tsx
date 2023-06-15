import { cn } from '@bem-react/classname';

import './Banner.scss';

const CnBanner = cn('banner');

interface IBannerProps {
    image: any;
    banner: any;
    title?: string;
}

export const Banner: React.FC<IBannerProps> = ({ image, banner, title }) => {
    return (
        <div className={CnBanner()}>
            <div className={CnBanner('image')}>{image}</div>
            <div className={CnBanner('banner')}>{banner}</div>
            <div className={CnBanner('title')}>{title}</div>
        </div>
    );
};
