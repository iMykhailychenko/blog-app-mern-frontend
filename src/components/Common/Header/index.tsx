import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './index.module.css';
import Navigation from './Navigation';

const style: { [key: string]: boolean } = {
    '/login': true,
    '/forgot_pass': true,
};

const Header = (): ReactElement => {
    const { pathname } = useLocation();
    const media = window.innerWidth > 768;

    return (
        <>
            {style[pathname] && media && (
                <button className={styles.btn}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            )}

            <header className={clsx(styles.header, style[pathname] && media ? styles.transform : null)}>
                <div className="container">
                    <Navigation />
                </div>
            </header>
        </>
    );
};

export default Header;
