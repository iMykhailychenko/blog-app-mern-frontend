import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IUser } from '../../interfaces';
import types from '../types';

export interface IResponce {
  token: null;
  user: IUser;
}

export interface IAction {
  type:
    | typeof types.LOGIN_START
    | typeof types.LOGIN_SUCCESS
    | typeof types.LOGIN_ERROR;
  payload: IResponce | Body | null;
}

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

function* logout() {
  try {
    const { status } = yield call(api.auth.logout);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.LOGOUT_ERROR });
  } finally {
    delete axios.defaults.headers.common.Authorization;
  }
}

export default function* auth(): Generator {
  yield all([
    yield takeLatest(types.LOGIN_START, login),
    yield takeLatest(types.LOGOUT_START, logout),
  ]);
}
