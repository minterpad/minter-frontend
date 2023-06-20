import { Icons } from 'assets';
import { Token } from 'types/enums';

export const iconFromToken = {
    [Token.ETH]: <Icons.Eth />,
    [Token.MATIC]: <Icons.Matic />,
    [Token.USDC]: <Icons.Usdc />,
    [Token.USDT]: <Icons.Usdt />,
};

export const coingeckoIdFromToken = {
    [Token.ETH]: 'ethereum',
    [Token.USDC]: 'usd-coin',
    [Token.USDT]: 'tether',
    [Token.MATIC]: 'matic-network',
};
