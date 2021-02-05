import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import types from '../types';

export interface IAction {
    type:
        | typeof types.UPDATE_AVATAR_START
        | typeof types.UPDATE_AVATAR_SUCCESS
        | typeof types.UPDATE_AVATAR_ERROR
        | typeof types.UPDATE_USER_BIO_START
        | typeof types.UPDATE_USER_BIO_SUCCESS
        | typeof types.UPDATE_USER_BIO_ERROR
        | typeof types.UPDATE_USER_BANNER_START
        | typeof types.UPDATE_USER_BANNER_SUCCESS
        | typeof types.UPDATE_USER_BANNER_ERROR;
    payload: File | string | null;
}

function* updateAvatar({ payload }: IAction) {
    const form = new FormData();
    if (payload) form.append('avatar', payload as File);
    try {
        const { status, data } = yield call(api.settings.updateAvatar, (form as FormData) || null);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.UPDATE_AVATAR_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.UPDATE_AVATAR_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* updateUserBanner({ payload }: IAction) {
    const form = new FormData();
    if (payload) form.append('banner', payload as File);
    try {
        const { status, data } = yield call(api.settings.updateBanner, (form as FormData) || null);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.UPDATE_USER_BANNER_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.UPDATE_USER_BANNER_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* updateUserBio({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.settings.updateBio, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.UPDATE_USER_BIO_SUCCESS, payload: data });
        notifications('success', 'Your bio has been successfully saved');
    } catch (error) {
        yield put({ type: types.UPDATE_USER_BIO_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* settings(): Generator {
    yield all([
        yield takeLatest(types.UPDATE_AVATAR_START, updateAvatar),
        yield takeLatest(types.UPDATE_USER_BANNER_START, updateUserBanner),
        yield takeLatest(types.UPDATE_USER_BIO_START, updateUserBio),
    ]);
}
