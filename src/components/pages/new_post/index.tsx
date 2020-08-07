import React from 'react';
import Socials from './Socials';
import Title from './Title';
import Desc from './Desc';
import Date from './Date';
import Banner from './Banner';
import Content from './Content';
import ScrollTop from '../../scroll_top';
import styles from './index.module.css';

export default () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Socials />

            <Date />

            <Title />

            <Banner />

            <Desc />

            <Content />

            <Socials />

            <ScrollTop />
        </div>
    </div>
);
