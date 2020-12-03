import React, { ReactElement } from 'react';
import Socials from './Socials';
import Title from './Title';
import Tags from './Tags';
import Desc from './Desc';
import DateText from './DateText';
import Banner from './Banner';
import Content from './Content';
import ScrollTop from '../../Common/ScrollTopBtn';
import styles from './index.module.css';

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
