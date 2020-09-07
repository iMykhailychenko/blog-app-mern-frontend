import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Profile from '../profile';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { getAuth } from '../../../redux/selectors';
import router from '../../../config/router';
import { IState } from '../../../helpers/interfaces';
import styles from './index.module.css';
import toggleMenu from './nav.actions';

export default () => {
    const { isAuth } = useSelector(getAuth);
    const { pathname } = useLocation();

    const logPath: { [key: string]: boolean } = {
        '/': true,
        '/login': true,
    };

    const signPath: { [key: string]: boolean } = {
        '/signup': true,
    };

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

    const closeM = (): void => {
        dispatch(toggleMenu(false));
    };

    const toggleM = (): void => {
        dispatch(toggleMenu(!menu));
    };

    return (
        <nav className={styles.nav}>
            {mobile ? (
                <>
                    <button
                        className={styles.mobileMenu}
                        type="button"
                        onClick={toggleM}
                    >
                        <span />
                        <span />
                    </button>

                    {menu && (
                        <>
                            <div className={styles.backdrop} onClick={closeM} />

                            <MobileNav
                                onClick={toggleM}
                                className={clsx(
                                    styles.list,
                                    menu && styles.open,
                                )}
                            />
                        </>
                    )}
                </>
            ) : (
                <DesktopNav
                    className={clsx(styles.list, menu && styles.open)}
                />
            )}

            {isAuth ? (
                <Profile />
            ) : (
                <div className={styles.btn_wrp}>
                    <Link to={router.search} className={styles.btn}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>

                    {!logPath[pathname] && (
                        <Link
                            to={router.auth.login}
                            className="btn btn--gray"
                            style={{ marginLeft: '1rem' }}
                        >
                            Login
                        </Link>
                    )}
                    {!signPath[pathname] && (
                        <Link
                            to={router.auth.signup}
                            className="btn btn--blue"
                            style={{ marginLeft: '1rem' }}
                        >
                            Sign up
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};
