import { cn } from '@bem-react/classname';

import './Form.scss';
import { Button, Counter, Select } from 'components';
import { Link } from 'react-router-dom';
import { Icons } from 'assets';
import { useCallback, useState } from 'react';

const CnForm = cn('form');

interface IFormProps {}

export const Form: React.FC<IFormProps> = () => {
    const [mintCount, setMintCount] = useState(1);

    const mintCountChangeCallback = useCallback((value: number) => {
        setMintCount(value);
    }, []);

    return (
        <div className={CnForm()}>
            <div className={CnForm('head')}>
                <div className={CnForm('title')}>Select Token & Network</div>

                <div className={CnForm('select')}>
                    <Select
                        selectedItem={{
                            icon: <Icons.Ethereum />,
                            title: 'Ethereum',
                        }}
                        items={[
                            {
                                icon: <Icons.Aptos />,
                                title: 'Aptos',
                            },
                            {
                                icon: <Icons.Sui />,
                                title: 'Sui',
                            },
                            {
                                icon: <Icons.Ethereum />,
                                title: 'Ethereum',
                            },
                        ]}
                    />
                    <Select
                        selectedItem={{
                            icon: <Icons.Ethereum />,
                            title: 'Ethereum',
                        }}
                        items={[
                            {
                                icon: <Icons.Aptos />,
                                title: 'Aptos',
                            },
                            {
                                icon: <Icons.Sui />,
                                title: 'Sui',
                            },
                            {
                                icon: <Icons.Ethereum />,
                                title: 'Ethereum',
                            },
                        ]}
                    />
                </div>

                <div className={CnForm('title')}>Select Count to Mint</div>

                <div className={CnForm('counter')}>
                    <Counter
                        max={20}
                        value={mintCount}
                        onChange={mintCountChangeCallback}
                    />

                    <div className={CnForm('subtext')}>
                        Your limit for mint: 20
                    </div>
                </div>
            </div>

            <div className={CnForm('info')}>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Mint Price:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            0.00005 BTC
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Subtotal:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            0.001 BTC
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            Service fee:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            0.000005 BTC
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left')}>
                        <div className={CnForm('info-item-title')}>
                            TxN fee:
                        </div>
                    </div>
                    <div className={CnForm('info-item-right')}>
                        <div className={CnForm('info-item-price')}>
                            0.000002 BTC
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>
                <div className={CnForm('info-item')}>
                    <div className={CnForm('info-item-left', { total: true })}>
                        <div className={CnForm('info-item-title')}>Total:</div>
                    </div>
                    <div className={CnForm('info-item-right', { total: true })}>
                        <div className={CnForm('info-item-price')}>
                            0.001 BTC
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>

                <div className={CnForm('action')}>
                    <Link to="/success">
                        <Button view="orange" size="l">
                            Mint
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
