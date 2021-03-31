import { combineReducers } from 'redux';

import postColumn from './postColumn/reducer';

const config = combineReducers({ postColumn });

export default config;
