import { Params } from 'next/dist/next-server/server/router';

import { IFeedback, IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_SINGLE_POST_START
        | typeof types.GET_SINGLE_POST_SUCCESS
        | typeof types.GET_SINGLE_POST_ERROR;
    payload: IPost | IFeedback | IState | string | 1 | 0 | null;
    config?: Params;
}
