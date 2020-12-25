import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import { IPost } from '../../interfaces';
import types from '../types';

interface IAction {
    type:
        | typeof types.LIKE_POST_SUCCESS
        | typeof types.LIKE_POST_ERROR
        | typeof types.LIKE_POST_START
        | typeof types.DISLIKE_POST_SUCCESS
        | typeof types.DISLIKE_POST_ERROR
        | typeof types.DISLIKE_POST_START;
    payload: string | IPost;
}

// SINGLE
function* like({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.feedback.like, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.LIKE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.LIKE_POST_ERROR });
    }
}
function* dislike({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.feedback.dislike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.DISLIKE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DISLIKE_POST_ERROR });
    }
}

// POPULAR LIST
function* likePopular({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.feedback.like, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.LIKE_POPULAR_POSTS_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.LIKE_POPULAR_POSTS_ERROR });
    }
}
function* dislikePopular({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.feedback.dislike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.DISLIKE_POPULAR_POSTS_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DISLIKE_POPULAR_POSTS_ERROR });
    }
}

export default function* feedback(): Generator {
    yield all([
        yield takeLatest(types.LIKE_POST_START, like),
        yield takeLatest(types.DISLIKE_POST_START, dislike),
        yield takeLatest(types.LIKE_POPULAR_POSTS_START, likePopular),
        yield takeLatest(types.DISLIKE_POPULAR_POSTS_START, dislikePopular),
    ]);
}
