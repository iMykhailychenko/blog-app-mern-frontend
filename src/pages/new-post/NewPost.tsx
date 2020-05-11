import React from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import InputTitle from './InputTitle/InputTitle';
import MainImg from './MainImg/MainImg';
import AddContent from './AddContent/AddContent';

// styles
import styles from './NewPost.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const NewPost: React.FC<Props> = () => (
  <main className={main}>
    <Aside></Aside>

    <div className={styles.content}>
      <form action="" method="POST">
        <InputTitle />
        <MainImg />
        <AddContent />
      </form>
    </div>

    <ScrollTop />
  </main>
);

export default NewPost;
