import Cookies from 'js-cookie';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import storage from 'redux-persist/lib/storage';

import auth from './auth/reducer';
import comments from './comments/reducer';
import posts from './posts/reducer';
import profile from './profile/reducer';

/**
 * SERVER REDUCER. WITHOUT PERSIST
 * */

const server = combineReducers({
    auth,
    posts,
    comments,
    profile,
});

/**
 * CLIENT REDUCER. WITH PERSIST
 * */

const authConfig = {
    key: 'blog_auth',
    whitelist: ['token', 'user'],
    storage: new CookieStorage(Cookies, {}),
};

const postConfig = {
    key: 'blog_new_post',
    whitelist: ['newPost'],
    storage,
};

const clientAuth = persistReducer(authConfig, auth);
const clientNewPost = persistReducer(postConfig, posts);

const client = combineReducers({
    auth: clientAuth,
    posts: clientNewPost,
    comments,
    profile,
});

export default { client, server };
