import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../../config/router';
import styles from './index.module.css';

export default () => {
    return (
        <ul className={styles.list}>
            <li>
                <Link to={router.home}>Home</Link>
            </li>
            <li>
                <Link to={router.about}>About</Link>
            </li>
            <li>
                <Link to={router.question}>Help</Link>
            </li>
            <li>
                <Link to={router.trial}>Get trial accaunt</Link>
            </li>
        </ul>
    );
};
