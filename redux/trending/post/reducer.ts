import { HYDRATE } from 'next-redux-wrapper';

import { IPost, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './saga';

const post = (state: IPost = null, action: IAction): IPost => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).trending.post;

        case types.GET_TRENDING_POST_SUCCESS:
            return action.payload as IPost;

        case types.GET_TRENDING_POST_START:
        case types.GET_TRENDING_POST_ERROR:
            return state;

        default:
            return state;
    }
};

export default post;
