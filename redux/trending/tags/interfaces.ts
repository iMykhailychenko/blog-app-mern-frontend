import { IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_TRENDING_TAGS_START
        | typeof types.GET_TRENDING_TAGS_SUCCESS
        | typeof types.GET_TRENDING_TAGS_ERROR;
    payload: IState | string[] | null;
}
