import { IState } from '../interfaces';

const initState: IState = {
    auth: {
        loading: true,
        token: null,
        user: null,
    },
    profile: null,
    trending: {
        post: null,
        tags: [],
    },
    queue: {
        loading: true,
        data: null,
    },
    posts: {
        list: {
            loading: true,
            data: null,
        },
        newPost: {
            title: '',
            tags: '',
            banner: null,
            desc: '',
            content: '',
        },
        single: {
            loading: true,
            data: null,
        },
    },
    comments: {
        loading: true,
        data: null,
    },
};

export default initState;
