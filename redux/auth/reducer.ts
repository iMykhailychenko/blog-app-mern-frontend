import { IAuth } from '../../interfaces';
import types from '../types';
import { IAction, IResponce } from './saga';

const INIT: IAuth = {
    loading: false,
    token: null,
    user: null,
};

const auth = (state: IAuth = INIT, action: IAction): IAuth => {
    switch (action.type) {
        case types.LOGIN_START:
            return INIT;

        case types.LOGIN_SUCCESS:
            return { ...(action.payload as IResponce), loading: false };

        case types.LOGOUT_SUCCESS:
        case types.LOGOUT_ERROR:
            return INIT;

        case types.LOGIN_ERROR:
            return { user: null, token: null, loading: false };

        default:
            return state;
    }
};

export default auth;
