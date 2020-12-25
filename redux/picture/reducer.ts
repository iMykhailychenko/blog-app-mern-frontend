import types from '../types';

export interface IAction {
    type: typeof types.GET_PICTURE_ERROR | typeof types.GET_PICTURE_SUCCESS | typeof types.GET_PICTURE_START;
    payload: null | string;
}

const picture = (state: string | null = null, action: IAction): string | null => {
    switch (action.type) {
        case types.GET_PICTURE_START:
        case types.GET_PICTURE_ERROR:
            return null;

        case types.GET_PICTURE_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

export default picture;
