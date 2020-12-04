import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IAction, types } from './types';

function* login({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.auth.login, payload as Body);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.LOGIN_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.LOGIN_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong');
    }
}

export default function* auth(): Generator {
    yield takeLatest(types.LOGIN_START, login);
}
