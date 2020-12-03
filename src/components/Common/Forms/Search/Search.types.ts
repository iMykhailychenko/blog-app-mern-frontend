export const SEARCH = 'SEARCH';

export interface IAction {
    type: typeof SEARCH;
    payload: string;
}
