import { ConnectWalletModal } from 'components/ConnectWalletModal';
import { ErrorModal } from 'components/ErrorModal';
import { LoaderModal } from 'components/LoaderModal';
import { ProvideAddressModal } from 'components/ProvideAddressModal';
import { SuccessModal } from 'components/SuccessModal';

export const modalTypes: Record<string, JSX.Element> = {
    connectWallet: <ConnectWalletModal />,
    provideAddress: <ProvideAddressModal />,
    loader: <LoaderModal />,
    error: <ErrorModal />,
    success: <SuccessModal />,
};
