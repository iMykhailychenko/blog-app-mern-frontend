import React, { FormEvent } from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import MainTitleInput from './MainTitleInput/MainTitleInput';
import MainImg from './MainImg/MainImg';
import ContentEditor from './ContentEditor/ContentEditor';

// styles
import styles from './NewPost.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
};

const NewPost: React.FC<Props> = () => (
  <main className={main}>
    <Aside></Aside>

    <div className={styles.content}>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <MainTitleInput />

        <MainImg />

        <ContentEditor />
      </form>
    </div>

    <ScrollTop />
  </main>
);

export default NewPost;
