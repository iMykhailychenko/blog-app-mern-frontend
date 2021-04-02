import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';

import { serverRedirect } from '../../../assets/helpers';
import FormLogin from '../../../components/Common/Forms/Login';
import Meta from '../../../components/Common/Meta';
import Picture from '../../../components/Common/Picture';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
import { wrapper } from '../../../redux/store';
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

export const getServerSideProps = wrapper.getServerSideProps((ctx): void => {
    serverRedirect((ctx as unknown) as GetServerSidePropsContext, null, true);
});

export default ForgotPass;
