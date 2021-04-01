import { NextRouter } from 'next/router';

import { IPost } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.NEW_POST_TITLE
        | typeof types.NEW_POST_TAGS
        | typeof types.NEW_POST_DESC
        | typeof types.NEW_POST_BANNER
        | typeof types.NEW_POST_CONTENT
        | typeof types.PUBLISH_POSTS_SUCCESS
        | typeof types.PUBLISH_POSTS_START
        | typeof types.PUBLISH_POSTS_ERROR;
    payload: string | File | IPost | null;
    router: NextRouter;
}
