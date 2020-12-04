import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IAuth, IUser } from '../../interfaces';
import { encryptor } from '../encryptor';
import { IAction, types } from './types';

const INIT: IAuth = {
    loading: true,
    user: null,
};

const auth = (state: IAuth = INIT, action: IAction): IAuth => {
    switch (action.type) {
        case types.LOGIN_START:
            return INIT;

        case types.LOGIN_SUCCESS:
            return { user: action.payload as IUser, loading: false };

        case types.LOGIN_ERROR:
            return { user: null, loading: false };

        default:
            return state;
    }
};

const authConfig = {
    storage,
    key: 'blog_auth',
    // white: ['user'],
    transforms: [encryptor],
};

export default persistReducer(authConfig, auth);
