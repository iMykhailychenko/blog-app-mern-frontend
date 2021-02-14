import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_TRENDING_TAGS_START
        | typeof types.GET_TRENDING_TAGS_SUCCESS
        | typeof types.GET_TRENDING_TAGS_ERROR;
    payload: IState | string[] | null;
}

function* getTrendingTags() {
    try {
        const { status, data } = yield call(api.trending.getTrendingTags);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_TRENDING_TAGS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_TRENDING_TAGS_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* tags(): Generator {
    yield takeLatest(types.GET_TRENDING_TAGS_START, getTrendingTags);
}
