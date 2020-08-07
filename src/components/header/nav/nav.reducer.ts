import * as types from './nav.types';

export default (menu: boolean = false, action: types.IAction): boolean => {
    switch (action.type) {
        case types.TOGGLE_MENU:
            return !action.payload;

        default:
            return menu;
    }
};
