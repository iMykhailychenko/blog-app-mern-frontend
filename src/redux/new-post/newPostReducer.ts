import { combineReducers } from 'redux';
import {
  NEW_POST_TITLE,
  NEW_POST_DESC,
  NEW_POST_IMG,
  NEW_POST_TAGS,
  NEW_POST_CONTENT,
  ActionTypes,
} from '../../types';


const newPostTitleReducer = (
  title: string = '',
  action: ActionTypes,
): string => {
  switch (action.type) {
    case NEW_POST_TITLE:
      return action.payload;

    default:
      return title;
  }
};

const newPostDescReducer = (desc: string = '', action: ActionTypes): string => {
  switch (action.type) {
    case NEW_POST_DESC:
      return action.payload;

    default:
      return desc;
  }
};

const newPostImgReducer = (img: string = '', action: ActionTypes): string => {
  switch (action.type) {
    case NEW_POST_IMG:
      return action.payload;

    default:
      return img;
  }
};

const newPostTagsReducer = (
  tags: string[] = [],
  action: ActionTypes,
): string[] => {
  switch (action.type) {
    case NEW_POST_TAGS:
      const newTags = action.payload.trim().split(' ');
      return newTags;

    default:
      return tags;
  }
};

const newPostContentReducer = (
  content: any = {},
  action: ActionTypes,
): any => {
  switch (action.type) {
    case NEW_POST_CONTENT:
      return content;

    default:
      return content;
  }
};

export const newPostReducer = combineReducers({
  title: newPostTitleReducer,
  desc: newPostDescReducer,
  img: newPostImgReducer,
  tags: newPostTagsReducer,
  content: newPostContentReducer,
});
