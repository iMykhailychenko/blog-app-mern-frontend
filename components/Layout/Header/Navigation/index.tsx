import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import routes from '../../../../assets/routes';
import { IState } from '../../../../interfaces';
import Profile from '../Profile';
import DesktopNav from './DesktopNav';
import css from './index.module.css';
import MobileNav from './MobileNav';

const Navigation = (): ReactElement => {
    const [menu, setMenu] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    const handleClose = (): void => {
        setMenu(false);
    };
    const handleToggle = (): void => {
        setMenu(!menu);
    };
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return (
        <nav className={css.nav}>
            {isMobile ? (
                <>
                    <button className={css.mobileMenu} type="button" onClick={handleToggle}>
                        <span />
                        <span />
                    </button>

                    {menu && <MobileNav onClick={handleClose} className={clsx(css.list, menu && css.open)} />}
                </>
            ) : (
                <DesktopNav className={clsx(css.list, css.open)} />
            )}

            {token ? (
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
