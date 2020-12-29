import { combineReducers } from 'redux';

import auth from './auth/reducer';
import comments from './comments/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
    auth,
    posts,
    comments,
});

export default rootReducer;
