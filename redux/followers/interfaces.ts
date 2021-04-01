import { Params } from '@fortawesome/fontawesome-svg-core';

import { IFollowers, IFollowersPagination, IState } from '../../interfaces';
import types from '../types';

export interface IPayload {
    id: string;
    params: Params;
}

export interface IAction {
    type:
        | typeof types.GET_FOLLOWERS_START
        | typeof types.GET_FOLLOWERS_SUCCESS
        | typeof types.GET_FOLLOWERS_ERROR
        | typeof types.MORE_FOLLOWERS_START
        | typeof types.MORE_FOLLOWERS_SUCCESS
        | typeof types.MORE_FOLLOWERS_ERROR
        | typeof types.GET_FOLLOWING_START
        | typeof types.GET_FOLLOWING_SUCCESS
        | typeof types.GET_FOLLOWING_ERROR
        | typeof types.MORE_FOLLOWING_START
        | typeof types.MORE_FOLLOWING_SUCCESS
        | typeof types.MORE_FOLLOWING_ERROR;
    payload: IState | IFollowers | IFollowersPagination | IPayload | string | null;
}
