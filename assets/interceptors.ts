import axios from 'axios';
import { NextRouter } from 'next/router';

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
                history.replace('/');
            }
            return response;
        },
        error => {
            if (error?.response?.status === 401) {
                delete axios.defaults.headers.common.Authorization;
                history.replace('/login');
            }
            return Promise.reject(error);
        },
    );
};

export default interceptors;
