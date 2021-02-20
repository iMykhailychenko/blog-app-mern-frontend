import { NextRouter } from 'next/router';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import routes from '../../../assets/routes';
import notifications from '../../../components/Common/Notifications';
import { INewPost, IState } from '../../../interfaces';
import types from '../../types';

interface IAction {
    type: typeof types.PUBLISH_POSTS_SUCCESS | typeof types.PUBLISH_POSTS_START | typeof types.PUBLISH_POSTS_ERROR;
    router: NextRouter | null;
}

function* createPost({ router }: IAction) {
    try {
        const { title, desc, tags, content, banner } = yield select((state: IState): INewPost => state.posts.newPost);
        const form = new FormData();
        form.append('title', title);
        form.append('desc', desc);
        form.append('tags', tags);
        form.append('content', content);
        banner && form.append('banner', banner);

        const { status, data } = yield call(api.posts.newPost, form);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.PUBLISH_POSTS_SUCCESS, payload: data });
        router?.push(routes.posts.single[0](data._id));
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.PUBLISH_POSTS_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* newPost(): Generator {
    yield takeLatest(types.PUBLISH_POSTS_START, createPost);
}
