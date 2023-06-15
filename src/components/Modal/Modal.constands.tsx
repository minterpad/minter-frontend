import { ConnectWalletModal } from 'components/ConnectWalletModal';
import { LoaderModal } from 'components/LoaderModal';
import { ProvideAddressModal } from 'components/ProvideAddressModal';

export const modalTypes: Record<string, JSX.Element> = {
    connectWallet: <ConnectWalletModal />,
    provideAddress: <ProvideAddressModal />,
    loader: <LoaderModal />,
};
