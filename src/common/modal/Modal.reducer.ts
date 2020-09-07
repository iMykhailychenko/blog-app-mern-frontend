import * as types from './Modal.types';

export default (
    state: types.IModal = {
        node: null,
    },
    action: types.IAction,
): types.IModal => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return action.payload;

        case types.CLOSE_MODAL:
            return action.payload;

        default:
            return state;
    }
};
