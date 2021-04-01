import { HYDRATE } from 'next-redux-wrapper';

import { IAuth, IState, IUser } from '../../interfaces';
import types from '../types';
import { IAction, IResponse } from './interfaces';

const INIT: IAuth = {
    loading: false,
    token: null,
    user: null,
};

const auth = (state: IAuth = INIT, action: IAction): IAuth | null => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).auth;

        case types.LOGIN_START:
            return INIT;

        case types.GET_USER_INFO_SUCCESS:
            return { ...state, user: action.payload as IUser };

        case types.UPDATE_AVATAR_SUCCESS:
            return { ...state, user: { ...state.user, avatar: action.payload as string | null } as IUser };

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

export default auth;
