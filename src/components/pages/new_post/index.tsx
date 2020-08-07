import React from 'react';
import Title from './Title';
import Desc from './Desc';
import Banner from './Banner';
import styles from './index.module.css';

export default () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Banner />
            <Title />
            <Desc />
        </div>
    </div>
);
