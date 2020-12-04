import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/index';
import ModalComponent from './components/Common/Modal';
import sagas from './redux/sagas';
import { sagaMiddleware, store } from './redux/store';

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={'Loading ...'} persistor={persistor}>
            <BrowserRouter>
                <ModalComponent />
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
