import { HYDRATE } from 'next-redux-wrapper';

import { IFollowers, IFollowersPagination, IState } from '../../interfaces';
import types from '../types';
import { IAction } from './saga';

const INIT: IFollowers = { data: null, loading: true, more: true };
const followers = (state: IFollowers = INIT, action: IAction): IFollowers => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).followers;

        case types.GET_FOLLOWERS_START:
        case types.GET_FOLLOWING_START:
            return INIT;

        case types.MORE_FOLLOWERS_START:
        case types.MORE_FOLLOWING_START:
            return { ...state, more: true };

        case types.MORE_FOLLOWERS_SUCCESS:
        case types.MORE_FOLLOWING_SUCCESS:
            return {
                data: {
                    ...(action.payload as IFollowersPagination),
                    users: [...state.data.users, ...(action.payload as IFollowersPagination).users],
                },
                loading: false,
                more: false,
            };

        case types.GET_FOLLOWERS_SUCCESS:
        case types.GET_FOLLOWING_SUCCESS:
            return { data: action.payload as IFollowersPagination, loading: false, more: true };

        case types.GET_FOLLOWERS_ERROR:
        case types.GET_FOLLOWING_ERROR:
            return state;

        default:
            return state;
    }
};

export default followers;
