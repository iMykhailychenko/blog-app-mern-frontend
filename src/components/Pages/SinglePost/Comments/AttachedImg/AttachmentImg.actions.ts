import * as types from './AttachedImg.types';

export const addImg = (file: File | null): types.IAction => ({
    type: types.ATTACHED_IMG,
    payload: file,
});
