import { combineReducers } from 'redux';

import { IPost } from '../../../interfaces';
import types from '../../types';

interface IAction {
    type:
        | typeof types.NEW_POST_TITLE
        | typeof types.NEW_POST_TAGS
        | typeof types.NEW_POST_DESC
        | typeof types.NEW_POST_BANNER
        | typeof types.NEW_POST_CONTENT;
    payload: string | File | null | IPost;
}

const title = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_TITLE:
            return action.payload as string;

        case types.GET_EDIT_POST_SUCCESS:
            return (action.payload as IPost).title;

        case types.PUBLISH_POSTS_SUCCESS:
        case types.RESET_POST_FORM:
            return '';

        default:
            return state;
    }
};

const tags = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_TAGS:
            return action.payload as string;

        case types.GET_EDIT_POST_SUCCESS:
            return (action.payload as IPost).tags.join(' ');

        case types.PUBLISH_POSTS_SUCCESS:
        case types.RESET_POST_FORM:
            return '';

        default:
            return state;
    }
};

const banner = (state = null, action: IAction): File => {
    switch (action.type) {
        case types.NEW_POST_BANNER:
            return action.payload as File;

        case types.PUBLISH_POSTS_SUCCESS:
        case types.RESET_POST_FORM:
            return null;

        default:
            return state;
    }
};

const desc = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_DESC:
            return action.payload as string;

        case types.GET_EDIT_POST_SUCCESS:
            return (action.payload as IPost).desc;

        case types.PUBLISH_POSTS_SUCCESS:
        case types.RESET_POST_FORM:
            return '';

        default:
            return state;
    }
};

const content = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_CONTENT:
            return action.payload as string;

        case types.GET_EDIT_POST_SUCCESS:
            return (action.payload as IPost).content;

        case types.PUBLISH_POSTS_SUCCESS:
        case types.RESET_POST_FORM:
            return '';

        default:
            return state;
    }
};

export default combineReducers({
    title,
    tags,
    desc,
    content,
    banner,
});
