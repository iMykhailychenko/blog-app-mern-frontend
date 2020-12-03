import { ReactNode } from 'react';

export interface IModal {
    node: null | ReactNode;
    size?: 's' | 'm' | 'l';
}

export interface IUser {
    id: string;
    avatar: string;
    name: string;
    email: string;
    nick: string;
    posts?: number;
}

export interface IPost {
    items: {
        id: string;
        placeholder?: string;
        title: string;
        text: string;
        tags: string;
        date: string;
        like: string[];
        dislike: string[];
        watched: string[];
    };
    user: IUser;
}

export interface IPostFields {
    title: string;
    desc: string;
    tags: string;
    content: string;
}

export interface INewPost extends IPostFields {
    banner: File | null;
}

export interface ISinglePost extends IPostFields {
    banner: string;
    date: string;
    like: string[];
    dislike: string[];
    watched: string[];
    user: IUser;
}

export interface IComment {
    id: string;
    date: string;
    text: string;
    parent: boolean;
    img?: string;
    like: string[];
    dislike: string[];
    user: IUser;
    answers?: IComment[];
}

export interface IAuth {
    loading: boolean;
    error: boolean;
    isAuth: boolean;
    user: IUser | {};
}

export interface INotification {
    type: 'like' | 'comment';
    target: 'post' | 'comment';
    user: IUser;
    post: IPost;
}

export interface IState {
    auth: IAuth;
    menu: boolean;
    modal: IModal;
    search: string;
    picture: {
        loading: boolean;
        error: boolean;
        src: string;
    };
    comment: {
        text: string;
        img: File | null;
    };
    post: {
        list: {
            loading: boolean;
            items: IPost[];
            error: boolean;
        };
        newPost: INewPost;
        single: {
            loading: boolean;
            items: ISinglePost;
            error: boolean;
        };
    };
}
