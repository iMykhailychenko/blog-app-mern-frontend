import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import toggleMenu from './nav.actions';
import { IState } from '../../../helpers/interfaces';
import styles from './index.module.css';

export default () => {
    // media
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        window.innerWidth > 768 ? setMobile(false) : setMobile(true);

        const handleResize = (): void => {
            window.innerWidth > 768 ? setMobile(false) : setMobile(true);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // open/close mobile menu
    const menu = useSelector((state: IState) => state.menu);
    const dispatch = useDispatch();
    const menuClass = clsx(styles.list, menu && styles.open);

    return (
        <nav className={styles.nav}>
            {mobile ? (
                <>
                    <button
                        className={styles.mobileMenu}
                        type="button"
                        onClick={() => dispatch(toggleMenu(menu))}
                    >
                        <span />
                        <span />
                    </button>

                    <ul className={menuClass}>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className={styles.link}
                                activeClassName={styles.active}
                                onClick={() => dispatch(toggleMenu(menu))}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/trial"
                                className={styles.link}
                                activeClassName={styles.active}
                                onClick={() => dispatch(toggleMenu(menu))}
                            >
                                Get trial accaunt
                            </NavLink>
                        </li>
                    </ul>

                    <Link to="/signup" className="btn btn--blue">
                        Sign up
                    </Link>
                </>
            ) : (
                <>
                    <ul className={menuClass}>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className={styles.link}
                                activeClassName={styles.active}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/trial"
                                className={styles.link}
                                activeClassName={styles.active}
                            >
                                Get trial accaunt
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/signup" className="btn btn--blue">
                        Sign up
                    </Link>
                </>
            )}
        </nav>
    );
};
