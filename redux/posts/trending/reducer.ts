import { HYDRATE } from 'next-redux-wrapper';

import { IPost, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './saga';

const INIT = null;

const trending = (state: IPost = INIT, action: IAction): IPost => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).posts.trending;

        case types.GET_FAVORITE_POST_SUCCESS:
            return action.payload as IPost;

        case types.GET_FAVORITE_POST_START:
        case types.GET_FAVORITE_POST_ERROR:
            return state;

        default:
            return state;
    }
};

export default trending;
