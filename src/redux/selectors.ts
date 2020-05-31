import { IState } from './rootState';

// post editor
export const getEditPost = (state: IState) => state.editorPost;
export const getEditTag = (state: IState) => state.editorPost.tags;
