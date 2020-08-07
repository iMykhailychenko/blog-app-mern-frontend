import * as types from './NewPost.types';

export const title = (value: string): types.IActions => ({
  type: types.NEW_POST_TITLE,
  payload: value,
})

export const desc = (value: string): types.IActions => ({
  type: types.NEW_POST_DESC,
  payload: value,
})

export const banner = (value: File | null): types.IActions => ({
  type: types.NEW_POST_BANNER,
  payload: value,
})
