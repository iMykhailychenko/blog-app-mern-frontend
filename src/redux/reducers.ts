import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import text from '../components/pages/single_post/Comments/NewComment/NewComment.reducer';
import img from '../components/pages/single_post/Comments/AttachedImg/AttachedImg.reducer';
import modal from '../common/modal/Modal.reducer';
import menu from '../components/header/nav/nav.reducer';
import newPost from '../components/pages/new_post/NewPost.reducer';
import auth from '../components/auth/Auth.reducer';
import picture from '../components/picture/Picture.reducer';
import search from '../common/forms/search/Search.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu'],
};

const newPostPersistConfig = {
    key: 'newPost',
    storage: storage,
    whitelist: ['newPost'],
};

const comment = combineReducers({
    text,
    img,
});

const post = combineReducers({
    newPost,
});

const rootReducer = combineReducers({
    auth,
    modal,
    comment,
    menu,
    picture,
    search,
    post: persistReducer(newPostPersistConfig, post),
});

export default persistReducer(persistConfig, rootReducer);
