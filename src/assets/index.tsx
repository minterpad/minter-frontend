import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as AngleLeft } from './icons/angle-left.svg';
import { ReactComponent as AngleRight } from './icons/angle-right.svg';
import { ReactComponent as AngleDown } from './icons/angle-down.svg';
import { ReactComponent as Plus } from './icons/plus.svg';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Close } from './icons/close.svg';
import { ReactComponent as Copy } from './icons/copy.svg';
import { ReactComponent as Check } from './icons/check.svg';
import { ReactComponent as ArrowRight } from './icons/arrow-right.svg';

import { ReactComponent as Ethereum } from './networks/ethereum.svg';
import { ReactComponent as Aptos } from './networks/aptos.svg';
import { ReactComponent as Sui } from './networks/sui.svg';

import { ReactComponent as Bitcoin } from './wallets/bitcoin.svg';
import { ReactComponent as Metamask } from './wallets/metamask.svg';
import { ReactComponent as Coinbase } from './wallets/coinbase.svg';
import { ReactComponent as Fewcha } from './wallets/fewcha.svg';
import { ReactComponent as MartianAlt } from './wallets/martian-alt.svg';
import { ReactComponent as Martian } from './wallets/martian.svg';
import { ReactComponent as Nightly } from './wallets/nightly.svg';
import { ReactComponent as Pontem } from './wallets/pontem.svg';
import { ReactComponent as Rise } from './wallets/rise.svg';
import { ReactComponent as RiseBlack } from './wallets/rise-black.svg';
import { ReactComponent as WalletConnect } from './wallets/wallet-connect.svg';

import { ReactComponent as Matic } from './tokens/matic.svg';
import { ReactComponent as Eth } from './tokens/eth.svg';
import { ReactComponent as Usdc } from './tokens/usdc.svg';
import { ReactComponent as Usdt } from './tokens/usdt.svg';

import petra from './wallets/petra.png';

const Petra: React.FC = () => {
    return <img src={petra} alt="petra" />;
};

export const Icons = {
    Logo,
    AngleLeft,
    AngleRight,
    AngleDown,
    Ethereum,
    Plus,
    Minus,
    Close,
    Copy,
    Bitcoin,
    Metamask,
    Coinbase,
    Fewcha,
    Martian,
    MartianAlt,
    Nightly,
    Pontem,
    Rise,
    RiseBlack,
    WalletConnect,
    Petra,
    Aptos,
    Sui,
    Check,
    ArrowRight,
    Matic,
    Usdc,
    Usdt,
    Eth,
};
