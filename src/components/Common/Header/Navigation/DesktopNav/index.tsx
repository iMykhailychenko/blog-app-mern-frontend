import React, { ReactElement } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../../../../routes';
import styles from '../index.module.css';

const DesktopNav = ({ className }: { className?: string }): ReactElement => {
    // const { isAuth } = useSelector(getAuth);

    return (
        <ul className={className}>
            <li>
                <NavLink to={routes.Home.path} exact className={styles.link} activeClassName={styles.active}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={routes.About.path} className={styles.link} activeClassName={styles.active}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={routes.Question.path} className={styles.link} activeClassName={styles.active}>
                    Question
                </NavLink>
            </li>
            {/* {!isAuth && (
                <li>
                    <NavLink to={routes.Trial.path} className={styles.link} activeClassName={styles.active}>
                        Get trial accaunt
                    </NavLink>
                </li>
            )} */}
        </ul>
    );
};

export default DesktopNav;
