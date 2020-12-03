import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Aside from '../../Common/Aside';
import AsideProfile from '../../Common/Aside/AsideProfile';
import ScrollTop from '../../Common/ScrollTopBtn';
import Posts from '../../Common/Posts';
import LoadMore from '../../Common/LoadMore';
import styles from './index.module.css';

const Profile = (): ReactElement => (
    <main className={clsx(styles.main, 'container')}>
        <Aside>
            <AsideProfile />
        </Aside>

        <div className={styles.content}>
            {/* <h2 className={styles.title}>{`${user.name}'s posts:`}</h2> */}
            {/* <p className={styles.text}>{'This is all the posts created by ' + user.name}</p> */}
            {/* <Posts content={posts} /> */}
            <LoadMore />
        </div>

        <ScrollTop />
    </main>
);

export default Profile;
