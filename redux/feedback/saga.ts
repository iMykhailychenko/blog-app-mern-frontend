import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IPost } from '../../interfaces';
import types from '../types';

interface IPostAction {
    type:
        | typeof types.LIKE_POST_SUCCESS
        | typeof types.LIKE_POST_ERROR
        | typeof types.LIKE_POST_START
        | typeof types.LIKE_POPULAR_POSTS_SUCCESS
        | typeof types.LIKE_POPULAR_POSTS_ERROR
        | typeof types.LIKE_POPULAR_POSTS_START
        | typeof types.DISLIKE_POST_SUCCESS
        | typeof types.DISLIKE_POST_ERROR
        | typeof types.DISLIKE_POST_START
        | typeof types.DISLIKE_POPULAR_POSTS_SUCCESS
        | typeof types.DISLIKE_POPULAR_POSTS_ERROR
        | typeof types.DISLIKE_POPULAR_POSTS_START;
    payload: string | IPost;
}

// SINGLE
function* like({ payload }: IPostAction) {
    try {
        const { status, data } = yield call(api.feedback.postLike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.LIKE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.LIKE_POST_ERROR });
    }
}
function* dislike({ payload }: IPostAction) {
    try {
        const { status, data } = yield call(api.feedback.postDislike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.DISLIKE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DISLIKE_POST_ERROR });
    }
}

// POPULAR LIST
function* likePopular({ payload }: IPostAction) {
    try {
        const { status, data } = yield call(api.feedback.postLike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.LIKE_POPULAR_POSTS_SUCCESS, payload: { data, id: payload } });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.LIKE_POPULAR_POSTS_ERROR });
    }
}
function* dislikePopular({ payload }: IPostAction) {
    try {
        const { status, data } = yield call(api.feedback.postDislike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.DISLIKE_POPULAR_POSTS_SUCCESS, payload: { data, id: payload } });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DISLIKE_POPULAR_POSTS_ERROR });
    }
}

// COMMENTS
interface ICommentAction {
    type:
        | typeof types.LIKE_COMMENT_START
        | typeof types.LIKE_COMMENT_SUCCESS
        | typeof types.LIKE_COMMENT_ERROR
        | typeof types.DISLIKE_COMMENT_START
        | typeof types.DISLIKE_COMMENT_SUCCESS
        | typeof types.DISLIKE_COMMENT_ERROR;
    payload: string;
    postId: string;
}
function* commentLike({ payload, postId }: ICommentAction) {
    try {
        const { status } = yield call(api.feedback.commentLike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');

        yield put({ type: types.LIKE_COMMENT_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: postId });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.LIKE_COMMENT_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* commentDislike({ payload, postId }: ICommentAction) {
    try {
        const { status } = yield call(api.feedback.commentDislike, payload as string);
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.DISLIKE_COMMENT_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: postId });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DISLIKE_COMMENT_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

// PROFILE
interface IProfileAction {
    type:
        | typeof types.LIKE_PROFILE_START
        | typeof types.LIKE_PROFILE_SUCCESS
        | typeof types.LIKE_PROFILE_ERROR
        | typeof types.DISLIKE_PROFILE_START
        | typeof types.DISLIKE_PROFILE_SUCCESS
        | typeof types.DISLIKE_PROFILE_ERROR;
    payload: string;
    postId: string;
}
function* likeProfile({ payload }: IProfileAction) {
    try {
        const { status, data } = yield call(api.feedback.profileLike, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.LIKE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.LIKE_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* dislikeProfile({ payload }: IProfileAction) {
    try {
        const { status, data } = yield call(api.feedback.profileDislike, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.DISLIKE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.DISLIKE_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* feedback(): Generator {
    yield all([
        // single post
        yield takeLatest(types.LIKE_POST_START, like),
        yield takeLatest(types.DISLIKE_POST_START, dislike),
        // post list
        yield takeLatest(types.LIKE_POPULAR_POSTS_START, likePopular),
        yield takeLatest(types.DISLIKE_POPULAR_POSTS_START, dislikePopular),
        // comments
        yield takeLatest(types.LIKE_COMMENT_START, commentLike),
        yield takeLatest(types.DISLIKE_COMMENT_START, commentDislike),
        // profile
        yield takeLatest(types.LIKE_PROFILE_START, likeProfile),
        yield takeLatest(types.DISLIKE_PROFILE_START, dislikeProfile),
    ]);
}
