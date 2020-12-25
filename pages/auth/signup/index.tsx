import React, { ReactElement } from 'react';

import FormSignUp from '../../../components/Common/Forms/SignUp';
import Picture from '../../../components/Common/Picture';
import css from './index.module.css';

const Login = (): ReactElement => {
    return (
        <>
            <div className={css.wrp}>
                <Picture className={css.banner} />
                <div className={css.inner}>
                    <FormSignUp />
                </div>
            </div>
        </>
    );
};

export default Login;
