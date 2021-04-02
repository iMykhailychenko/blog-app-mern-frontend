import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';

import { serverRedirect } from '../../../assets/helpers';
import FormSignUp from '../../../components/Common/Forms/SignUp';
import Meta from '../../../components/Common/Meta';
import Picture from '../../../components/Common/Picture';
import { wrapper } from '../../../redux/store';
import css from '../index.module.css';

const Join = (): ReactElement => {
    return (
        <>
            <Meta title="Blog app | join" />
            <div className={css.wrp}>
                <Picture className={css.banner} />
                <div className={css.inner}>
                    <FormSignUp />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((ctx): void => {
    serverRedirect((ctx as unknown) as GetServerSidePropsContext, null, true);
});

export default Join;
