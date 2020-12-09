import { all, fork } from 'redux-saga/effects';

import list from './list/saga';

export default function* posts(): Generator {
    yield all([yield fork(list)]);
}
