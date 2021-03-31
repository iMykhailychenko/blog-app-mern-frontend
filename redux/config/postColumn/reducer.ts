import { HYDRATE } from 'next-redux-wrapper';

import { IState } from '../../../interfaces';
import types from '../../types';

interface IAction {
    type: typeof types.POST_IN_COLUMN;
    payload: IState | boolean;
}

const postColumn = (state = false, action: IAction): boolean => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).config.postColumn;

        case types.POST_IN_COLUMN:
            return action.payload as boolean;

        default:
            return state;
    }
};

export default postColumn;
