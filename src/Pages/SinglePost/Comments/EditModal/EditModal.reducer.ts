import * as types from './EditModal.types';

export default (state: string = '', action: types.IAction): string => {
    switch (action.type) {
        case types.EDIT_TEXT:
            return action.payload;

        default:
            return state;
    }
};
