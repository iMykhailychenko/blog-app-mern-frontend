import Cookies from 'js-cookie';
import { HYDRATE } from 'next-redux-wrapper';
import { Middleware } from 'redux';

import notifications from '../components/Common/Notifications';
import { IState } from '../interfaces';
import initState from '../redux/state';
import types from '../redux/types';

const Persist: Middleware = store => next => action => {
    if (process.browser) {
        /**
         * SET DATA TO STORAGE
         * */
        if (types.LOGIN_SUCCESS === action.type || types.GET_USER_INFO_SUCCESS === action.type) {
            try {
                const state: IState = store.getState();
                Cookies.set('blog_auth', JSON.stringify({ ...state.auth, ...action.payload }));
                next(action);
                return;
            } catch (error) {
                notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                next(action);
                return;
            }
        }

        if (types.GET_USER_INFO_SUCCESS === action.type) {
            try {
                const state: IState = store.getState();
                Cookies.set('blog_auth', JSON.stringify({ ...state.auth, user: action.payload }));
                next(action);
                return;
            } catch (error) {
                notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                next(action);
                return;
            }
        }

        if (types.UPDATE_AVATAR_SUCCESS === action.type) {
            try {
                const state: IState = store.getState();
                Cookies.set(
                    'blog_auth',
                    JSON.stringify({
                        ...state.auth,
                        user: { ...state.auth.user, avatar: action.payload.trim() || null },
                    }),
                );
                next(action);
                return;
            } catch (error) {
                notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                next(action);
                return;
            }
        }

        if (types.LOGOUT_SUCCESS === action.type) {
            try {
                Cookies.set('blog_auth', JSON.stringify(initState.auth));
                next(action);
                return;
            } catch (error) {
                notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                next(action);
                return;
            }
        }

        /**
         * HYDRATE ACTION
         * */
        if (HYDRATE === action.type) {
            try {
                const authStr = Cookies.get('blog_auth');
                const auth = authStr ? JSON.parse(authStr) : initState.auth;

                next({
                    type: HYDRATE,
                    payload: {
                        ...action.payload,
                        auth,
                    },
                });
                return;
            } catch (error) {
                notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                next(action);
                return;
            }
        }
    }

    // Do stuff
    next(action);
};

export default Persist;
