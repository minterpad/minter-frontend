import { combineReducers } from '@reduxjs/toolkit';
import { mintReducer } from './mint/mint.slice';

export const rootReducer = combineReducers({
    mint: mintReducer,
});
