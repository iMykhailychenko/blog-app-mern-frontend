import { combineReducers } from 'redux';

import auth from './auth/reducer';
import comments from './comments/reducer';
import posts from './posts/reducer';
import profile from './profile/reducer';

const rootReducer = combineReducers({
    auth,
    posts,
    comments,
    profile,
});

export default rootReducer;
