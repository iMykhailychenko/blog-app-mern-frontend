import { Params } from 'next/dist/next-server/server/router';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import notifications from '../../../components/Common/Notifications';
import { IFeedback, IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_SINGLE_POST_START
        | typeof types.GET_SINGLE_POST_SUCCESS
        | typeof types.GET_SINGLE_POST_ERROR;
    payload: IPost | IFeedback | IState | string | 1 | 0 | null;
    user?: string | null;
    config?: Params;
}

function* getSinglePost({ payload, user }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getSinglePost, { id: payload, params: { user } } as {
            id: string;
            params: Params;
        });
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_SINGLE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_SINGLE_POST_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* deletePost({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.posts.deletePost, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.DELETE_POST_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.DELETE_POST_ERROR });
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* single(): Generator {
    yield all([
        yield takeLatest(types.GET_SINGLE_POST_START, getSinglePost),
        yield takeLatest(types.DELETE_POST_START, deletePost),
    ]);
}
