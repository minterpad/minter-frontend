import { Icons } from 'assets';
import { Token } from 'types/enums';

export const iconFromToken = {
    [Token.ETH]: <Icons.Eth />,
    [Token.MATIC]: <Icons.Matic />,
    [Token.USDC]: <Icons.Usdc />,
    [Token.USDT]: <Icons.Usdt />,
};
