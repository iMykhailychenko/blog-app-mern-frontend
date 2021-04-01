import { IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_TRENDING_POST_START
        | typeof types.GET_TRENDING_POST_SUCCESS
        | typeof types.GET_TRENDING_POST_ERROR;
    payload: IState | IPost | null;
}
