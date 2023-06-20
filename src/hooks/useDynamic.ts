import { DynamicWalletContext } from 'provider';
import { useContext } from 'react';

export const useDynamic = () => useContext(DynamicWalletContext);
