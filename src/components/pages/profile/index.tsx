import React from 'react';
import clsx from 'clsx';
import Aside from '../../aside';
import Profile from '../../aside/aside_profile';
import ScrollTop from '../../scroll_top_btn';
import Posts from '../../posts';
import LoadMore from '../../load_more';
import styles from './index.module.css';

import posts from '../../../assets/posts';
import user from '../../../assets/user';

export default () => (
    <main className={clsx(styles.main, 'container')}>
        <Aside>
            <Profile />
        </Aside>

        <div className={styles.content}>
            <h2 className={styles.title}>{`${user.name}'s posts:`}</h2>
            <p className={styles.text}>
                {'This is all the posts created by ' + user.name}
            </p>
            <Posts content={posts} />
            <LoadMore />
        </div>

        <ScrollTop />
    </main>
);
