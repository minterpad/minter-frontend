import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { PageLayout } from 'layouts';

import './Extensions.scss';
import { Icons } from 'assets';

const CnExtensions = cn('extensions');

export const Extensions: FC = () => {
    return (
        <div className={CnExtensions()}>
            <div className={CnExtensions('content')}>
                <div className={CnExtensions('content-item')}>
                    <div className={CnExtensions('title')}>
                        how to get your ordinal
                    </div>

                    <div className={CnExtensions('item')}>
                        <div className={CnExtensions('item-extension')}>
                            <div className={CnExtensions('item-icon')}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width="48"
                                        height="48"
                                        rx="12"
                                        fill="url(#pattern0)"
                                    />
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="47"
                                        height="47"
                                        rx="11.5"
                                        stroke="white"
                                        stroke-opacity="0.2"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_299_1122"
                                                transform="scale(0.0025)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_299_1122"
                                            width="400"
                                            height="400"
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </defs>
                                </svg>
                            </div>
                            <div className={CnExtensions('item-name')}>
                                Xverse
                            </div>
                        </div>
                        <div className={CnExtensions('list')}>
                            <div className={CnExtensions('list-item')}>
                                1. Install Chrome extension
                            </div>
                            <div className={CnExtensions('list-item')}>
                                2. Generate seed phrase
                            </div>
                            <div className={CnExtensions('list-item')}>
                                3. Copy the address
                            </div>
                        </div>
                        <div className={CnExtensions('action')}>
                            Read guide
                            <Icons.ArrowRight />
                        </div>
                    </div>
                </div>
                <div className={CnExtensions('content-item')}>
                    <div className={CnExtensions('item')}>
                        <div className={CnExtensions('item-extension')}>
                            <div className={CnExtensions('item-icon')}>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width="48"
                                        height="48"
                                        rx="12"
                                        fill="url(#pattern0)"
                                    />
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="47"
                                        height="47"
                                        rx="11.5"
                                        stroke="white"
                                        stroke-opacity="0.2"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_299_1122"
                                                transform="scale(0.0025)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_299_1122"
                                            width="400"
                                            height="400"
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </defs>
                                </svg>
                            </div>
                            <div className={CnExtensions('item-name')}>
                                Xverse
                            </div>
                        </div>
                        <div className={CnExtensions('list')}>
                            <div className={CnExtensions('list-item')}>
                                1. Install Chrome extension
                            </div>
                            <div className={CnExtensions('list-item')}>
                                2. Generate seed phrase
                            </div>
                            <div className={CnExtensions('list-item')}>
                                3. Copy the address
                            </div>
                        </div>
                        <div className={CnExtensions('action')}>
                            Read guide
                            <Icons.ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
