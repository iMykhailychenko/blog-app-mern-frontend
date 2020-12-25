import { Store } from 'redux';
import { Task } from 'redux-saga';

/**
 * GENERAL
 */
export interface IParams {
    [key: string]: string | number;
}

export interface IStore extends Store {
    sagaTask: Task;
}

/**
 * AUTH
 */
export interface IUser {
    _id: string;
    avatar: string | null;
    name: string;
    surname: string;
    email: string;
    nick: string;
}

export interface IAuth {
    loading: boolean;
    token: null;
    user: IUser | null;
}

/**
 * POSTS
 */
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

export interface IPostPagination {
    _id: null;
    total: number;
    posts: IPost[];
}

export interface IPostList {
    loading: boolean;
    data: IPostPagination | null;
}

export interface ISinglePost {
    loading: boolean;
    data: IPost | null;
}

export interface INewPost {
    title: string;
    tags: string;
    banner: null | File;
    desc: string;
    content: string;
}

/**
 * APP STATE
 */
export interface IState {
    auth: IAuth;
    picture: string | null;
    posts: {
        list: IPostList;
        newPost: INewPost;
        single: ISinglePost;
    };
}
