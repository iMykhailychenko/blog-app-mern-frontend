import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../../../../redux/selectors';
import styles from '../index.module.css';
import routes from '../../../../../routes';

interface IProps {
    onClick: () => void;
    className?: string;
}

const MobileNav = ({ onClick, className }: IProps): ReactElement => {
    const { isAuth } = useSelector(getAuth);

    return (
        <ul className={className}>
            <li>
                <NavLink
                    to={routes.Home.path}
                    exact
                    className={styles.link}
                    activeClassName={styles.active}
                    onClick={onClick}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={routes.About.path}
                    className={styles.link}
                    activeClassName={styles.active}
                    onClick={onClick}
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={routes.Question.path}
                    className={styles.link}
                    activeClassName={styles.active}
                    onClick={onClick}
                >
                    Question
                </NavLink>
            </li>
            {!isAuth && (
                <li>
                    <NavLink
                        to={routes.Trial.path}
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

export default MobileNav;
