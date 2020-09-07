import { ReactNode } from 'react';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface IModal {
    node: null | ReactNode;
    size?: 's' | 'm' | 'l';
}

interface IOpen {
    type: typeof OPEN_MODAL;
    payload: IModal;
}

interface IClose {
    type: typeof CLOSE_MODAL;
    payload: { node: null };
}

export type IAction = IOpen | IClose;
