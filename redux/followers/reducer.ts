import { HYDRATE } from 'next-redux-wrapper';

import { IFollowers, IFollowersPagination, IState } from '../../interfaces';
import types from '../types';
import { IAction } from './saga';

const INIT: IFollowers = { data: null, loading: true };
const followers = (state: IFollowers = INIT, action: IAction): IFollowers => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).followers;

        case types.GET_FOLLOWERS_START:
        case types.GET_FOLLOWING_START:
            return INIT;

        case types.GET_FOLLOWERS_SUCCESS:
        case types.GET_FOLLOWING_SUCCESS:
            return { data: action.payload as IFollowersPagination, loading: false };

        case types.GET_FOLLOWERS_ERROR:
        case types.GET_FOLLOWING_ERROR:
            return state;

        default:
            return state;
    }
};

export default followers;
