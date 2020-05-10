import React from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
// import FormLogin from '../../components/aside/aside-form/FormLogin';
import Profile from '../../components/aside/aside-profile/Profile';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import Posts from '../../components/posts/Posts';
import LoadMore from '../../components/load-more/LoadMore';

import styles from './Home.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const Home: React.FC<Props> = () => (
  <main className={main}>
    <Aside>
      {/* <FormLogin /> */} <Profile />
    </Aside>

    <div className={styles.content}>
      <Posts />
      <LoadMore />
    </div>

    <ScrollTop />
  </main>
);

export default Home;
