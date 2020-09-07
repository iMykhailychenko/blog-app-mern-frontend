import React from 'react';
import ForgotPassForm from '../../../common/forms/forgot_pass';
import Picture from '../../picture';
import styles from './index.module.css';

export default () => (
    <div className={styles.container}>
        <div className={styles.banner}>
            <Picture />
        </div>

        <div className={styles.login}>
            <ForgotPassForm />
        </div>
    </div>
);
