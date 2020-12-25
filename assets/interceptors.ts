import axios from 'axios';
import { NextRouter } from 'next/router';

import { makeStore } from '../redux/store';
import types from '../redux/types';
import routes from './routes';

const interceptors = ({ history }: { history: NextRouter }): void => {
    axios.interceptors.request.use(
        config => config,
        error => Promise.reject(error),
    );
    axios.interceptors.response.use(
        response => {
            if (response.config.url === '/auth/login/') {
                const bearerToken = response.data.token;
                if (bearerToken) {
                    axios.defaults.headers.common.Authorization = `Bearer ${bearerToken}`;
                }
                history.replace(routes.home);
            }
            return response;
        },
        error => {
            if (error?.response?.status === 401) {
                const store = makeStore();
                if (!store.getState()?.auth?.token) {
                    delete axios.defaults.headers.common.Authorization;
                    return;
                }
                store.dispatch({ type: types.LOGOUT_START });
            }
            return Promise.reject(error);
        },
    );
};

export default interceptors;
