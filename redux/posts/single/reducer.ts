import { HYDRATE } from 'next-redux-wrapper';

import { IPost, ISinglePost, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './saga';

const INIT: ISinglePost = {
    loading: true,
    data: null,
};

const single = (state: ISinglePost = INIT, action: IAction): ISinglePost => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).posts.single;

        case types.LIKE_POST_SUCCESS:
        case types.DISLIKE_POST_SUCCESS:
            return { data: { ...state.data, feedback: (action.payload as IPost)?.feedback }, loading: false };

        case types.GET_SINGLE_POST_SUCCESS:
            return { data: action.payload as IPost, loading: false };

        case types.EDIT_POSTS_BANNER_START:
            return { ...state, loading: true };

        case types.EDIT_POSTS_BANNER_SUCCESS:
            return { data: { ...state.data, banner: action.payload as string }, loading: false };

        case types.EDIT_POSTS_BANNER_ERROR:
            return { data: { ...state.data, banner: null }, loading: false };

        case types.GET_SINGLE_POST_ERROR:
            return { data: null, loading: false };

        default:
            return state;
    }
};

export default single;
