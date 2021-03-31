import { combineReducers } from 'redux';

import list from './list/reducer';
import newPost from './new/reducer';
import single from './single/reducer';

const posts = combineReducers({ list, newPost, single });

export default posts;
