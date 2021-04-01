import { HYDRATE } from 'next-redux-wrapper';

import { IPost, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './interfaces';

const post = (state: IPost | null = null, action: IAction): IPost | null => {
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
