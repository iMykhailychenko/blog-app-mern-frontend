import { HYDRATE } from 'next-redux-wrapper';

import { ICommentList, ICommentPagination, IState } from '../../interfaces';
import types from '../types';
import { IAction } from './interfaces';

const INIT: ICommentList = {
    loading: true,
    data: null,
};

const comments = (state: ICommentList = INIT, action: IAction): ICommentList => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).comments as ICommentList;

        // SUCCESS
        case types.GET_COMMENTS_SUCCESS:
            return { loading: false, data: action.payload as ICommentPagination };

        // ERROR
        case types.GET_COMMENTS_ERROR:
            return { loading: false, data: null };

        default:
            return state;
    }
};

export default comments;
