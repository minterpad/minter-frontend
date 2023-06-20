import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { Network, Token } from 'types/enums';
import { mintActions } from './mint.actions';

export interface MintState {
    selectedToken: Token;
    selectedNetwork: Network;
}

const initialState: MintState = {
    selectedToken: Token.ETH,
    selectedNetwork: Network.GOERLI,
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
            mintActions.setSelectedNetwork,
            (state, { payload }) => {
                state.selectedNetwork = payload;
            },
        );
    },
});

export const mintReducer = mintSlice.reducer;
