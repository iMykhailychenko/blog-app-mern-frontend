export const ATTACHED_IMG = 'ATTACHED_IMG';

export interface IAction {
    type: typeof ATTACHED_IMG;
    payload: File | null;
}