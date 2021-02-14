import { combineReducers } from 'redux';

import post from './post/reducer';
import tags from './tags/reducer';

export default combineReducers({ post, tags });
