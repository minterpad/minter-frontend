import { ConnectWalletModal } from 'components/ConnectWalletModal';
import { ProvideAddressModal } from 'components/ProvideAddressModal';
import React from 'react';

export const modalTypes: Record<string, JSX.Element> = {
    connectWallet: <ConnectWalletModal />,
    provideAddress: <ProvideAddressModal />,
};
