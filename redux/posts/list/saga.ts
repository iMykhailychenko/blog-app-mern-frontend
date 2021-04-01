import { Params } from 'next/dist/next-server/server/router';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import types from '../../types';
import { IAction } from './interfaces';

function* getPosts({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getPosts, payload as Params);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_POSTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_POSTS_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* morePosts({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getPosts, payload as Params);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.MORE_POSTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.MORE_POSTS_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* getUserPosts({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getUserPosts, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_USER_POSTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_USER_POSTS_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* list(): Generator {
    yield all([
        yield takeLatest(types.GET_POSTS_START, getPosts),
        yield takeLatest(types.MORE_POSTS_START, morePosts),
        yield takeLatest(types.GET_USER_POSTS_START, getUserPosts),
    ]);
}
