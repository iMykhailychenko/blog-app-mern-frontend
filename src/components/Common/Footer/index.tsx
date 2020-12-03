import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import Profile from './Profile';

import { getAuth } from '../../../redux/selectors';
import styles from './index.module.css';

const style: { [key: string]: boolean } = {
    '/login': true,
    '/forgot_pass': true,
};

const Footer = (): ReactElement => {
    const { isAuth } = useSelector(getAuth);
    const { pathname } = useLocation();

    return (
        <>
            <footer className={styles.footer} style={style[pathname] ? { marginTop: '0' } : {}}>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <Nav />
                        {isAuth ? <Profile /> : <Login />}
                        <p className={styles.text}>© 2020 Ihor Mykhailychenko</p>
                    </div>

                    <div className={styles.logo}></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
