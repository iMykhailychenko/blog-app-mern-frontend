import { combineReducers } from 'redux';

import auth from './auth/reducer';
import comments from './comments/reducer';
import posts from './posts/reducer';
import profile from './profile/reducer';
import queue from './queue/reducer';
import trending from './trending/reducer';

const rootReducer = combineReducers({
    auth,
    posts,
    comments,
    profile,
    trending,
    queue,
});

export default rootReducer;
