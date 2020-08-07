import { IState } from '../helpers/interfaces';

export const getBanner = (state: IState): File | null => state.post.newPost.banner
export const getContent = (state: IState): string => state.post.newPost.content
export const getTitle = (state: IState): string => state.post.newPost.title
export const getDesc = (state: IState): string => state.post.newPost.desc
export const getTags = (state: IState): string => state.post.newPost.tags