import { HYDRATE } from 'next-redux-wrapper';

import { IFeedback, IPostList, IPostPagination, IState } from '../../../interfaces';
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

        case types.RESET_POSTS:
            return INIT;

        case types.MORE_POSTS_START:
            return { ...state, loading: true };

        case types.MORE_POSTS_SUCCESS:
            return {
                data: { ...state.data, posts: [...state.data.posts, ...(action.payload as IPostPagination).posts] },
                loading: false,
            };

        case types.DELETE_POST_SUCCESS:
            return {
                data: {
                    ...state.data,
                    total: state.data.total - 1,
                    posts: state.data.posts.filter(post => post._id !== (action.payload as string)),
                },
                loading: false,
            };

        case types.GET_POSTS_SUCCESS:
        case types.GET_USER_POSTS_SUCCESS:
            return { data: action.payload as IPostPagination, loading: false };

        case types.LIKE_POPULAR_POSTS_SUCCESS:
        case types.DISLIKE_POPULAR_POSTS_SUCCESS:
            return {
                data: {
                    ...state.data,
                    posts: state.data.posts.map(item =>
                        item._id === (action.payload as { data: IFeedback; id: string }).id
                            ? { ...item, feedback: (action.payload as { data: IFeedback; id: string }).data }
                            : item,
                    ),
                },
                loading: false,
            };

        case types.GET_POSTS_ERROR:
        case types.GET_USER_POSTS_ERROR:
            return { data: null, loading: false };

        default:
            return state;
    }
};

export default list;
