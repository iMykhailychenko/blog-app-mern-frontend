import { combineReducers } from 'redux';
import {
    EDIT_POST_TITLE,
    EDIT_POST_DESC,
    EDIT_POST_CONTENT,
    EDIT_POST_TAGS,
    ActionTypes,
} from '../types';

const titleReducer = (title: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case EDIT_POST_TITLE:
            return action.payload;

        default:
            return title;
    }
};

const descReducer = (desc: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case EDIT_POST_DESC:
            return action.payload;

        default:
            return desc;
    }
};

const contentReducer = (content: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case EDIT_POST_CONTENT:
            return action.payload;

        default:
            return content;
    }
};

const tagsReducer = (tags: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case EDIT_POST_TAGS:
            return action.payload;

        default:
            return tags;
    }
};

export const editorReducer = combineReducers({
    title: titleReducer,
    desc: descReducer,
    content: contentReducer,
    tags: tagsReducer,
});
