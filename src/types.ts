export const TOGGLE_MENU = 'TOGGLE_MENU';
export const NEW_POST_TITLE = 'NEW_POST_TITLE';
export const NEW_POST_DESC = 'NEW_POST_DESC';
export const NEW_POST_IMG = 'NEW_POST_IMG';
export const NEW_POST_TAGS = 'NEW_POST_TAGS';
export const NEW_POST_CONTENT = 'NEW_POST_CONTENT';

export interface IState {
  menu: boolean;
  newPost: {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    content: any;
  };
}

export interface Dispatch<S> {
  <A extends ActionTypes>(action: A): A;
}

// Action types
interface ToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: boolean;
}

interface NewPostTitle {
  type: typeof NEW_POST_TITLE;
  payload: string;
}

interface NewPostDesc {
  type: typeof NEW_POST_DESC;
  payload: string;
}

interface NewPostImg {
  type: typeof NEW_POST_IMG;
  payload: string;
}

interface NewPostTags {
  type: typeof NEW_POST_TAGS;
  payload: string;
}

interface NewPostContent {
  type: typeof NEW_POST_CONTENT;
  payload: any;
}

export type ActionTypes =
  | ToggleMenu
  | NewPostTitle
  | NewPostDesc
  | NewPostImg
  | NewPostTags
  | NewPostContent;
