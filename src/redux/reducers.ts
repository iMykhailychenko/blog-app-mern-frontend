import { combineReducers } from 'redux';
import menu from '../components/header/nav/nav.reducer';
import newPost from '../components/pages/new_post/NewPost.reducer';

const post = combineReducers({
    newPost,
})

const rootReducer = combineReducers({
    menu,
    post,
});

export default rootReducer;
