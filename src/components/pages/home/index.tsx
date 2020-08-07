import React from 'react';
import clsx from 'clsx';
import Aside from '../../aside';
// import FormLogin from '../../components/aside/aside-form/FormLogin';
import Profile from '../../aside/aside_profile';
import ScrollTop from '../../scroll_top';
import Posts from './Posts';
import LoadMore from '../../load_more';
import styles from './index.module.css';

const main = clsx(styles.main, 'container');

export default () => (
    <main className={main}>
        <Aside>
            {/* <FormLogin /> */} <Profile />
        </Aside>

        <div className={styles.content}>
            <Posts />
            <LoadMore />
        </div>

        <ScrollTop />
    </main>
);
