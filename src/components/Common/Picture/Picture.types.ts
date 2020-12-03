export const GET_PICTURE_START = 'GET_PICTURE_START';
export const GET_PICTURE_SUCCESS = 'GET_PICTURE_SUCCESS';
export const GET_PICTURE_ERROR = 'GET_PICTURE_ERROR';

interface IPictureStart {
    type: typeof GET_PICTURE_START;
    payload?: boolean;
}

interface IPictureSuccess {
    type: typeof GET_PICTURE_SUCCESS;
    payload: string;
}

interface IPictureError {
    type: typeof GET_PICTURE_ERROR;
    payload?: boolean;
}

export type IAction = IPictureStart | IPictureSuccess | IPictureError;

export interface IState {
    loading: boolean;
    error: boolean;
    src: string;
}
