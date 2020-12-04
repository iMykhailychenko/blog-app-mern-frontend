import { all, fork } from 'redux-saga/effects';

import post from './post/saga';

export default function* sagas(): Generator {
    yield all([fork(post)]);
}
