import * as types from './Picture.types';
const placeholder = '/abot.jpg'

export default (
    state: types.IState = {
        loading: false,
        error: false,
        src: '',
    },
    { type, payload }: types.IAction,
): types.IState => {
    switch (type) {
        case types.GET_PICTURE_START:
            return { ...state, loading: true, error: false };

        case types.GET_PICTURE_SUCCESS:
            return {
                src: typeof payload === 'string' ? payload : placeholder,
                loading: false,
                error: false,
            };

        case types.GET_PICTURE_ERROR:
            return { ...state, loading: false, error: true };

        default:
            return state;
    }
};
