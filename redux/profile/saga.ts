import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IState, IUser } from '../../interfaces';
import types from '../types';

export interface IFeedback {
    like: string[];
    dislike: string[];
}

export interface IAction {
    type:
        | typeof types.GET_PROFILE_START
        | typeof types.GET_PROFILE_SUCCESS
        | typeof types.GET_PROFILE_ERROR
        | typeof types.LIKE_PROFILE_START
        | typeof types.LIKE_PROFILE_SUCCESS
        | typeof types.LIKE_PROFILE_ERROR
        | typeof types.DISLIKE_PROFILE_START
        | typeof types.DISLIKE_PROFILE_SUCCESS
        | typeof types.DISLIKE_PROFILE_ERROR
        | typeof types.FOLLOW_USER_START
        | typeof types.FOLLOW_USER_SUCCESS
        | typeof types.FOLLOW_USER_ERROR;
    payload: IUser | IState | string | null | IFeedback;
}

function* getProfile({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.getProfile, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* likeProfile({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.like, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.LIKE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.LIKE_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* dislikeProfile({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.dislike, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.DISLIKE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.DISLIKE_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* putFollowers({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.putFollowers, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.FOLLOW_USER_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.FOLLOW_USER_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* profile(): Generator {
    yield all([
        yield takeLatest(types.GET_PROFILE_START, getProfile),
        yield takeLatest(types.LIKE_PROFILE_START, likeProfile),
        yield takeLatest(types.DISLIKE_PROFILE_START, dislikeProfile),
        yield takeLatest(types.FOLLOW_USER_START, putFollowers),
    ]);
}
