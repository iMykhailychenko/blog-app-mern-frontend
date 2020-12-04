import React, { ReactElement } from 'react';

import ScrollTop from '../../Common/ScrollTopBtn';
import Banner from './Banner';
import Content from './Content';
import DateText from './DateText';
import Desc from './Desc';
import styles from './index.module.css';
import Socials from './Socials';
import Tags from './Tags';
import Title from './Title';

const NewPost = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Socials />
            <DateText />
            <Title />
            <Tags />
            <Banner />
            <Desc />
            <Content />
            <Socials />
            <ScrollTop />
        </div>
    </div>
);

export default NewPost;
