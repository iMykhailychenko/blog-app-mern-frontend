import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import AuthRedirect from '../../components/Common/Auth/AuthRedirect';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Meta from '../../components/Common/Meta';
import Posts from '../../components/Common/Posts';
import serverRedirect from '../../components/HOC/ServerRedirect';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Pages/Users/AsideProfile';
import { IPostList, IState, IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from '../settings/index.module.css';

const Queue = (): ReactElement => {
    const dispatch = useDispatch();
    const queue = useSelector<IState, IPostList>(state => state.queue);

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_QUEUE_START, payload: { page, limit: config.postPerPage } });
    };

    return (
        <>
            <AuthRedirect />
            <Meta title="Blog app | Queue" />

            <main className={clsx(css.main, 'container')}>
                <Aside>
                    <AsideProfile />
                </Aside>

                <div className={css.content}>
                    <h2 className={css.title}>Queue:</h2>
                    <Posts content={queue.data?.posts} />
                    {queue.data?.posts?.length < queue.data?.total ? (
                        <>
                            <PostsLoader />
                            <LoadMore onSubmit={handleMore} loading={queue.loading} />
                        </>
                    ) : null}
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    serverRedirect(
        async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
            if (!ctx.query?.userId) return null;
            store.dispatch({
                type: types.GET_PROFILE_START,
                payload: ctx.query.userId,
            });
            store.dispatch({ type: types.GET_QUEUE_START, payload: { page: 1, limit: config.postPerPage } });
            store.dispatch(END);
            await store.sagaTask.toPromise();
        },
    ),
);

export default Queue;
