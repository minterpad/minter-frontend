import { Home, Mint, TransactionSuccess } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Modal } from 'components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { DynamicProvider } from 'provider';

import './App.scss';

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <DynamicProvider>
                    <div className="App">
                        <Modal />
                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/mint" element={<Mint />} />

                            <Route
                                path="/success"
                                element={<TransactionSuccess />}
                            />
                        </Routes>
                    </div>
                </DynamicProvider>
            </Provider>
        </BrowserRouter>
    );
};
