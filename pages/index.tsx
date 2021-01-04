import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { END } from 'redux-saga';

import config from '../assets/config';
import FormLogin from '../components/Common/Forms/Login';
import PostsLoader from '../components/Common/Loader/PostsLoader';
import LoadMore from '../components/Common/LoadMore';
import Posts from '../components/Common/Posts';
import Aside from '../components/Layout/Aside';
import { IPostList, IState, IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';
import css from './index.module.css';

const Home = (): ReactElement => {
    const isMobile = useMediaQuery({
        query: '(min-width: 900px)',
    });

    const posts = useSelector<IState, IPostList>(state => state.posts.list);
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return (
        <main className={clsx(css.main, 'container')}>
            {!token && isMobile && (
                <Aside>
                    <FormLogin />
                </Aside>
            )}

            <div className={clsx(css.content, !!token && css.auth)}>
                <h2 className={css.title}>Popular posts</h2>
                {posts.loading ? <PostsLoader /> : <Posts content={posts.data?.posts} />}
                <LoadMore />
            </div>
        </main>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        store.dispatch({
            type: types.GET_POSTS_START,
            payload: { page: ctx.query?.page || 1, limit: config.postPerPage },
        });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default Home;
