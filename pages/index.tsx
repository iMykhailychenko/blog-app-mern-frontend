import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../assets/config';
import useAuth from '../components/Common/Auth/AuthContext';
import FormLogin from '../components/Common/Forms/Login';
import PostsLoader from '../components/Common/Loader/PostsLoader';
import LoadMore from '../components/Common/LoadMore';
import Posts from '../components/Common/Posts';
import Aside from '../components/Layout/Aside';
import useMedia from '../hooks/media.hook';
import { IPostList, IState, IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';
import css from './index.module.css';

const Home = (): ReactElement => {
    const mobile = useMedia(900);
    const auth = useAuth();

    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    return (
        <main className={clsx(css.main, 'container')}>
            {!auth?.token && mobile && (
                <Aside>
                    <FormLogin />
                </Aside>
            )}

            <div className={clsx(css.content, !!auth?.token && css.auth)}>
                <h2 className={css.title}>Popular posts</h2>
                {posts.loading ? (
                    <PostsLoader wide />
                ) : (
                    <Posts content={posts.data?.posts} wide={!auth?.token && mobile} />
                )}
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
