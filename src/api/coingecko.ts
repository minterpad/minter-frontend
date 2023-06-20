import axios from 'axios';

export const fetchCoinsPrice = async () => {
    return await axios
        .get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin,ethereum,matic-network',
                vs_currencies: 'usd',
            },
        })
        .then((res) => res.data);
};
