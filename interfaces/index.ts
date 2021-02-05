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
    banner: string;
    bio: null | string;
    feedback: {
        like: string[];
        dislike: string[];
    };
    surname: string;
    email: string;
    nick: string;
    followers?: IUser[];
    following?: IUser[];
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
    edited: string | null;
    banner: string;
    tags: string[];
    title: string;
    desc: string;
    content: string;
    user: IUser;
    date: string;
    author: [IUser];
}

export interface IPostPagination {
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
 * COMMENTS
 */
export interface IComment {
    _id: string;
    date: string;
    edited: string | null;
    text: string;
    attachment: null | string;
    author: [IUser];
    feedback: {
        like: string[];
        dislike: string[];
    };
    answers?: IComment[];
}

export interface ICommentPagination {
    _id: null;
    total: number;
    comments: IComment[];
}

export interface ICommentList {
    loading: boolean;
    data: ICommentPagination | null;
}

/**
 * APP STATE
 */
export interface IState {
    auth: IAuth | null;
    profile: IUser | null;
    posts: {
        list: IPostList;
        newPost: INewPost;
        single: ISinglePost;
    };
    comments: ICommentList;
}
