import types from '../types';

export interface IAction {
    type:
        | typeof types.UPDATE_AVATAR_START
        | typeof types.UPDATE_AVATAR_SUCCESS
        | typeof types.UPDATE_AVATAR_ERROR
        | typeof types.UPDATE_USER_BIO_START
        | typeof types.UPDATE_USER_BIO_SUCCESS
        | typeof types.UPDATE_USER_BIO_ERROR
        | typeof types.UPDATE_USER_INFO_START
        | typeof types.UPDATE_USER_INFO_SUCCESS
        | typeof types.UPDATE_USER_INFO_ERROR
        | typeof types.UPDATE_USER_BANNER_START
        | typeof types.UPDATE_USER_BANNER_SUCCESS
        | typeof types.UPDATE_USER_BANNER_ERROR;
    payload: File | string | null;
}
