import { Params } from 'next/dist/next-server/server/router';
import { NextRouter } from 'next/router';

import { IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_EDIT_POST_START
        | typeof types.GET_EDIT_POST_SUCCESS
        | typeof types.GET_EDIT_POST_ERROR
        | typeof types.UPDATE_POST_START
        | typeof types.UPDATE_POST_SUCCESS
        | typeof types.UPDATE_POST_ERROR;
    payload: IPost | IState | string | { id: string; banner: File };
    user?: string | null;
    config?: Params;
    router?: NextRouter;
}
