import { HYDRATE } from 'next-redux-wrapper';

import { IState, IUser } from '../../interfaces';
import types from '../types';
import { IAction, IFeedback } from './saga';

const profile = (state: IUser = null, action: IAction): IUser => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).profile as IUser;

        case types.LIKE_PROFILE_SUCCESS:
        case types.DISLIKE_PROFILE_SUCCESS:
            return { ...state, feedback: action.payload as IFeedback };

        case types.GET_PROFILE_ERROR:
            return null;

        case types.GET_PROFILE_SUCCESS:
            return action.payload[0] as IUser;

        default:
            return state;
    }
};

export default profile;
