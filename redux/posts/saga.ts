import { all, fork } from 'redux-saga/effects';

import list from './list/saga';
import newPost from './new/saga';
import single from './single/saga';

export default function* posts(): Generator {
    yield all([yield fork(list), yield fork(newPost), yield fork(single)]);
}
