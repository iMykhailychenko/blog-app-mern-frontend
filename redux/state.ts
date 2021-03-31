import { IState } from '../interfaces';

const initState: IState = {
    auth: {
        loading: true,
        token: null,
        user: null,
    },
    config: {
        postColumn: false,
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
    followers: {
        loading: true,
        more: true,
        data: null,
    },
    comments: {
        loading: true,
        data: null,
    },
};

export default initState;
