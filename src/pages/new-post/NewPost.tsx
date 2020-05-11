import React from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import Title from './components/Title';
import MainImg from './components/MainImg';
import AddContentBtn from './components/AddContentBtn';

import styles from './NewPost.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const NewPost: React.FC<Props> = () => (
  <main className={main}>
    <Aside></Aside>

    <div className={styles.content}>
      <form action="" method="POST">
        <Title />

        <MainImg />

        <AddContentBtn />
      </form>
    </div>

    <ScrollTop />
  </main>
);

export default NewPost;
