import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import router from '../../../../config/router';
import { getAuth } from '../../../../redux/selectors';
import styles from '../index.module.css';

interface IProps {
    onClick: () => void;
    className?: string;
}

export default ({ onClick, className }: IProps) => {
    const { isAuth } = useSelector(getAuth);

    return (
        <ul className={className}>
            <li>
                <NavLink
                    to={router.home}
                    exact
                    className={styles.link}
                    activeClassName={styles.active}
                    onClick={onClick}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={router.about} className={styles.link} activeClassName={styles.active} onClick={onClick}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={router.question} className={styles.link} activeClassName={styles.active} onClick={onClick}>
                    Question
                </NavLink>
            </li>
            {!isAuth && (
                <li>
                    <NavLink
                        to={router.trial}
                        className={styles.link}
                        activeClassName={styles.active}
                        onClick={onClick}
                    >
                        Get trial accaunt
                    </NavLink>
                </li>
            )}
        </ul>
    );
};
