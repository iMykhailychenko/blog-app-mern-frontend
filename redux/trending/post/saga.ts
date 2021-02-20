import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_TRENDING_POST_START
        | typeof types.GET_TRENDING_POST_SUCCESS
        | typeof types.GET_TRENDING_POST_ERROR;
    payload: IState | IPost | null;
}

function* getTrendingPosts() {
    try {
        const { status, data } = yield call(api.trending.getTrendingPosts);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_TRENDING_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_TRENDING_POST_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* post(): Generator {
    yield takeLatest(types.GET_TRENDING_POST_START, getTrendingPosts);
}
