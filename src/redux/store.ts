import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run,
    };
};

export const store = configureStore();
export const persistor = persistStore(store);
