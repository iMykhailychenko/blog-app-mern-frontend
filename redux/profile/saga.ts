import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IState, IUser } from '../../interfaces';
import types from '../types';

export interface IAction {
    type: typeof types.GET_PROFILE_START | typeof types.GET_PROFILE_SUCCESS | typeof types.GET_PROFILE_ERROR;
    payload: IUser | IState | string | null;
}

function* getProfile({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.profile, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_PROFILE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* profile(): Generator {
    yield takeLatest(types.GET_PROFILE_START, getProfile);
}
