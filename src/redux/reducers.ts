import { combineReducers } from 'redux';
import { menuReducer } from './mobile-menu/menuReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
});

export default rootReducer;
