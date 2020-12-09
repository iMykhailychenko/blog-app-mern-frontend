import clsx from 'clsx';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import Aside from '../components/Common/Aside';
import FormLogin from '../components/Common/Forms/Login';
import PostsLoader from '../components/Common/Loader/PostsLoader';
import LoadMore from '../components/Common/LoadMore';
import Posts from '../components/Common/Posts';
import ScrollTop from '../components/Common/ScrollTopBtn';
import { IPostList, IState } from '../interfaces';
import types from '../redux/types';
import css from './index.module.css';

const POST_PER_PAGE = 20;

const Home = (): ReactElement => {
    const dispatch = useDispatch();
    const posts = useSelector<IState, IPostList>(state => state.posts.list);
    const token = useSelector<IState, string | null>(state => state.auth.token);

    useEffect(() => {
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: POST_PER_PAGE },
        });
    }, [dispatch]);

    return (
        <main className={clsx(css.main, 'container')}>
            {!token && (
                <Aside>
                    <FormLogin />
                </Aside>
            )}

            <div className={clsx(css.content, !!token && css.auth)}>
                <h2 className={css.title}>Popular posts</h2>
                {posts.loading ? (
                    <PostsLoader />
                ) : (
                    <>
                        <Posts content={posts.data?.posts} />
                        <LoadMore />
                    </>
                )}
            </div>

            <ScrollTop />
        </main>
    );
};

export default Home;
