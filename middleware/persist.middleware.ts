import axios from 'axios';
import Cookies from 'js-cookie';
import { HYDRATE } from 'next-redux-wrapper';
import { Middleware } from 'redux';

import notifications from '../components/Common/Notifications';
import types from '../redux/types';

const Persist: Middleware = store => next => action => {
    if (process.browser) {
        switch (action.type) {
            case types.LOGIN_SUCCESS:
                try {
                    Cookies.set('blog_auth', action.payload.token);
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    console.dir(error);
                    next(action);
                }
                break;

            case types.LOGOUT_SUCCESS:
                try {
                    Cookies.set('blog_auth', '');
                    next(action);
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    console.dir(error);
                    next(action);
                }
                break;

            case HYDRATE:
                try {
                    const token = Cookies.get('blog_auth') || null;
                    next({ type: HYDRATE, payload: { ...action.payload, auth: { ...action.payload.auth, token } } });
                } catch (error) {
                    notifications('error', 'Oops, Something went wrong. Please, reload your browser and try again');
                    console.dir(error);
                    next(action);
                }
                break;

            default:
                next(action);
        }
    }

    if (!process.browser) {
        switch (action.type) {
            case HYDRATE:
                try {
                    const token = axios.defaults.headers.common.Authorization.replace('Bearer ', '');
                    next({ type: HYDRATE, payload: { ...action.payload, auth: { ...action.payload.auth, token } } });
                } catch (error) {
                    console.dir(error);
                    next(action);
                }
                break;

            default:
                next(action);
        }
    }
};

export default Persist;
