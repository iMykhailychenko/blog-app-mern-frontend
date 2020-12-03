import React from 'react';
import LoginForm from '../../../common/forms/login';
import Picture from '../../picture';
import styles from './index.module.css';

export default () => (
    <div className={styles.container}>
        <div className={styles.banner}>
            <Picture />
        </div>

        <div className={styles.login}>
            <LoginForm />
        </div>
    </div>
);
