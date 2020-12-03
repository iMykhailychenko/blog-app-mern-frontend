import * as types from './AttachedImg.types';

type FileType = File | null;

export default (state: FileType = null, action: types.IAction): FileType => {
    switch (action.type) {
        case types.ATTACHED_IMG:
            return action.payload;

        default:
            return state;
    }
};
