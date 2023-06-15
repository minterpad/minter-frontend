import { FC } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

export const DynamicWalletProvider: FC<{ children?: any }> = ({ children }) => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: 'eede3ed2-4511-4c6f-9643-4974ff61fae5',
                initialAuthenticationMode: 'connect-only',
                enableVisitTrackingOnConnectOnly: false,
            }}
        >
            {children}
        </DynamicContextProvider>
    );
};
