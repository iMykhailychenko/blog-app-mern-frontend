import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IParams } from '../../../interfaces';
import { IAction, types } from '../types';

function* getPosts({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getPosts, payload as IParams);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');
        yield put({ type: types.GET_POSTS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_POSTS_ERROR });
        if (error?.response?.status === 401) return;
        console.log(error);
        notifications('error', 'Something went wrong');
    }
}

export default function* list(): Generator {
    yield takeLatest(types.GET_POSTS_START, getPosts);
}
