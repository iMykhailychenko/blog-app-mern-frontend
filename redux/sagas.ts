import { all, fork } from 'redux-saga/effects';

import auth from './auth/saga';
import feedback from './feedback/saga';
import posts from './posts/saga';

export default function* sagas(): Generator {
    yield all([fork(auth), fork(posts), fork(feedback)]);
}
