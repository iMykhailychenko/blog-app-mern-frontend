import Cookies from 'js-cookie';
import { HYDRATE } from 'next-redux-wrapper';
import { Middleware } from 'redux';

import notifications from '../components/Common/Notifications';
import { IState, IUser } from '../interfaces';
import initState from '../redux/state';
import types from '../redux/types';

const Persist: Middleware = store => next => action => {
    if (process.browser) {
        switch (action.type) {
            case types.LOGIN_SUCCESS:
                try {
                    const state: IState = store.getState();
                    Cookies.set('blog_auth', JSON.stringify({ ...state.auth, ...action.payload }));
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            case types.GET_USER_INFO_SUCCESS:
                try {
                    const state: IState = store.getState();
                    Cookies.set('blog_auth', JSON.stringify({ ...state.auth, user: action.payload }));
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            case types.UPDATE_AVATAR_SUCCESS:
                try {
                    const state: IState = store.getState();
                    Cookies.set(
                        'blog_auth',
                        JSON.stringify({
                            ...state.auth,
                            user: { ...(state.auth?.user as IUser), avatar: action.payload.trim() || null },
                        }),
                    );
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            case types.LOGOUT_SUCCESS:
                try {
                    Cookies.set('blog_auth', JSON.stringify(initState.auth));
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            case types.POST_IN_COLUMN:
                try {
                    localStorage.setItem('postColumn', JSON.stringify(action.payload));
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            /**
             * HYDRATE ACTION
             * */
            case HYDRATE:
                try {
                    const authStr = Cookies.get('blog_auth');
                    const auth = authStr ? JSON.parse(authStr) : initState.auth;

                    const postColumnStr = localStorage.getItem('postColumn');
                    const postColumn = postColumnStr ? JSON.parse(postColumnStr) : initState.config.postColumn;

                    next({
                        type: HYDRATE,
                        payload: { ...action.payload, auth, config: { postColumn } },
                    });
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    next(action);
                }
                break;

            default:
                next(action);
        }
    }

    // Do stuff
    next(action);
};

export default Persist;
