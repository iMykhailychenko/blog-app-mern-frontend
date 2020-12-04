import React, { ReactElement } from 'react';

import LoginForm from '../../../Common/Forms/Login';
import Picture from '../../../Common/Picture';
import styles from './index.module.css';

const Login = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.banner}>
            <Picture />
        </div>

        <div className={styles.login}>
            <LoginForm />
        </div>
    </div>
);

export default Login;
