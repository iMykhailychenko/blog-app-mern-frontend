import { Params } from 'next/dist/next-server/server/router';

import { IFeedback, IPost, IPostPagination, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_POSTS_START
        | typeof types.GET_POSTS_SUCCESS
        | typeof types.GET_POSTS_ERROR
        | typeof types.MORE_POSTS_START
        | typeof types.MORE_POSTS_SUCCESS
        | typeof types.MORE_POSTS_ERROR
        | typeof types.GET_USER_POSTS_START
        | typeof types.GET_USER_POSTS_SUCCESS
        | typeof types.GET_USER_POSTS_ERROR;
    payload: IPostPagination | IState | IPost | Params | string | null | { data?: IFeedback | 1 | 0; id?: string };
}
