export interface IParams {
    [key: string]: string | number;
}

export interface IUser {
    _id: string;
    avatar: string;
    name: string;
    surname: string;
    email: string;
    nick: string;
}

export interface IAuth {
    loading: boolean;
    user: IUser | null;
}

export interface IPost {
    _id: string;
    feedback: {
        view: string[];
        like: string[];
        dislike: string[];
    };
    banner: string;
    tags: string[];
    title: string;
    desc: string;
    content: string;
    user: string;
    date: string;
    author: [IUser];
}

export interface IPostList extends IPost {
    loading: boolean;
    data: IPost[] | null;
}

export interface IState {
    auth: IAuth;
    posts: {
        list: IPostList;
    };
}
