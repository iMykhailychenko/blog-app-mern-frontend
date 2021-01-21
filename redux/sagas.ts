import { all, fork } from 'redux-saga/effects';

import auth from './auth/saga';
import comments from './comments/saga';
import feedback from './feedback/saga';
import posts from './posts/saga';
import profile from './profile/saga';

export default function* sagas(): Generator {
    yield all([yield fork(auth), yield fork(posts), yield fork(feedback), yield fork(comments), yield fork(profile)]);
}
