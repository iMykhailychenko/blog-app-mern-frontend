import * as types from './NewComment.types';

export default (state: string = '', action: types.IAction): string => {
    switch (action.type) {
        case types.COMMENT:
            return action.payload;

        default:
            return state;
    }
};
