import * as types from './Search.types';

export default (value: string): types.IAction => ({
    type: types.SEARCH,
    payload: value,
});
