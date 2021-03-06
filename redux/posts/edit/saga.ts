import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import { generateTags } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import notifications from '../../../components/Common/Notifications';
import { INewPost, IPost, IState } from '../../../interfaces';
import types from '../../types';
import { IAction } from './interfaces';

function* getEditPost({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getSinglePost, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_EDIT_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_EDIT_POST_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* updatePost({ payload, router }: IAction) {
    const post: INewPost = yield select((state: IState): INewPost => state.posts.newPost);
    try {
        const { status, data } = yield call(api.posts.editPost, {
            id: payload as string,
            form: { ...post, tags: generateTags(post.tags) } as IPost,
        });
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.UPDATE_POST_SUCCESS });
        router?.push(routes.posts.single[0](data._id));
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.UPDATE_POST_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* updatePostBanner({ payload }: IAction) {
    try {
        const form = new FormData();
        (payload as { banner: File }).banner && form.append('banner', (payload as { banner: File }).banner);

        const { status, data } = yield call(api.posts.editPostBanner, {
            id: (payload as { id: string }).id,
            form: (payload as { banner: File }).banner ? form : null,
        });
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.EDIT_POSTS_BANNER_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.EDIT_POSTS_BANNER_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* edit(): Generator {
    yield all([
        yield takeLatest(types.GET_EDIT_POST_START, getEditPost),
        yield takeLatest(types.UPDATE_POST_START, updatePost),
        yield takeLatest(types.EDIT_POSTS_BANNER_START, updatePostBanner),
    ]);
}
