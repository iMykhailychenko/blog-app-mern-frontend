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

export const tags = (value: string): types.IActions => ({
  type: types.NEW_POST_TAGS,
  payload: value,
})

export const content = (value: string): types.IActions => ({
  type: types.NEW_POST_CONTENT,
  payload: value,
})
