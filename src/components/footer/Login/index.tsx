import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../../config/router';
import styles from './index.module.css';

export default () => {
    return (
        <p className={styles.tetx}>
            <Link to={router.auth.login}>Login</Link>
            {' or '}
            <Link to={router.auth.signup}>Singup</Link>
            {' to get more'}
        </p>
    );
};
