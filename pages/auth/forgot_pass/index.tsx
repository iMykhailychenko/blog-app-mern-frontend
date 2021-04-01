import React, { ReactElement } from 'react';

import FormLogin from '../../../components/Common/Forms/Login';
import Meta from '../../../components/Common/Meta';
import Picture from '../../../components/Common/Picture';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
import css from '../index.module.css';

const ForgotPass = (): ReactElement => {
    return (
        <>
            <Meta title="Blog app | reset pass" />
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

export default ForgotPass;
