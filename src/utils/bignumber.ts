import BigNumber from 'bignumber.js';

export const aIsGreaterThanOrEqualToB = (
    a: string | number,
    b: string | number,
) => {
    const aBN = BigNumber(a);
    const bBN = BigNumber(b);

    return aBN.isGreaterThanOrEqualTo(bBN);
};

export const multipliedByDecimals = (
    amount: string | number,
    decimals: number,
) =>
    BigNumber(amount)
        .multipliedBy(10 ** decimals)
        .toString(10);
