import { Home, Mint } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Modal } from 'components';

export const App = () => {
    return (
        <BrowserRouter>
            <Modal />
            <div className="App">
                <Mint />
            </div>
        </BrowserRouter>
    );
};
