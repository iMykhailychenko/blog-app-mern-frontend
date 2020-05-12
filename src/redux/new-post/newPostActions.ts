import {
  NEW_POST_TITLE,
  NEW_POST_DESC,
  NEW_POST_IMG,
  NEW_POST_TAGS,
  NEW_POST_CONTENT,
  ActionTypes,
} from '../../types';

export const newPostTitleActions = (title: string): ActionTypes => ({
  type: NEW_POST_TITLE,
  payload: title,
});

export const newPostDescActions = (text: string): ActionTypes => ({
  type: NEW_POST_DESC,
  payload: text,
});

export const newPostImgActions = (img: string): ActionTypes => ({
  type: NEW_POST_IMG,
  payload: img,
});

export const newPostTagsActions = (tags: string): ActionTypes => ({
  type: NEW_POST_TAGS,
  payload: tags,
});

export const newPostContentActions = (content: any): ActionTypes => ({
  type: NEW_POST_CONTENT,
  payload: content,
});
