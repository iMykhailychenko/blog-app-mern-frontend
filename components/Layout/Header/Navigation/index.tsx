import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../assets/routes';
import { IState } from '../../../../interfaces';
import Profile from '../Profile';
// import Profile from '../Profile';
import DesktopNav from './DesktopNav';
import styles from './index.module.css';

const Navigation = (): ReactElement => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

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
      )} */}
            <DesktopNav className={clsx(styles.list, styles.open)} />

            {token ? (
                <Profile />
            ) : (
                <div className={styles.btn_wrp}>
                    <Link href={routes.search}>
                        <a className={styles.btn}>
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
