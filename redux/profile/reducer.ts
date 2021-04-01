import { HYDRATE } from 'next-redux-wrapper';

import { IFeedback, IState, IUser } from '../../interfaces';
import types from '../types';
import { IAction } from './interfaces';

const profile = (state: IUser | null = null, action: IAction): IUser | null => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).profile;

        case types.LIKE_PROFILE_SUCCESS:
        case types.DISLIKE_PROFILE_SUCCESS:
            return { ...state, feedback: action.payload as IFeedback } as IUser;

        case types.UPDATE_AVATAR_SUCCESS:
            return { ...state, avatar: action.payload as string | null } as IUser;

        case types.UPDATE_USER_BIO_SUCCESS:
            return { ...state, bio: action.payload as string | null } as IUser;

        case types.UPDATE_USER_BANNER_SUCCESS:
            return { ...state, banner: action.payload as string | null } as IUser;

        case types.GET_PROFILE_ERROR:
            return null;

        case types.GET_PROFILE_SUCCESS:
            return (action.payload as [IUser])[0];

        default:
            return state;
    }
};

export default profile;
