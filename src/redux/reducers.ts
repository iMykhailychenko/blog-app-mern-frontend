import { combineReducers } from 'redux';
import { localeReducer } from './locale/localeReducer';

const rootReducer = combineReducers({
  locale: localeReducer,
});

export default rootReducer;
