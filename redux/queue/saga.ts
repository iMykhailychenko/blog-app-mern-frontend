import { Params } from '@fortawesome/fontawesome-svg-core';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import config from '../../assets/config';
import notifications from '../../components/Common/Notifications';
import { IPostPagination, IState } from '../../interfaces';
import types from '../types';

export interface IAction {
    type:
        | typeof types.GET_QUEUE_START
        | typeof types.GET_QUEUE_SUCCESS
        | typeof types.GET_QUEUE_ERROR
        | typeof types.MORE_QUEUE_START
        | typeof types.MORE_QUEUE_SUCCESS
        | typeof types.MORE_QUEUE_ERROR
        | typeof types.UPDATE_QUEUE_POPULAR_START
        | typeof types.UPDATE_QUEUE_POPULAR_SUCCESS
        | typeof types.UPDATE_QUEUE_POPULAR_ERROR
        | typeof types.UPDATE_QUEUE_START
        | typeof types.UPDATE_QUEUE_SUCCESS
        | typeof types.UPDATE_QUEUE_ERROR;
    payload: IPostPagination | IState | Params | string | null;
}

function* getQueue({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.queue.getQueue, payload as Params);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_QUEUE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_QUEUE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* moreQueue({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.queue.getQueue, payload as Params);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.MORE_QUEUE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.MORE_QUEUE_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* putQueue({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.queue.updateQueue, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.UPDATE_QUEUE_SUCCESS, payload: data.queue });
    } catch (error) {
        yield put({ type: types.UPDATE_QUEUE_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* putQueuePopular({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.queue.updateQueue, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.UPDATE_QUEUE_POPULAR_SUCCESS, payload: { data: data.queue, id: payload } });
        yield put({ type: types.GET_QUEUE_START, payload: { page: 1, limit: config.queuePerPage } });
    } catch (error) {
        yield put({ type: types.UPDATE_QUEUE_POPULAR_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* queue(): Generator {
    yield all([
        yield takeLatest(types.GET_QUEUE_START, getQueue),
        yield takeLatest(types.MORE_QUEUE_START, moreQueue),
        yield takeLatest(types.UPDATE_QUEUE_START, putQueue),
        yield takeLatest(types.UPDATE_QUEUE_POPULAR_START, putQueuePopular),
    ]);
}
