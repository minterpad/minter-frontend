import { Home, Mint, TransactionSuccess } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Modal } from 'components';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

export const App = () => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: 'eede3ed2-4511-4c6f-9643-4974ff61fae5',
                initialAuthenticationMode: 'connect-only',
                enableVisitTrackingOnConnectOnly: false,
            }}
        >
            <BrowserRouter>
                <Modal />
                <div className="App">
                    <TransactionSuccess />
                </div>
            </BrowserRouter>
        </DynamicContextProvider>
    );
};
