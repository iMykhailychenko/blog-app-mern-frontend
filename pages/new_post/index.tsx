import React, { ReactElement } from 'react';

import ScrollTop from '../../components/Common/ScrollTopBtn';
import Banner from '../../components/Pages/NewPost/Banner';
import DateText from '../../components/Pages/NewPost/DateText';
import Desc from '../../components/Pages/NewPost/Desc';
import Socials from '../../components/Pages/NewPost/Socials';
import Tags from '../../components/Pages/NewPost/Tags';
import Title from '../../components/Pages/NewPost/Title';
import css from './index.module.css';

const NewPost = (): ReactElement => (
  <div className={css.container}>
    <div className={css.content}>
      <Socials />
      <DateText />
      <Title />
      <Tags />
      <Banner />
      <Desc />
      {/* <Content /> */}
      <Socials />
      <ScrollTop />
    </div>
  </div>
);

export default NewPost;
