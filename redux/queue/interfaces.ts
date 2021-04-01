import { Params } from '@fortawesome/fontawesome-svg-core';

import { IPostPagination, IState } from '../../interfaces';
import types from '../types';

export interface IAction {
    type:
        | typeof types.GET_QUEUE_START
        | typeof types.GET_QUEUE_SUCCESS
        | typeof types.GET_QUEUE_ERROR
        | typeof types.MORE_QUEUE_START
        | typeof types.MORE_QUEUE_SUCCESS
        | typeof types.MORE_QUEUE_ERROR
        | typeof types.UPDATE_QUEUE_POPULAR_START
        | typeof types.UPDATE_QUEUE_POPULAR_SUCCESS
        | typeof types.UPDATE_QUEUE_POPULAR_ERROR
        | typeof types.UPDATE_QUEUE_START
        | typeof types.UPDATE_QUEUE_SUCCESS
        | typeof types.UPDATE_QUEUE_ERROR;
    payload: IPostPagination | IState | Params | string | null;
}
