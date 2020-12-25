import Cookies from 'js-cookie';
import { persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';

import { IAuth, IUser } from '../../interfaces';
import types from '../types';
import { IAction, IResponse } from './saga';

const INIT: IAuth = {
    loading: false,
    token: null,
    user: null,
};

const auth = (state: IAuth = INIT, action: IAction): IAuth => {
    switch (action.type) {
        case types.LOGIN_START:
            return INIT;

        case types.GET_USER_INFO_SUCCESS:
            return { ...state, user: action.payload as IUser };

        case types.LOGIN_SUCCESS:
            return { ...(action.payload as IResponse), loading: false };

        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
        case types.LOGOUT_SUCCESS:
        case types.GET_USER_INFO_ERROR:
            return INIT;

        default:
            return state;
    }
};

const config = {
    key: 'blog_auth',
    storage: new CookieStorage(Cookies, {}),
};

export default persistReducer(config, auth);
