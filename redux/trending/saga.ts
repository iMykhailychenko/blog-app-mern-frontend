import { all, fork } from 'redux-saga/effects';

import post from './post/saga';
import tags from './tags/saga';

export default function* posts(): Generator {
    yield all([fork(post), fork(tags)]);
}
