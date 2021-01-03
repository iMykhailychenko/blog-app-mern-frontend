import { NextRouter } from 'next/router';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import routes from '../../../assets/routes';
import notifications from '../../../components/Common/Notifications';
import { INewPost, IParams, IPost, IState } from '../../../interfaces';
import types from '../../types';

export interface IAction {
    type:
        | typeof types.GET_EDIT_POST_START
        | typeof types.GET_EDIT_POST_SUCCESS
        | typeof types.GET_EDIT_POST_ERROR
        | typeof types.UPDATE_POST_START
        | typeof types.UPDATE_POST_SUCCESS
        | typeof types.UPDATE_POST_ERROR;
    payload: IPost | IState | string | null;
    user?: string | null;
    config?: IParams;
    router?: NextRouter;
}

function* getEditPost({ payload, user }: IAction) {
    try {
        const { status, data } = yield call(api.posts.getSinglePost, payload as string, { user });
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_EDIT_POST_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: types.GET_EDIT_POST_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

function* updatePost({ payload, router }: IAction) {
    const form = yield select((state: IState): INewPost => state.posts.newPost);
    try {
        const { status, data } = yield call(api.posts.editPost, { id: payload as string, form });
        if (status < 200 || status >= 300) throw new Error();

        yield put({ type: types.UPDATE_POST_SUCCESS });
        router.push(routes.posts.single[0](data._id));
    } catch (error) {
        yield put({ type: types.UPDATE_POST_ERROR });
        if (error?.response?.status === 401) return;
        notifications('error', 'Something went wrong. Try to repeat this action again after a while');
    }
}

export default function* edit(): Generator {
    yield all([
        yield takeLatest(types.GET_EDIT_POST_START, getEditPost),
        yield takeLatest(types.UPDATE_POST_START, updatePost),
    ]);
}
