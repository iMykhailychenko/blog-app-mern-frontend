import { Params } from '@fortawesome/fontawesome-svg-core';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import notifications from '../../components/Common/Notifications';
import { IFollowers, IFollowersPagination, IState } from '../../interfaces';
import types from '../types';

interface IPayload {
    id: string;
    params: Params;
}

export interface IAction {
    type:
        | typeof types.GET_FOLLOWERS_START
        | typeof types.GET_FOLLOWERS_SUCCESS
        | typeof types.GET_FOLLOWERS_ERROR
        | typeof types.GET_FOLLOWING_START
        | typeof types.GET_FOLLOWING_SUCCESS
        | typeof types.GET_FOLLOWING_ERROR;
    payload: IState | IFollowers | IFollowersPagination | IPayload | string | null;
}

function* getFollowers({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.followers, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_FOLLOWERS_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_FOLLOWERS_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* getFollowing({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.followers.followers, payload as IPayload);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_FOLLOWING_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_FOLLOWING_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* followers(): Generator {
    yield all([
        yield takeLatest(types.GET_FOLLOWERS_START, getFollowers),
        yield takeLatest(types.GET_FOLLOWING_START, getFollowing),
    ]);
}
