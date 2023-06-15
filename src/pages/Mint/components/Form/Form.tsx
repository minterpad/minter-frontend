import { cn } from '@bem-react/classname';

import './Form.scss';
import { Button, Counter, Select } from 'components';

const CnForm = cn('form');

interface IFormProps {}

export const Form: React.FC<IFormProps> = () => {
    return (
        <div className={CnForm()}>
            <div className={CnForm('head')}>
                <div className={CnForm('title')}>Select Token & Network</div>

                <div className={CnForm('select')}>
                    <Select />
                    <Select />
                </div>

                <div className={CnForm('title')}>Select Count to Mint</div>

                <div className={CnForm('counter')}>
                    <Counter />

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
                    <div className={CnForm('info-item-left', { total: true })}>
                        <div className={CnForm('info-item-title')}>Total:</div>
                    </div>
                    <div className={CnForm('info-item-right', { total: true })}>
                        <div className={CnForm('info-item-price')}>
                            26.57 USDT
                        </div>
                        <div className={CnForm('subtext')}>1.31 USDT</div>
                    </div>
                </div>

                <div className={CnForm('action')}>
                    <Button view="orange" size="l">
                        Mint
                    </Button>
                </div>
            </div>
        </div>
    );
};
