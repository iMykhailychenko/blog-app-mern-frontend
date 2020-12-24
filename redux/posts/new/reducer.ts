import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import types from '../../types';

interface IAction {
    type:
        | typeof types.NEW_POST_TITLE
        | typeof types.NEW_POST_TAGS
        | typeof types.NEW_POST_DESC
        | typeof types.NEW_POST_BANNER
        | typeof types.NEW_POST_CONTENT;
    payload: string | File | null;
}

const title = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_TITLE:
            return action.payload as string;

        case types.PUBLISH_POSTS_SUCCESS:
            return '';

        default:
            return state;
    }
};

const tags = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_TAGS:
            return action.payload as string;

        case types.PUBLISH_POSTS_SUCCESS:
            return '';

        default:
            return state;
    }
};

const banner = (state = null, action: IAction): File => {
    switch (action.type) {
        case types.NEW_POST_BANNER:
            return action.payload as File;

        case types.BANNER_POSTS_SUCCESS:
            return null;

        default:
            return state;
    }
};

const desc = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_DESC:
            return action.payload as string;

        case types.PUBLISH_POSTS_SUCCESS:
            return '';

        default:
            return state;
    }
};

const content = (state = '', action: IAction): string => {
    switch (action.type) {
        case types.NEW_POST_CONTENT:
            return action.payload as string;

        case types.PUBLISH_POSTS_SUCCESS:
            return '';

        default:
            return state;
    }
};

const newPost = combineReducers({
    title,
    tags,
    desc,
    content,
    banner,
});

const config = {
    key: 'blog_new_post',
    blacklist: ['banner'],
    storage,
};

export default persistReducer(config, newPost);
