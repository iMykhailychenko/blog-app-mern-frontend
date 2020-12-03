import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Navbar from './nav';
import styles from './index.module.css';

const style: { [key: string]: boolean } = {
    '/login': true,
    '/forgot_pass': true,
};

export default () => {
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
                    <Navbar />
                </div>
            </header>
        </>
    );
};
