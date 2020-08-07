import React from 'react';
import Socials from './Socials';
import Title from './Title';
import Tags from './Tags';
import Desc from './Desc';
import Date from './Date';
import Banner from './Banner';
import Content from './Content';
import ScrollTop from '../../scroll_top';
import styles from './index.module.css';

export default () => {
    const left: string | undefined =
        window.innerWidth < 1380 ? '1.8rem' : undefined;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Socials />

                <Date />

                <Title />

                <Tags />

                <Banner />

                <Desc />

                <Content />

                <Socials />

                <ScrollTop left={left} />
            </div>
        </div>
    );
};
