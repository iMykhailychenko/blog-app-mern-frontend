import { all, fork } from 'redux-saga/effects';

import auth from './auth/saga';
import feedback from './feedback/saga';
import picture from './picture/saga';
import posts from './posts/saga';

export default function* sagas(): Generator {
    yield all([fork(auth), fork(picture), fork(posts), fork(feedback)]);
}
