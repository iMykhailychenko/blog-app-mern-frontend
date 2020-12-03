import * as types from './EditModal.types';

export const edit = (text: string): types.IAction => ({
    type: types.EDIT_TEXT,
    payload: text,
});
