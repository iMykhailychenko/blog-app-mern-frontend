import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import types from '../types';
import { IAction } from './interfaces';

function* getProfile({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.getProfile, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* putFollowers({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile.putFollowers, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.FOLLOW_USER_SUCCESS });
        yield put({ type: types.GET_PROFILE_START, payload });
        notifications('success', 'You have successfully ' + data?.type);
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.FOLLOW_USER_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* profile(): Generator {
    yield all([
        yield takeLatest(types.GET_PROFILE_START, getProfile),
        yield takeLatest(types.FOLLOW_USER_START, putFollowers),
    ]);
}
