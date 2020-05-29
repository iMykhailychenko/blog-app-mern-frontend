import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { menuActions } from '../../../redux/mobile-menu/menuActions';
import { IState } from '../../../redux/rootState';
// utils
import clsx from 'clsx';
// styles
import styles from './Navbar.module.css';

const Navbar: React.FC<{}> = () => {
    // media
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        window.innerWidth > 768 ? setMobile(false) : setMobile(true);

        const handleResize = (): void => {
            window.innerWidth > 768 ? setMobile(false) : setMobile(true);
        };
        window.addEventListener('resize', handleResize);

        return window.removeEventListener('resize', handleResize);
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
                        onClick={() => dispatch(menuActions(menu))}
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
                                onClick={() => dispatch(menuActions(menu))}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/trial"
                                className={styles.link}
                                activeClassName={styles.active}
                                onClick={() => dispatch(menuActions(menu))}
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

export default Navbar;
