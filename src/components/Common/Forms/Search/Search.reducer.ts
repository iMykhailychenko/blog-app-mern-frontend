import * as types from './Search.types';

export default (state: string = '', { type, payload }: types.IAction): string => {
    switch (type) {
        case types.SEARCH:
            return payload;

        default:
            return state;
    }
};
