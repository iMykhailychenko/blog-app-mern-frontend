import { combineReducers } from 'redux';

import list from './list/reducer';

const post = combineReducers({ list });

export default post;
