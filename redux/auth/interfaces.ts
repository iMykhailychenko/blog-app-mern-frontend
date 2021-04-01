import { IState, IUser } from '../../interfaces';
import types from '../types';

export interface IResponse {
    token: null;
    user: IUser;
}

export interface IAction {
    type:
        | typeof types.LOGIN_START
        | typeof types.LOGIN_SUCCESS
        | typeof types.LOGIN_ERROR
        | typeof types.SIGNUP_START
        | typeof types.SIGNUP_SUCCESS
        | typeof types.SIGNUP_ERROR
        | typeof types.LOGOUT_START
        | typeof types.LOGOUT_SUCCESS
        | typeof types.LOGOUT_ERROR
        | typeof types.GET_USER_INFO_START
        | typeof types.GET_USER_INFO_SUCCESS
        | typeof types.GET_USER_INFO_ERROR
        | typeof types.UPDATE_AVATAR_START
        | typeof types.UPDATE_AVATAR_SUCCESS
        | typeof types.UPDATE_AVATAR_ERROR;
    payload: IResponse | Body | IState | IUser | string | null;
}
