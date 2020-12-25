import React, { ReactElement } from 'react';

import AuthRedirect from '../../../components/Common/Auth/AuthRedirect';
import FormLogin from '../../../components/Common/Forms/Login';
import Picture from '../../../components/Common/Picture';
import css from './index.module.css';

const Login = (): ReactElement => {
    return (
        <>
            <AuthRedirect reverse />
            <div className={css.wrp}>
                <Picture className={css.banner} />
                <div className={css.inner}>
                    <FormLogin />
                </div>
            </div>
        </>
    );
};

export default Login;
