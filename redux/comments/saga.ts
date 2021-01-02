import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import types from '../types';

interface IPOSTComment {
    id: string;
    form: FormData;
}

interface IPUTComment {
    id: string;
    comment: string;
    form: FormData;
}

interface IPOSTAnswer {
    id: string;
    comment: string;
    form: FormData;
}

interface IAction {
    type:
        | typeof types.GET_COMMENTS_START
        | typeof types.GET_COMMENTS_SUCCESS
        | typeof types.GET_COMMENTS_ERROR
        | typeof types.POST_ANSWER_START
        | typeof types.POST_ANSWER_SUCCESS
        | typeof types.POST_ANSWER_ERROR
        | typeof types.POST_COMMENT_START
        | typeof types.POST_COMMENT_SUCCESS
        | typeof types.POST_COMMENT_ERROR
        | typeof types.EDIT_COMMENT_START
        | typeof types.EDIT_COMMENT_SUCCESS
        | typeof types.EDIT_COMMENT_ERROR
        | typeof types.DELETE_COMMENT_START
        | typeof types.DELETE_COMMENT_SUCCESS
        | typeof types.DELETE_COMMENT_ERROR;
    payload: string | IPOSTComment | IPOSTAnswer;
}

function* getComments({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.comments.getComment, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_COMMENTS_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* postComment({ payload }: IAction) {
    try {
        const { status } = yield call(api.comments.postComment, payload as IPOSTComment);
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.POST_COMMENT_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: (payload as IPOSTComment).id });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.POST_COMMENT_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* postAnswer({ payload }: IAction) {
    try {
        const { status } = yield call(api.comments.postAnswer, payload as IPOSTAnswer);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');

        yield put({ type: types.POST_ANSWER_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: (payload as IPOSTComment).id });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.POST_ANSWER_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* deleteComment({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.comments.deleteComment, payload as string);
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.DELETE_COMMENT_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: data.post });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DELETE_COMMENT_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* editComment({ payload }: IAction) {
    try {
        const { status } = yield call(api.comments.editComment, payload as IPUTComment);
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.EDIT_COMMENT_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: (payload as IPUTComment).id });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.EDIT_COMMENT_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

interface IFeedback {
    type:
        | typeof types.POST_COMMENT_LIKE_START
        | typeof types.POST_COMMENT_LIKE_SUCCESS
        | typeof types.POST_COMMENT_LIKE_ERROR
        | typeof types.POST_COMMENT_DISLIKE_START
        | typeof types.POST_COMMENT_DISLIKE_SUCCESS
        | typeof types.POST_COMMENT_DISLIKE_ERROR;
    payload: string;
    postId: string;
}

function* commentLike({ payload, postId }: IFeedback) {
    try {
        const { status } = yield call(api.comments.commentLike, payload as string);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');

        yield put({ type: types.POST_COMMENT_LIKE_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: postId });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.POST_COMMENT_LIKE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* commentDislike({ payload, postId }: IFeedback) {
    try {
        const { status } = yield call(api.comments.commentDislike, payload as string);
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.POST_COMMENT_DISLIKE_SUCCESS });
        yield put({ type: types.GET_COMMENTS_START, payload: postId });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.POST_COMMENT_DISLIKE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* comments(): Generator {
    yield all([
        yield takeLatest(types.GET_COMMENTS_START, getComments),
        yield takeLatest(types.POST_COMMENT_START, postComment),
        yield takeLatest(types.POST_ANSWER_START, postAnswer),
        yield takeLatest(types.DELETE_COMMENT_START, deleteComment),
        yield takeLatest(types.EDIT_COMMENT_START, editComment),
        yield takeLatest(types.POST_COMMENT_LIKE_START, commentLike),
        yield takeLatest(types.POST_COMMENT_DISLIKE_START, commentDislike),
    ]);
}
