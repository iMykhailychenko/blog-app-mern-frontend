export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface IState {
  menu: boolean;
}

// Action types
interface ToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: boolean;
}

export type ActionTypes = ToggleMenu;

export interface Dispatch<S> {
  <A extends ActionTypes>(action: A): A;
}
