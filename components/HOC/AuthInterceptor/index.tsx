import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../interfaces';

const AuthInterceptor = (): null => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common.Authorization;
        }
    }, [token]);

    return null;
};

export default AuthInterceptor;
