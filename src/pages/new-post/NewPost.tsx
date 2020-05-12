import React, { FormEvent } from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
import Profile from '../../components/aside/aside-profile/Profile';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import MainTitleInput from './MainTitleInput/MainTitleInput';
import ShortDesc from './ShortDesc/ShortDesc';
import MainImg from './MainImg/MainImg';
import ContentEditor from './ContentEditor/ContentEditor';
import Hashtag from './Hashtag/Hashtag';

// styles
import styles from './NewPost.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
};

const NewPost: React.FC<Props> = () => (
  <main className={main}>
    <Aside>
      <Profile />
    </Aside>

    <div className={styles.content}>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <MainTitleInput />
        <ShortDesc />
        <MainImg />
        <ContentEditor />
        <Hashtag />
      </form>
    </div>

    <ScrollTop />
  </main>
);

export default NewPost;
