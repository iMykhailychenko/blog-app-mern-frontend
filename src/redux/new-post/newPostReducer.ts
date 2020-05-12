import {
  NEW_POST_TITLE,
  NEW_POST_DESC,
  NEW_POST_IMG,
  NEW_POST_TAGS,
  NEW_POST_CONTENT,
  ActionTypes,
} from '../../types';

interface Post {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  content: any;
}

const initValue: Post = {
  title: '',
  desc: '',
  img: '',
  tags: [],
  content: {},
};

export const newPostReducer = (
  state: Post = initValue,
  action: ActionTypes,
): Post => {
  switch (action.type) {
    case NEW_POST_TITLE:
      const stateTitle = { ...state, title: action.payload };
      return stateTitle;

    case NEW_POST_DESC:
      const stateDesc = { ...state, desc: action.payload };
      return stateDesc;

    case NEW_POST_IMG:
      return state;

    case NEW_POST_TAGS:
      const tags = action.payload.trim().split(' ');
      const stateTags = { ...state, tags };
      return stateTags;

    case NEW_POST_CONTENT:
      return state;

    default:
      return state;
  }
};
