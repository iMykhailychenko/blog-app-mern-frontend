import { combineReducers } from 'redux';

import auth from './auth/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
    auth,
    posts,
});

export default rootReducer;
