import React, { ReactElement } from 'react';

// import { useSelector } from 'react-redux';
import css from './index.module.css';
// import Login from './Login';
import Nav from './Nav';
// import Profile from './Profile';

const Footer = (): ReactElement => {
    // const { isAuth } = useSelector(getAuth);

    return (
        <>
            <footer className={css.footer}>
                <div className={css.container}>
                    <div className={css.inner}>
                        <Nav />
                        {/* {isAuth ? <Profile /> : <Login />} */}
                        <p className={css.text}>© 2020 Ihor Mykhailychenko</p>
                    </div>

                    <div className={css.logo} />
                </div>
            </footer>
        </>
    );
};

export default Footer;
