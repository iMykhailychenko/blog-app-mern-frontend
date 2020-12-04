import { IParams, IPost } from '../../interfaces';

export const types = {
    GET_POSTS_START: 'GET_POSTS_START',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
};

interface IList {
    type: typeof types.GET_POSTS_START | typeof types.GET_POSTS_ERROR | typeof types.GET_POSTS_SUCCESS;
    payload: IParams | IPost[];
}

export type IAction = IList;
