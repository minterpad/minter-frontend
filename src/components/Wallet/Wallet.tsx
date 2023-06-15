import { cn } from '@bem-react/classname';
import { Button } from 'components';
import { Icons } from 'assets';

import './Wallet.scss';

const CnWallet = cn('wallet');

interface IWalletProps {}

export const Wallet: React.FC<IWalletProps> = () => {
    return (
        <div className={CnWallet('wrapper')}>
            <div className={CnWallet()}>
                <div className={CnWallet('icons')}>
                    <Icons.Bitcoin />
                    <Icons.Metamask />
                </div>
                <div className={CnWallet('label')}>Connected wallets</div>
                <div className={CnWallet('action')}>
                    <Icons.AngleDown />
                </div>
            </div>
            {/* <div className={CnWallet('dropdown')}>
                <BitcoinWallet />

                <EvmWallet />
            </div> */}
            {/* <Button view="dark" size="m">
                Connect wallets
            </Button> */}
        </div>
    );
};

const BitcoinWallet = () => {
    return (
        <div className={CnWallet('dropdown-item')}>
            <div className={CnWallet('dropdown-item-left')}>
                <div className={CnWallet('dropdown-item-icon')}>
                    <Icons.Bitcoin />
                </div>
                <div className={CnWallet('dropdown-item-address')}>
                    0xecc6473...qf39
                </div>
            </div>
            <div className={CnWallet('dropdown-item-actions')}>
                <Icons.Copy />

                <Icons.Close />
            </div>
        </div>
    );
};

const EvmWallet = () => {
    return (
        <div className={CnWallet('dropdown-item')}>
            <div className={CnWallet('dropdown-item-left')}>
                <div className={CnWallet('dropdown-item-icon')}>
                    <Icons.Metamask />
                </div>
                <div className={CnWallet('dropdown-item-address')}>
                    0xecc6473...qf39
                </div>
            </div>
            <div className={CnWallet('dropdown-item-actions')}>
                <Icons.Copy />

                <Icons.Close />
            </div>
        </div>
    );
};
