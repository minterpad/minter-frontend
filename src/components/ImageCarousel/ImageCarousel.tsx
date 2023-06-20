import { cn } from '@bem-react/classname';
import { Button } from 'components';
import { Icons } from 'assets';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/core';

import './ImageCarousel.scss';

const CnImageCarousel = cn('imageCarousel');

interface IImageCarouselProps {}

export const ImageCarousel: React.FC<IImageCarouselProps> = () => {
    return (
        // <div className={CnImageCarousel()}>
        //     <div className={CnImageCarousel('action', { left: true })}>
        //         <Icons.AngleLeft />
        //     </div>

        //     <ImageCarouselItem />

        //     <ImageCarouselProgressBar />

        //     <div className={CnImageCarousel('action', { right: true })}>
        //         <Icons.AngleRight />
        //     </div>
        // </div>

        <div className={CnImageCarousel()}>
            <Splide
                hasTrack={false}
                options={{
                    rewind: true,
                    arrowPath:
                        'M15.3333 11.3V10.6H14.6667V9.9H13.3333V8.5H12V7.1H10.6667V5.7H9.33333V5H8V7.1H9.33333V8.5H10.6667V9.9H12V11.3H13.3333V12.7H12V14.1H10.6667V15.5H9.33333V16.9H8V19H9.33333V18.3H10.6667V16.9H12V16.2V15.5H13.3333V14.8V14.1H14.6667V13.4H15.3333V12.7H16V12V11.3H15.3333Z',
                }}
            >
                <SplideTrack>
                    <SplideSlide>
                        <ImageCarouselItem />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    );
};

const CnImageCarouselItem = cn('imageCarouselItem');

const ImageCarouselItem = () => {
    return (
        <div className={CnImageCarouselItem()}>
            <div className={CnImageCarouselItem('contnet')}>
                <div className={CnImageCarouselItem('image')}>
                    <svg
                        width="380"
                        height="380"
                        viewBox="0 0 380 380"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <rect
                            width="380"
                            height="380"
                            rx="24"
                            fill="url(#pattern0)"
                        />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlinkHref="#image0_232_1611"
                                    transform="translate(-0.0258359) scale(0.00151976)"
                                />
                            </pattern>
                            <image
                                id="image0_232_1611"
                                width="692"
                                height="658"
                                xlinkHref="data:image/png;base64,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"
                            />
                        </defs>
                    </svg>
                </div>
                <div className={CnImageCarouselItem('info')}>
                    <div className={CnImageCarouselItem('title')}>
                        Minter OG Badge
                    </div>

                    <div className={CnImageCarouselItem('description')}>
                        MINTER WL PASS. Mint a free pass on any testnet to win
                        one of 300 WLs for $OXMI. See what the future of BRC
                        looks like and test your luck!
                    </div>

                    <div className={CnImageCarouselItem('action')}>
                        <Link to="/mint">
                            <Button view="orange" size="m">
                                Mint
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CnImageCarouselProgressBar = cn('imageCarouselProgressBar');

const ImageCarouselProgressBar = () => {
    return (
        <div className={CnImageCarouselProgressBar()}>
            <div className={CnImageCarouselProgressBar('badge')}></div>
        </div>
    );
};
