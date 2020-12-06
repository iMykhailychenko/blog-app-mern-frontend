import React, { ReactElement } from 'react';

// import { useSelector } from 'react-redux';
import styles from './index.module.css';
// import Login from './Login';
import Nav from './Nav';
// import Profile from './Profile';

const Footer = (): ReactElement => {
  // const { isAuth } = useSelector(getAuth);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Nav />
            {/* {isAuth ? <Profile /> : <Login />} */}
            <p className={styles.text}>© 2020 Ihor Mykhailychenko</p>
          </div>

          <div className={styles.logo}></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
