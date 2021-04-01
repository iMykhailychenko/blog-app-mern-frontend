import { IPost } from '../../interfaces';
import types from '../types';

export interface IPostAction {
    type:
        | typeof types.LIKE_POST_SUCCESS
        | typeof types.LIKE_POST_ERROR
        | typeof types.LIKE_POST_START
        | typeof types.LIKE_POPULAR_POSTS_SUCCESS
        | typeof types.LIKE_POPULAR_POSTS_ERROR
        | typeof types.LIKE_POPULAR_POSTS_START
        | typeof types.DISLIKE_POST_SUCCESS
        | typeof types.DISLIKE_POST_ERROR
        | typeof types.DISLIKE_POST_START
        | typeof types.DISLIKE_POPULAR_POSTS_SUCCESS
        | typeof types.DISLIKE_POPULAR_POSTS_ERROR
        | typeof types.DISLIKE_POPULAR_POSTS_START;
    payload: string | IPost;
}

export interface ICommentAction {
    type:
        | typeof types.LIKE_COMMENT_START
        | typeof types.LIKE_COMMENT_SUCCESS
        | typeof types.LIKE_COMMENT_ERROR
        | typeof types.DISLIKE_COMMENT_START
        | typeof types.DISLIKE_COMMENT_SUCCESS
        | typeof types.DISLIKE_COMMENT_ERROR;
    payload: string;
    postId: string;
}

export interface IProfileAction {
    type:
        | typeof types.LIKE_PROFILE_START
        | typeof types.LIKE_PROFILE_SUCCESS
        | typeof types.LIKE_PROFILE_ERROR
        | typeof types.DISLIKE_PROFILE_START
        | typeof types.DISLIKE_PROFILE_SUCCESS
        | typeof types.DISLIKE_PROFILE_ERROR;
    payload: string;
    postId: string;
}
