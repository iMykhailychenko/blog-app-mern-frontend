import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import types from '../types';
import { IAction, IPayload } from './interfaces';

function* getFollowers({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.followers, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_FOLLOWERS_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_FOLLOWERS_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* moreFollowers({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.followers, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.MORE_FOLLOWERS_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.MORE_FOLLOWERS_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* getFollowing({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.following, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_FOLLOWING_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_FOLLOWING_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* moreFollowing({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.following, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.MORE_FOLLOWING_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.MORE_FOLLOWING_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* followers(): Generator {
    yield all([
        yield takeLatest(types.GET_FOLLOWERS_START, getFollowers),
        yield takeLatest(types.MORE_FOLLOWERS_START, moreFollowers),
        yield takeLatest(types.GET_FOLLOWING_START, getFollowing),
        yield takeLatest(types.MORE_FOLLOWING_START, moreFollowing),
    ]);
}
