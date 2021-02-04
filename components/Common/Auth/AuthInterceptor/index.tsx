import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useAuth from '../../../../hooks/auth.hook';
import types from '../../../../redux/types';

const AuthInterceptor = (): null => {
    const dispatch = useDispatch();
    const auth = useAuth();

    useEffect(() => {
        if (auth?.token) {
            axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
            dispatch({ type: types.GET_USER_INFO_START });
        } else {
            delete axios.defaults.headers.common.Authorization;
        }
    }, [auth?.token]);

    return null;
};

export default AuthInterceptor;
