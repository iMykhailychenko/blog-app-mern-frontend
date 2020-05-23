import { combineReducers } from 'redux';
import { menuReducer } from './mobile-menu/menuReducer';
import { newPostReducer } from './new-post/newPostReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  newPost: newPostReducer,
});

export default rootReducer;
