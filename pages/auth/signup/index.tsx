import React, { ReactElement } from 'react';

import FormSignUp from '../../../components/Common/Forms/SignUp';
import Meta from '../../../components/Common/Meta';
import Picture from '../../../components/Common/Picture';
import css from './index.module.css';

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

export default Join;
