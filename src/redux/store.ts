import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const enhancer =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

export const store: Store = createStore(reducers, enhancer);
