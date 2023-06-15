import { Home, Mint, TransactionSuccess } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Modal } from 'components';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

import './App.scss';

export const App = () => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: 'eede3ed2-4511-4c6f-9643-4974ff61fae5',
                initialAuthenticationMode: 'connect-only',
                enableVisitTrackingOnConnectOnly: false,
            }}
        >
            <div className="App">
                <BrowserRouter>
                    <Modal />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/mint" element={<Mint />} />

                        <Route
                            path="/success"
                            element={<TransactionSuccess />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </DynamicContextProvider>
    );
};
