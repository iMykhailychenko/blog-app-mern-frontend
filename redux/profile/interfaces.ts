import { IFeedback, IState, IUser } from '../../interfaces';
import types from '../types';

export interface IAction {
    type:
        | typeof types.GET_PROFILE_START
        | typeof types.GET_PROFILE_SUCCESS
        | typeof types.GET_PROFILE_ERROR
        | typeof types.FOLLOW_USER_START
        | typeof types.FOLLOW_USER_SUCCESS
        | typeof types.FOLLOW_USER_ERROR;
    payload: IUser | [IUser] | IState | string | null | IFeedback;
}
