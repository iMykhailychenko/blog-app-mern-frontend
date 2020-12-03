export const NEW_POST_TITLE = 'NEW_POST_TITLE';
export const NEW_POST_DESC = 'NEW_POST_DESC';
export const NEW_POST_BANNER = 'NEW_POST_BANNER';
export const NEW_POST_TAGS = 'NEW_POST_TAGS';
export const NEW_POST_CONTENT = 'NEW_POST_CONTENT';

interface ITitle {
    type: typeof NEW_POST_TITLE;
    payload: string;
}

interface IDesc {
    type: typeof NEW_POST_DESC;
    payload: string;
}

interface IBanner {
    type: typeof NEW_POST_BANNER;
    payload: File | null;
}

interface ITags {
    type: typeof NEW_POST_TAGS;
    payload: string;
}

interface IContent {
    type: typeof NEW_POST_CONTENT;
    payload: string;
}

export type IActions = ITitle | IDesc | IBanner | ITags | IContent;
