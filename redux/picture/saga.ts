import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import types from '../types';

function* getPicture() {
    try {
        const { status, data } = yield call(api.picture);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.GET_PICTURE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_PICTURE_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong');
    }
}

export default function* picture(): Generator {
    yield takeLatest(types.GET_PICTURE_START, getPicture);
}
