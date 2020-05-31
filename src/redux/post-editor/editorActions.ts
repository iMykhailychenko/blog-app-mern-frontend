import {
    EDIT_POST_TITLE,
    EDIT_POST_DESC,
    EDIT_POST_CONTENT,
    EDIT_POST_TAGS,
    ActionTypes,
} from '../types';

export const titleActions = (title: string): ActionTypes => ({
    type: EDIT_POST_TITLE,
    payload: title,
});

export const descActions = (desc: string): ActionTypes => ({
    type: EDIT_POST_DESC,
    payload: desc,
});

export const contentActions = (content: string): ActionTypes => ({
    type: EDIT_POST_CONTENT,
    payload: content,
});

export const tagsActions = (content: string): ActionTypes => ({
    type: EDIT_POST_TAGS,
    payload: content,
});
