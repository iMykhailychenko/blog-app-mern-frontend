import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import { generateTags } from '../../../assets/helpers';
import notifications from '../../../components/Common/Notifications';
import { INewPost, IState } from '../../../interfaces';
import types from '../../types';

function* writePost() {
    try {
        const { title, desc, tags, content } = yield select((state: IState): INewPost => state.posts.newPost);

        const { status, data } = yield call(api.posts.newPost, { title, desc, tags: generateTags(tags), content });
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.PUBLISH_POSTS_SUCCESS, payload: data });
        yield put({ type: types.BANNER_POSTS_START, payload: data._id });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.PUBLISH_POSTS_ERROR });
        notifications('error', 'Something went wrong');
    }
}

interface IAction {
    type: typeof types.BANNER_POSTS_START | typeof types.BANNER_POSTS_SUCCESS | typeof types.BANNER_POSTS_ERROR;
    payload: string;
}

function* uploadBanner({ payload }: IAction) {
    try {
        const banner = yield select((state: IState): File => state.posts.newPost.banner);
        if (!banner) {
            yield put({ type: types.BANNER_POSTS_SUCCESS });
            notifications('success', 'Success');
            return;
        }

        const form = new FormData();
        form.append('banner', banner);

        const { status } = yield call(api.posts.uploadBanner, { id: payload, form });
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.BANNER_POSTS_SUCCESS });
        notifications('success', 'Success');
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.BANNER_POSTS_ERROR });
        notifications('error', 'Something went wrong');
    }
}

export default function* newPost(): Generator {
    yield all([takeLatest(types.PUBLISH_POSTS_START, writePost), takeLatest(types.BANNER_POSTS_START, uploadBanner)]);
}
