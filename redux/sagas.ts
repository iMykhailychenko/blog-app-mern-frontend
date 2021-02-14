import { all, fork } from 'redux-saga/effects';

import auth from './auth/saga';
import comments from './comments/saga';
import feedback from './feedback/saga';
import posts from './posts/saga';
import profile from './profile/saga';
import settings from './settings/saga';
import trending from './trending/saga';

export default function* sagas(): Generator {
    yield all([fork(auth), fork(posts), fork(feedback), fork(comments), fork(profile), fork(trending), fork(settings)]);
}
