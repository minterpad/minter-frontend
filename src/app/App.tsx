import { Home, Mint, TransactionSuccess } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Modal } from 'components';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { DynamicProvider } from 'provider';

import './App.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <DynamicProvider>
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
            </DynamicProvider>
        </Provider>
    );
};
