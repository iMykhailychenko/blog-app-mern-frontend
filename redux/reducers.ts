import { combineReducers } from 'redux';

import auth from './auth/reducer';
import picture from './picture/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
    auth,
    picture,
    posts,
});

export default rootReducer;
