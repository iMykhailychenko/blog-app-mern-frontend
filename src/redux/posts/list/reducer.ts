import { IPost } from '../../../interfaces';
import { IAction, types } from '../types';

interface IState {
    loading: boolean;
    data: IPost[] | null;
}

const INIT: IState = {
    loading: true,
    data: null,
};

const list = (state: IState = INIT, action: IAction): IState => {
    switch (action.type) {
        case types.GET_POSTS_START:
            return INIT;

        case types.GET_POSTS_SUCCESS:
            return { data: action.payload as IPost[], loading: false };

        case types.GET_POSTS_ERROR:
            return { data: null, loading: false };

        default:
            return state;
    }
};

export default list;
