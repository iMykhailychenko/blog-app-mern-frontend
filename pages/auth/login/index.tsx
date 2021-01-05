import React, { ReactElement } from 'react';

import AuthRedirect from '../../../components/Common/Auth/AuthRedirect';
import FormLogin from '../../../components/Common/Forms/Login';
import Meta from '../../../components/Common/Meta';
import Picture from '../../../components/Common/Picture';
import css from './index.module.css';

const Login = (): ReactElement => {
    return (
        <>
            <AuthRedirect reverse />
            <Meta title="Blog app | login" />
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
