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
) => {
    // BigNumber(amount)
    //     .multipliedBy(10 ** decimals)
    //     .toString(10);
    const result = (Number(amount) * 10 ** decimals).toFixed(0);

    return result;
};
