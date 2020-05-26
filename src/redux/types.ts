export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface Dispatch<S> {
  <A extends ActionTypes>(action: A): A;
}

// Action types
interface ToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: boolean;
}


export type ActionTypes =
  | ToggleMenu;
