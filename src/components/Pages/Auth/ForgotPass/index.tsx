import React, { ReactElement } from 'react';

import ForgotPassForm from '../../../Common/Forms/ForgotPass';
import Picture from '../../../Common/Picture';
import styles from './index.module.css';

const ForgotPass = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.banner}>
            <Picture />
        </div>

        <div className={styles.login}>
            <ForgotPassForm />
        </div>
    </div>
);

export default ForgotPass;
