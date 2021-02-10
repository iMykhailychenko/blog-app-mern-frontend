import { combineReducers } from 'redux';

import favorite from './favorite/reducer';
import list from './list/reducer';
import newPost from './new/reducer';
import single from './single/reducer';

export default combineReducers({ list, newPost, single, favorite });
