// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useLocation } from 'react-router-dom';
import { IState } from '../../../../interfaces';
// import routes from '../../../../routes';
import Profile from '../Profile';
import DesktopNav from './DesktopNav';
import styles from './index.module.css';
import MobileNav from './MobileNav';
import toggleMenu from './Navigation.actions';

// const logPath: { [key: string]: boolean } = {
//     '/': true,
//     '/login': true,
// };

// const signPath: { [key: string]: boolean } = {
//     '/signup': true,
// };

const Navigation = (): ReactElement => {
    // const { isAuth } = useSelector(getAuth);
    // const { pathname } = useLocation();

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
                    <button className={styles.mobileMenu} type="button" onClick={toggleM}>
                        <span />
                        <span />
                    </button>

                    {menu && (
                        <>
                            <div className={styles.backdrop} onClick={closeM} aria-hidden />

                            <MobileNav onClick={toggleM} className={clsx(styles.list, menu && styles.open)} />
                        </>
                    )}
                </>
            ) : (
                <DesktopNav className={clsx(styles.list, menu && styles.open)} />
            )}

            <Profile />
            {/* {false ? (
            ) : (
                <div className={styles.btn_wrp}>
                    <Link to={routes.Search.path} className={styles.btn}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>

                    {!logPath[pathname] && (
                        <Link to={routes.Auth.Login.path} className="btn btn--gray" style={{ marginLeft: '1rem' }}>
                            Login
                        </Link>
                    )}
                    {!signPath[pathname] && (
                        <Link to={'/routes.Auth'} className="btn btn--blue" style={{ marginLeft: '1rem' }}>
                            Sign up
                        </Link>
                    )}
                </div>
            )} */}
        </nav>
    );
};

export default Navigation;
