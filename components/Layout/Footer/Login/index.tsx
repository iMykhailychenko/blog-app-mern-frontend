import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../assets/routes';
import css from './index.module.css';

const Login = (): ReactElement => {
    return (
        <p className={css.text}>
            <Link href={routes.auth.login}>
                <a>Login</a>
            </Link>
            {' or '}
            {/* <Link to={routes.Auth.Si}>Signup</Link> */}
            {' to get more'}
        </p>
    );
};

export default Login;
