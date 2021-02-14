import { HYDRATE } from 'next-redux-wrapper';

import { IPostList, IPostPagination, IState } from '../../interfaces';
import types from '../types';
import { IAction } from './saga';

const INIT: IPostList = {
    loading: true,
    data: null,
};

const queue = (state: IPostList = INIT, action: IAction): IPostList => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).queue;

        case types.GET_QUEUE_SUCCESS:
            return { data: action.payload as IPostPagination, loading: false };

        case types.GET_QUEUE_START:
        case types.GET_QUEUE_ERROR:
            return state;

        default:
            return state;
    }
};

export default queue;
