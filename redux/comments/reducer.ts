import { HYDRATE } from 'next-redux-wrapper';

import { IComment, ICommentList, ICommentPagination, IState } from '../../interfaces';
import types from '../types';

interface IAction {
    type:
        | typeof types.GET_COMMENTS_START
        | typeof types.GET_COMMENTS_SUCCESS
        | typeof types.GET_COMMENTS_ERROR
        | typeof types.POST_ANSWER_START
        | typeof types.POST_ANSWER_SUCCESS
        | typeof types.POST_ANSWER_ERROR
        | typeof types.POST_COMMENT_START
        | typeof types.POST_COMMENT_SUCCESS
        | typeof types.POST_COMMENT_ERROR;
    payload: [ICommentPagination] | IState | IComment | ICommentList | null;
}

const INIT: ICommentList = {
    loading: true,
    data: null,
};

const comments = (state: ICommentList = INIT, action: IAction): ICommentList => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).comments as ICommentList;
        // START
        case types.GET_COMMENTS_START:
            return INIT;

        // SUCCESS
        case types.GET_COMMENTS_SUCCESS:
            return { loading: false, data: (action.payload as [ICommentPagination])?.[0] || null };

        // ERROR
        case types.GET_COMMENTS_ERROR:
            return { loading: false, data: null };

        default:
            return state;
    }
};

export default comments;
