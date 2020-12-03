import { IAuth } from '../../../interfaces';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

interface ILoginStart {
    type: typeof LOGIN_START;
}
interface ILoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: IAuth;
}
interface ILoginError {
    type: typeof LOGIN_ERROR;
}

interface ILogoutStart {
    type: typeof LOGOUT_START;
}
interface ILogoutSuccess {
    type: typeof LOGOUT_SUCCESS;
    payload: IAuth;
}
interface ILogoutError {
    type: typeof LOGOUT_ERROR;
}

export type IActions = ILoginStart | ILoginSuccess | ILoginError | ILogoutStart | ILogoutSuccess | ILogoutError;
