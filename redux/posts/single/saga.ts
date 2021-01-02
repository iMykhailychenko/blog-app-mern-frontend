import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IParams, IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_SINGLE_POST_START
        | typeof types.GET_SINGLE_POST_SUCCESS
        | typeof types.GET_SINGLE_POST_ERROR;
    payload: IPost | IState | string | null;
    user?: string | null;
    config?: IParams;
}

function* getSinglePost({ payload, user }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getSinglePost, payload as string, { user });
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_SINGLE_POST_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_SINGLE_POST_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* deletePost({ payload, config }: IAction) {
    console.log(payload, config);
    try {
        const { status, data } = yield call(api.posts.deletePost, payload as string);
        console.log(data);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.DELETE_POST_SUCCESS });
        yield put({ type: types.GET_POSTS_START, payload: config });
    } catch (error) {
        yield put({ type: types.DELETE_POST_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* single(): Generator {
    yield all([
        yield takeLatest(types.GET_SINGLE_POST_START, getSinglePost),
        yield takeLatest(types.DELETE_POST_START, deletePost),
    ]);
}
