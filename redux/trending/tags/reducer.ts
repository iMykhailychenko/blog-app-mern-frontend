import { HYDRATE } from 'next-redux-wrapper';

import { IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './saga';

const post = (state: string[] = [], action: IAction): string[] => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).trending.tags;

        case types.GET_TRENDING_TAGS_SUCCESS:
            return action.payload as string[];

        case types.GET_TRENDING_TAGS_START:
        case types.GET_TRENDING_TAGS_ERROR:
            return state;

        default:
            return state;
    }
};

export default post;
