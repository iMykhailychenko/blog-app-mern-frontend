import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { Router } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../assets/routes';
import useAuth from '../../../../hooks/auth.hook';
import useMedia from '../../../../hooks/media.hook';
import Profile from '../Profile';
import DesktopNav from './DesktopNav';
import css from './index.module.css';
import MobileNav from './MobileNav';

const Navigation = (): ReactElement => {
    const auth = useAuth();
    const mobile = useMedia(768);

    const [menu, setMenu] = useState<boolean>(false);

    const handleClose = (): void => {
        setMenu(false);
    };
    const handleToggle = (): void => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleClose = (): void => {
            setMenu(false);
        };
        Router.events.on('routeChangeStart', handleClose);

        return () => {
            Router.events.off('routeChangeStart', handleClose);
        };
    }, []);

    return (
        <nav className={css.nav}>
            {mobile ? (
                <DesktopNav />
            ) : (
                <>
                    <button className={css.mobileMenu} type="button" onClick={handleToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {menu && <MobileNav onClick={handleClose} className={clsx(css.list, menu && css.open)} />}
                </>
            )}

            {auth ? (
                <Profile />
            ) : (
                <div className={css.btn_wrp}>
                    <Link href={routes.search}>
                        <a className={css.btn}>
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </Link>

                    <Link href={routes.auth.login}>
                        <a className="btn btn--gray" style={{ marginLeft: '1rem' }}>
                            Login
                        </a>
                    </Link>

                    <Link href={routes.auth.signup}>
                        <a className="btn btn--blue" style={{ marginLeft: '1rem' }}>
                            Sign up
                        </a>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
