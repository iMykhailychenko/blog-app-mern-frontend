import { IPostList, IState } from '../interfaces';

// POSTS
export const getPosts = (state: IState): IPostList => state.posts.list;
