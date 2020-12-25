import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_SINGLE_POST_START
        | typeof types.GET_SINGLE_POST_SUCCESS
        | typeof types.GET_SINGLE_POST_ERROR;
    payload: IPost | IState | string | null;
    user?: string | null;
}

function* getSinglePost({ payload, user }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getSinglePost, payload as string, { user });
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.GET_SINGLE_POST_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_SINGLE_POST_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong');
    }
}

export default function* single(): Generator {
    yield takeLatest(types.GET_SINGLE_POST_START, getSinglePost);
}
