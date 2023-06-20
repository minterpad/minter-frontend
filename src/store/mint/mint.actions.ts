import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { Network, Token } from 'types/enums';

const setSelectedToken = createAction<Token>('@mint/setSelectedToken');

const setMintTransaction = createAction<any>('@mint/setMintTransaction');

const setMintTransactionBtcAddress = createAction<any>(
    '@mint/setMintTransactionBtcAddress',
);

const updateMintTransactionBtcAddress = createAction<any>(
    '@mint/updateMintTransactionBtcAddress',
);

export const mintActions = {
    setSelectedToken,
    setMintTransaction,
    setMintTransactionBtcAddress,
    updateMintTransactionBtcAddress,
};
