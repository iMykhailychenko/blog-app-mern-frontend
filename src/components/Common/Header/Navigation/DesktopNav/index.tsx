import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import router from '../../../../config/router';
import { getAuth } from '../../../../redux/selectors';
import styles from '../index.module.css';

export default ({ className }: { className?: string }) => {
    const { isAuth } = useSelector(getAuth);

    return (
        <ul className={className}>
            <li>
                <NavLink to={router.home} exact className={styles.link} activeClassName={styles.active}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={router.about} className={styles.link} activeClassName={styles.active}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={router.question} className={styles.link} activeClassName={styles.active}>
                    Question
                </NavLink>
            </li>
            {!isAuth && (
                <li>
                    <NavLink to={router.trial} className={styles.link} activeClassName={styles.active}>
                        Get trial accaunt
                    </NavLink>
                </li>
            )}
        </ul>
    );
};
