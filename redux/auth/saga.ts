import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IState, IUser } from '../../interfaces';
import types from '../types';

export interface IResponse {
    token: null;
    user: IUser;
}

export interface IAction {
    type: typeof types.LOGIN_START | typeof types.LOGIN_SUCCESS | typeof types.LOGIN_ERROR;
    payload: IResponse | Body | IState | IUser | string | null;
}

function* login({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.auth.login, payload as Body);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.LOGIN_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.LOGIN_ERROR });
        notifications(
            'error',
            error?.response?.data?.massage || 'Something went wrong. Try to repeat this action again after a while',
        );
    }
}

function* signup({ payload }: IAction) {
    try {
        const { status } = yield call(api.auth.signup, payload as Body);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.SIGNUP_SUCCESS });
        notifications('success', 'Success');
    } catch (error) {
        yield put({ type: types.SIGNUP_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* logout() {
    try {
        const { status } = yield call(api.auth.logout);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.LOGOUT_SUCCESS });
    } catch (error) {
        yield put({ type: types.LOGOUT_ERROR });
    } finally {
        delete axios.defaults.headers.common.Authorization;
    }
}

function* getUser() {
    try {
        const { status, data } = yield call(api.auth.getUser);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_USER_INFO_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_USER_INFO_ERROR });
    }
}

export default function* auth(): Generator {
    yield all([
        yield takeLatest(types.LOGIN_START, login),
        yield takeLatest(types.SIGNUP_START, signup),
        yield takeLatest(types.LOGOUT_START, logout),
        yield takeLatest(types.GET_USER_INFO_START, getUser),
    ]);
}
