import React, { ComponentClass, FunctionComponent, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// import router from '../../../routes';
import { getAuth } from '../../../redux/selectors';

interface IProps {
    revers?: boolean;
    exact?: boolean;
    path: string;
    component: FunctionComponent | ComponentClass;
}

const AuthWrap = ({ exact = false, revers = false, path, component }: IProps): ReactElement => {
    const { isAuth } = useSelector(getAuth);
    const authWithRevers = revers ? !isAuth : isAuth;

    return authWithRevers ? (
        <Route exact={exact} path={path} component={component} />
    ) : (
        // <Redirect to={router.Home.path} />
        <Redirect to={'/'} />
    );
};

export default AuthWrap;
