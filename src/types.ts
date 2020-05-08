export const TOGGLE_LOCALE = 'TOGGLE_LOCALE';

export interface IState {
  locale: string;
}

// Action types
interface ToggleLocale {
  type: typeof TOGGLE_LOCALE;
  payload: string;
}

export type ActionTypes = ToggleLocale;

export interface Dispatch<S> {
  <A extends ActionTypes>(action: A): A;
}
