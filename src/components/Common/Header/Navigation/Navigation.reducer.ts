import * as types from './Navigation.types';

export default (menu = false, action: types.IAction): boolean => {
    switch (action.type) {
        case types.TOGGLE_MENU:
            return action.payload;

        default:
            return menu;
    }
};
