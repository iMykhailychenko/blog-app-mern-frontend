import { IAuth } from '../../../interfaces';
import * as types from './Auth.types';

const initState: IAuth = {
    loading: false,
    error: false,
    isAuth: false,
    user: {},
};

export default (state: IAuth = initState, action: types.IActions): IAuth => {
    switch (action.type) {
        case types.LOGIN_START:
            return { ...state, isAuth: true };

        case types.LOGOUT_START:
            return { ...state, isAuth: false };

        case types.LOGIN_SUCCESS:
            return { ...state, user: action.payload };

        case types.LOGOUT_SUCCESS:
            return initState;

        default:
            return state;
    }
};
