import { IComment, ICommentList, ICommentPagination, IState } from '../../interfaces';
import types from '../types';

export interface IPOSTComment {
    id: string;
    form: FormData;
}

export interface IPUTComment {
    id: string;
    comment: string;
    form: FormData;
}

export interface IPOSTAnswer {
    id: string;
    comment: string;
    form: FormData;
}

export interface IAction {
    type:
        | typeof types.GET_COMMENTS_START
        | typeof types.GET_COMMENTS_SUCCESS
        | typeof types.GET_COMMENTS_ERROR
        | typeof types.POST_ANSWER_START
        | typeof types.POST_ANSWER_SUCCESS
        | typeof types.POST_ANSWER_ERROR
        | typeof types.POST_COMMENT_START
        | typeof types.POST_COMMENT_SUCCESS
        | typeof types.POST_COMMENT_ERROR
        | typeof types.EDIT_COMMENT_START
        | typeof types.EDIT_COMMENT_SUCCESS
        | typeof types.EDIT_COMMENT_ERROR
        | typeof types.DELETE_COMMENT_START
        | typeof types.DELETE_COMMENT_SUCCESS
        | typeof types.DELETE_COMMENT_ERROR;
    payload: ICommentPagination | IState | IComment | ICommentList | string | IPOSTComment | IPOSTAnswer;
}
