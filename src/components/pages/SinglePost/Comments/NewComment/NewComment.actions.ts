import * as types from './NewComment.types';

export const comment = (text: string): types.IAction => ({
    type: types.COMMENT,
    payload: text,
});
