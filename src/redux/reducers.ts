import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menu from '../components/header/nav/nav.reducer';
import newPost from '../components/pages/new_post/NewPost.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu']
}

const newPostPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['newPost']
}

const post = combineReducers({
    newPost,
})

const rootReducer = combineReducers({
    menu,
    post: persistReducer(newPostPersistConfig, post),
});

export default persistReducer(persistConfig, rootReducer);
