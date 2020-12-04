// import { useSelector } from 'react-redux';
import clsx from 'clsx';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { types } from '../../../redux/posts/types';
import { getPosts } from '../../../redux/selectors';
import LoadMore from '../../Common/LoadMore';
// import Posts from '../../Common/Posts';
// import Aside from '../../Common/Aside';
// import FormLogin from '../../Common/Aside/AsideForm';
import ScrollTop from '../../Common/ScrollTopBtn';
// import { getAuth } from '../../../redux/selectors';
import styles from './index.module.css';

const POST_PER_PAGE = 15;

const Home = (): ReactElement => {
    const dispatch = useDispatch();
    const posts = useSelector(getPosts);

    const [page, setPage] = useState<number>(1);
    console.log(setPage, posts);

    useEffect(() => {
        dispatch({ type: types.GET_POSTS_START, payload: { page, limit: POST_PER_PAGE } });
    }, [dispatch, page]);

    return (
        <main className={clsx(styles.main, 'container')}>
            {/* {!isAuth && (
                <Aside>
                    <FormLogin />
                </Aside>
            )} */}

            <div className={clsx(styles.content, styles.auth)}>
                <h2 className={styles.title}>Popular posts</h2>
                {/* <Posts content={posts} /> */}
                <LoadMore />
            </div>

            <ScrollTop />
        </main>
    );
};

export default Home;
