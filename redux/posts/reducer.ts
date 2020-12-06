import { combineReducers } from 'redux';

import list from './list/reducer';

const posts = combineReducers({ list });

export default posts;
