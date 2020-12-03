import * as types from './NewPost.types';
import { INewPost } from '../../../interfaces';

const initState: INewPost = {
    title: '',
    desc: '',
    banner: null,
    tags: '',
    content: '',
};

export default (state: INewPost = initState, action: types.IActions): INewPost => {
    switch (action.type) {
        case types.NEW_POST_TITLE:
            return { ...state, title: action.payload };

        case types.NEW_POST_DESC:
            return { ...state, desc: action.payload };

        case types.NEW_POST_BANNER:
            return { ...state, banner: action.payload };

        case types.NEW_POST_CONTENT:
            return { ...state, content: action.payload };

        case types.NEW_POST_TAGS:
            return { ...state, tags: action.payload };

        default:
            return state;
    }
};
