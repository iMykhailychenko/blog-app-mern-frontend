export const COMMENT = 'COMMENT';

export interface IAction {
    type: typeof COMMENT;
    payload: string;
}
