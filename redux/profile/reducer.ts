import { HYDRATE } from 'next-redux-wrapper';

import { IState, IUser } from '../../interfaces';
import types from '../types';
import { IAction } from './saga';

const profile = (state: IUser = null, action: IAction): IUser => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).profile as IUser;

        case types.GET_PROFILE_START:
        case types.GET_PROFILE_ERROR:
            return null;

        case types.GET_PROFILE_SUCCESS:
            return action.payload as IUser;

        default:
            return state;
    }
};

export default profile;
