import { HYDRATE } from 'next-redux-wrapper';

import { IPost, IPostList, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './saga';

const INIT: IPostList = {
    loading: true,
    data: null,
};

const list = (state: IPostList = INIT, action: IAction): IPostList => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).posts.list as IPostList;

        case types.GET_POSTS_START:
            return INIT;

        case types.GET_POSTS_SUCCESS:
            return { data: action.payload as IPost[], loading: false };

        case types.GET_POSTS_ERROR:
            return { data: null, loading: false };

        default:
            return state;
    }
};

export default list;
