import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { Network, Token } from 'types/enums';

// export const fetchTransactionsHistory = createAsyncThunk(
//     '@history/fetchTransactionsHistory',
//     async ({ address, key }: { address: string; key: NetworkType }) => {},
// );

const setSelectedToken = createAction<Token>('@mint/setSelectedToken');

const setSelectedNetwork = createAction<Network>('@mint/setSelectedNetwork');

export const mintActions = {
    setSelectedToken,
    setSelectedNetwork,
};
