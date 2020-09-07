export const EDIT_TEXT =  'EDIT_TEXT';

export interface IAction {
    type: typeof EDIT_TEXT;
    payload: string;
}