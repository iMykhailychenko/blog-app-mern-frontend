import React, { ReactElement } from 'react';

import Profile from '../Profile';
import styles from './index.module.css';

const Navigation = (): ReactElement => {
    // const { isAuth } = useSelector(getAuth);
    // const { pathname } = useLocation();

    // media
    // const [mobile, setMobile] = useState(false);

    // open/close mobile menu
    // const menu = useSelector((state: IState) => state.menu);
    // const dispatch = useDispatch();

    // const closeM = (): void => {
    //     dispatch(toggleMenu(false));
    // };

    // const toggleM = (): void => {
    //     // dispatch(toggleMenu(!menu));
    // };

    return (
        <nav className={styles.nav}>
            {/* {mobile ? (
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
            )} */}

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
