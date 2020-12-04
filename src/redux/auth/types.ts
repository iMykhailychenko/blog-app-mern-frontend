import { IUser } from '../../interfaces';

export const types = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
};

interface ILogin {
    type: typeof types.LOGIN_START | typeof types.LOGIN_ERROR | typeof types.LOGIN_SUCCESS;
    payload: IUser | Body;
}

export type IAction = ILogin;
