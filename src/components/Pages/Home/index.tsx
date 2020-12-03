import React, { ReactElement } from 'react';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';

// import Aside from '../../Common/Aside';
// import FormLogin from '../../Common/Aside/AsideForm';
import ScrollTop from '../../Common/ScrollTopBtn';
// import Posts from '../../Common/Posts';
// import LoadMore from '../../Common/LoadMore';

// import { getAuth } from '../../../redux/selectors';
import styles from './index.module.css';

const Home = (): ReactElement => {
    // const { isAuth } = useSelector(getAuth);

    return (
        <main className={clsx(styles.main, 'container')}>
            {/* {!isAuth && (
                <Aside>
                    <FormLogin />
                </Aside>
            )} */}

            {/* <div className={clsx(styles.content, isAuth && styles.auth)}>
                <h2 className={styles.title}>Popular posts</h2>
                <Posts content={posts} />
                <LoadMore />
            </div> */}

            <ScrollTop />
        </main>
    );
};

export default Home;
