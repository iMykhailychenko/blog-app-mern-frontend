import * as types from './Navigation.types';

export default (menu: boolean): types.IAction => ({
  type: types.TOGGLE_MENU,
  payload: menu,
});
