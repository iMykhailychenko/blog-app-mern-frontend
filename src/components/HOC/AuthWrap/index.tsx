import React, { ComponentClass, FunctionComponent, ReactElement } from 'react';
// import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import routes from '../../../routes';

// import router from '../../../routes';

interface IProps {
    revers?: boolean;
    exact?: boolean;
    path: string;
    component: FunctionComponent | ComponentClass;
}

const AuthWrap = ({ exact = false, revers = false, path, component }: IProps): ReactElement => {
    // const { isAuth } = useSelector(getAuth);
    // const authWithRevers = revers ? !isAuth : isAuth;
    const authWithRevers = revers;

    return authWithRevers ? (
        <Route exact={exact} path={path} component={component} />
    ) : (
        <Redirect to={routes.Home.path} />
    );
};

export default AuthWrap;
