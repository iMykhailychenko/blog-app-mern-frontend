import { IModal } from '../../../interfaces';
import * as types from './Modal.types';

export default (state: IModal = { node: null }, action: types.IAction): IModal => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return action.payload;

        case types.CLOSE_MODAL:
            return action.payload;

        default:
            return state;
    }
};
