import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Aside from '../../aside';
import FormLogin from '../../aside/aside_form';
import ScrollTop from '../../scroll_top_btn';
import Posts from '../../posts';
import { getAuth } from '../../../redux/selectors';
import LoadMore from '../../load_more';
import styles from './index.module.css';

import posts from '../../../assets/posts';

export default () => {
    const { isAuth } = useSelector(getAuth);

    return (
        <main className={clsx(styles.main, 'container')}>
            {!isAuth && (
                <Aside>
                    <FormLogin />
                </Aside>
            )}

            <div className={clsx(styles.content, isAuth && styles.auth)}>
                <h2 className={styles.title}>Popular posts</h2>
                <Posts content={posts} />
                <LoadMore />
            </div>

            <ScrollTop />
        </main>
    );
};
