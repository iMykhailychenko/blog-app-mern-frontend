import { Reducer } from 'react';
import { AnyAction, combineReducers } from 'redux';

import { IState } from '../interfaces';
import auth from './posts/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers<Reducer<IState, AnyAction>>({ auth, posts });

export default rootReducer;
