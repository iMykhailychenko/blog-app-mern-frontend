import { HYDRATE } from 'next-redux-wrapper';

import { IFeedback, IPostList, IPostPagination, IState } from '../../interfaces';
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

        case types.MORE_QUEUE_START:
            return { ...state, loading: true };

        case types.UPDATE_QUEUE_POPULAR_SUCCESS:
            return state?.data?.posts
                ? {
                      data: {
                          ...state.data,
                          total: state.data.total - 1,
                          posts: state.data.posts.filter(item => item._id !== (action.payload as { id: string }).id),
                      },
                      loading: false,
                  }
                : state;

        case types.LIKE_POPULAR_POSTS_SUCCESS:
        case types.DISLIKE_POPULAR_POSTS_SUCCESS:
            return state?.data?.posts
                ? {
                      data: {
                          ...state.data,
                          posts: state.data.posts.map(item =>
                              item._id === (action.payload as { id: string }).id
                                  ? { ...item, feedback: (action.payload as { data: IFeedback }).data }
                                  : item,
                          ),
                      },
                      loading: false,
                  }
                : state;

        case types.MORE_QUEUE_SUCCESS:
            return {
                data: { ...state.data, posts: [...state.data.posts, ...(action.payload as IPostPagination).posts] },
                loading: false,
            };

        case types.GET_QUEUE_START:
        case types.GET_QUEUE_ERROR:
            return state;

        default:
            return state;
    }
};

export default queue;
