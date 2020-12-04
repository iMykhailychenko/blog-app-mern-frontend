import { all, fork } from 'redux-saga/effects';

import auth from './auth/saga';
import posts from './posts/saga';

export default function* sagas(): Generator {
    yield all([yield fork(auth), yield fork(posts)]);
}
