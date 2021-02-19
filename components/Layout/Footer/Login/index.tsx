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
            <Link href={routes.auth.signup}>
                <a>Signup</a>
            </Link>
            {' to get more'}
        </p>
    );
};

export default Login;
