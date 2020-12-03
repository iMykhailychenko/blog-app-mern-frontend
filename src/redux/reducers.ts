import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import text from '../components/Pages/SinglePost/Comments/NewComment/NewComment.reducer';
import img from '../components/Pages/SinglePost/Comments/AttachedImg/AttachedImg.reducer';
import modal from '../components/Common/Modal/Modal.reducer';
import menu from '../components/Common/Header/Navigation/Navigation.reducer';
import newPost from '../components/Pages/NewPost/NewPost.reducer';
import auth from '../components/Pages/Auth/Auth.reducer';
import picture from '../components/Common/Picture/Picture.reducer';
import search from '../components/Common/Forms/Search/Search.reducer';

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
