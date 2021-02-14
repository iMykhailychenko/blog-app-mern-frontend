import { HYDRATE } from 'next-redux-wrapper';

import { IFeedback, IState, IUser } from '../../interfaces';
import types from '../types';
import { IAction } from './saga';

const profile = (state: IUser = null, action: IAction): IUser => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).profile;

        case types.LIKE_PROFILE_SUCCESS:
        case types.DISLIKE_PROFILE_SUCCESS:
            return { ...state, feedback: action.payload as IFeedback };

        case types.UPDATE_AVATAR_SUCCESS:
            return { ...state, avatar: action.payload as string | null };

        case types.UPDATE_USER_BIO_SUCCESS:
            return { ...state, bio: action.payload as string | null };

        case types.UPDATE_USER_BANNER_SUCCESS:
            return { ...state, banner: action.payload as string | null };

        case types.GET_PROFILE_ERROR:
            return null;

        case types.GET_PROFILE_SUCCESS:
            return action.payload[0] as IUser;

        default:
            return state;
    }
};

export default profile;
