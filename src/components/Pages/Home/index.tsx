// import { useSelector } from 'react-redux';
import clsx from 'clsx';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { types } from '../../../redux/post/types';
// import Aside from '../../Common/Aside';
// import FormLogin from '../../Common/Aside/AsideForm';
import ScrollTop from '../../Common/ScrollTopBtn';
// import Posts from '../../Common/Posts';
// import LoadMore from '../../Common/LoadMore';
// import { getAuth } from '../../../redux/selectors';
import styles from './index.module.css';

const Home = (): ReactElement => {
    const dispatch = useDispatch();
    console.log('object');

    const page = 1;
    const limit = 15;

    useEffect(() => {
        dispatch({ type: types.GET_POSTS_START, payload: { page, limit } });
    }, [dispatch]);

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
