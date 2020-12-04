import { all, fork } from 'redux-saga/effects';

import list from './list/saga';

export default function* post(): Generator {
    yield all([fork(list)]);
}
