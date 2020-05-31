export const TOGGLE_MENU = 'TOGGLE_MENU';
export const EDIT_POST_TITLE = 'EDIT_POST_TITLE';
export const EDIT_POST_DESC = 'EDIT_POST_DESC';
export const EDIT_POST_CONTENT = 'EDIT_POST_CONTENT';
export const EDIT_POST_TAGS = 'EDIT_POST_TAGS';

export interface Dispatch<S> {
    <A extends ActionTypes>(action: A): A;
}

// ACTION TYPES
// toggle menu
interface ToggleMenu {
    type: typeof TOGGLE_MENU;
    payload: boolean;
}
// edit title
interface EditTitle {
    type: typeof EDIT_POST_TITLE;
    payload: string;
}
// edit desc
interface EditDesc {
    type: typeof EDIT_POST_DESC;
    payload: string;
}
// edit content
interface EditContent {
    type: typeof EDIT_POST_CONTENT;
    payload: string;
}
// edit content
interface EditTags {
    type: typeof EDIT_POST_TAGS;
    payload: string;
}

export type ActionTypes =
    | ToggleMenu
    | EditTitle
    | EditDesc
    | EditContent
    | EditTags;
