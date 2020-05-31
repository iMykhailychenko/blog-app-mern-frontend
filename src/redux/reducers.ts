import { combineReducers } from 'redux';
import { menuReducer } from './mobile-menu/menuReducer';
import { editorReducer } from './post-editor/editorReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    editorPost: editorReducer,
});

export default rootReducer;
