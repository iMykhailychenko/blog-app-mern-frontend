import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../assets/config';
import useAuth from '../components/../hooks/auth.hook';
import FormLogin from '../components/Common/Forms/Login';
import PostsLoader from '../components/Common/Loader/PostsLoader';
import LoadMore from '../components/Common/LoadMore';
import Meta from '../components/Common/Meta';
import Posts from '../components/Common/Posts';
import Aside from '../components/Layout/Aside';
import useMedia from '../hooks/media.hook';
import { IPostList, IState, IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';
import css from './index.module.css';

const Home = (): ReactElement => {
    const auth = useAuth();
    const dispatch = useDispatch();
    const mobile = useMedia(900);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_POSTS_START, payload: { page, limit: config.postPerPage } });
    };

    return (
        <>
            <Meta />
            <main className={clsx(css.main, 'container')}>
                {!auth?.token && mobile && (
                    <Aside>
                        <FormLogin />
                    </Aside>
                )}

                <div className={clsx(css.content, !!auth?.token && css.auth)}>
                    <h2 className={css.title}>Popular posts</h2>
                    <Posts content={posts.data?.posts} wide={!auth?.token && mobile} />
                    {posts.data?.posts?.length < posts.data?.total ? (
                        <>
                            <PostsLoader wide />
                            <LoadMore onSubmit={handleMore} loading={posts.loading} />
                        </>
                    ) : null}
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        store.dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage },
        });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default Home;
