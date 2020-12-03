import * as types from './Auth.types';

export const login = (): types.IActions => ({
    type: types.LOGIN_START,
});

export const logout = (): types.IActions => ({
    type: types.LOGOUT_START,
});
