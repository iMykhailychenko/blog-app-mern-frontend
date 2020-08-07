import * as types from './nav.types';

export default (menu: boolean): types.IAction => ({
    type: types.TOGGLE_MENU,
    payload: menu,
});
