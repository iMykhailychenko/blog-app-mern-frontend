import { HYDRATE } from 'next-redux-wrapper';

import { IPost, IPostList, IPostPagination, IState } from '../../../interfaces';
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
            return { data: action.payload as IPostPagination, loading: false };

        case types.LIKE_POPULAR_POSTS_SUCCESS:
        case types.DISLIKE_POPULAR_POSTS_SUCCESS:
            return {
                data: {
                    ...state.data,
                    posts: state.data.posts.map(item =>
                        item._id === (action.payload as IPost)._id
                            ? { ...item, feedback: (action.payload as IPost).feedback }
                            : item,
                    ),
                },
                loading: false,
            };

        case types.GET_POSTS_ERROR:
            return { data: null, loading: false };

        default:
            return state;
    }
};

export default list;
