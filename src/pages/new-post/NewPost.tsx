import React from 'react';
import clsx from 'clsx';

// components
import Aside from '../../components/aside/Aside';
import Profile from '../../components/aside/aside-profile/Profile';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import MainTitleInput from './MainTitleInput/MainTitleInputContainer';
import ShortDesc from './ShortDesc/ShortDescContainer';
import MainImg from './MainImg/MainImg';
import ContentEditor from './ContentEditor/ContentEditor';
import Hashtag from './Hashtag/HashtagContainer';


// styles
import styles from './NewPost.module.css';

const main = clsx(styles.main, 'container');

interface Props {}

const handleClick = () => {
  console.log('this');
};

const NewPost: React.FC<Props> = () => (
  <main className={main}>
    <Aside>
      <Profile addBtn={false} />
    </Aside>

    <div className={styles.content}>
      <MainTitleInput />

      <ShortDesc />

      <MainImg />

      <ContentEditor />

      <Hashtag />

      <button className="btn btn--info" type="button" onClick={handleClick}>
        Publcate
      </button>
    </div>

    <ScrollTop />
  </main>
);

export default NewPost;
