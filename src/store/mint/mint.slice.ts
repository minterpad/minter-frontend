import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { Network, Token } from 'types/enums';
import { mintActions } from './mint.actions';

export interface MintState {
    selectedToken: Token;
    transaction: any;
}

const initialState: MintState = {
    selectedToken: Token.ETH,
    transaction: null,
};

export const mintSlice = createSlice<MintState, SliceCaseReducers<MintState>>({
    name: 'mint',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(mintActions.setSelectedToken, (state, { payload }) => {
            state.selectedToken = payload;
        });

        builder.addCase(
            mintActions.setMintTransaction,
            (state, { payload }) => {
                state.transaction = payload;
            },
        );

        builder.addCase(
            mintActions.setMintTransactionBtcAddress,
            (state, { payload }) => {
                state.transaction.btcAddress = payload;
            },
        );

        builder.addCase(
            mintActions.updateMintTransactionBtcAddress,
            (state, { payload }) => {
                state.transaction = {
                    ...state.transaction,
                    ...payload,
                };
            },
        );
    },
});

export const mintReducer = mintSlice.reducer;
