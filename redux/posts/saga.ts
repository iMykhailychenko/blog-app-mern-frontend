import { all, fork } from 'redux-saga/effects';

import edit from './edit/saga';
import list from './list/saga';
import newPost from './new/saga';
import single from './single/saga';

export default function* posts(): Generator {
    yield all([fork(list), fork(newPost), fork(single), fork(edit)]);
}
