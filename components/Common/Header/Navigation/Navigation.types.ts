export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface IAction {
  type: typeof TOGGLE_MENU;
  payload: boolean;
}
