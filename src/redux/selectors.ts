import { IState, IAuth, IModal } from '../interfaces';

// new post
export const getBanner = (state: IState): File | null => state.post.newPost.banner;
export const getContent = (state: IState): string => state.post.newPost.content;
export const getTitle = (state: IState): string => state.post.newPost.title;
export const getDesc = (state: IState): string => state.post.newPost.desc;
export const getTags = (state: IState): string => state.post.newPost.tags;

// modal
export const getModal = (state: IState): IModal => state.modal;

// comment
export const getCommentImg = (state: IState): File | null => state.comment.img;

// auth
export const getAuth = (state: IState): IAuth => state.auth;

// picture
export const getPicture = (state: IState): string => state.picture.src;

// search
export const getSearch = (state: IState): string => state.search;