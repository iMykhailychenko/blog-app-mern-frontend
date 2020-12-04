import { IPost } from '../../../interfaces';
import { IAction, types } from '../types';

interface IState {
    loading: boolean;
    items: IPost[] | null;
}

const INIT: IState = {
    loading: true,
    items: null,
};

const list = (state: IState = INIT, action: IAction): IState => {
    switch (action.type) {
        case types.GET_POSTS_START:
            return INIT;

        case types.GET_POSTS_SUCCESS:
            return { items: action.payload as IPost[], loading: false };

        case types.GET_POSTS_ERROR:
            return { items: null, loading: false };

        default:
            return state;
    }
};

export default list;
