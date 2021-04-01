import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../assets/config';
import routes from '../assets/routes';
import FormLogin from '../components/Common/Forms/Login';
import PostsLoader from '../components/Common/Loader/PostsLoader';
import QueueLoader from '../components/Common/Loader/QueueLoader';
import LoadMore from '../components/Common/LoadMore';
import Meta from '../components/Common/Meta';
import notifications from '../components/Common/Notifications';
import Posts from '../components/Common/Posts';
import Aside from '../components/Layout/Aside';
import TrendingPost from '../components/Pages/Home/TrendingPost';
import useMedia from '../hooks/media.hook';
import { IAuth, IPostList, IState, IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';
import css from './index.module.css';

const QUEUE_LENGTH = 60;

const Home = (): ReactElement => {
    const history = useRouter();
    const dispatch = useDispatch();
    const mobile = useMedia(900);

    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);
    const tags = useSelector<IState, string[]>(state => state.trending.tags);
    const queue = useSelector<IState, IPostList>(state => state.queue);

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_POSTS_START, payload: { page, limit: config.postPerPage } });
    };

    useEffect(() => {
        if (auth?.token) {
            dispatch({ type: types.GET_POSTS_START, payload: { page: 1, limit: config.queuePerPage } });
            dispatch({ type: types.GET_QUEUE_START, payload: { page: 1, limit: config.queuePerPage } });
        }
    }, [auth?.token]);

    useEffect(() => {
        if (history.query?.token && history.query?.user && !auth?.token) {
            notifications('loading');
            axios.defaults.headers.common.Authorization = `Bearer ${history.query?.token}`;

            dispatch({ type: types.LOGIN_SUCCESS, payload: { token: history.query?.token, user: null } });
            dispatch({ type: types.GET_USER_INFO_START, payload: history.query?.user });
            history.replace(routes.home, undefined, { shallow: true });
        }

        if (history.query.error) notifications('error', history.query.error as string);
    }, [history.query, auth]);

    return (
        <>
            <Meta />
            <main className={clsx(css.main, 'container')}>
                <Aside>
                    {!auth?.token && mobile && <FormLogin />}

                    <h3 className={css.subtitle}>Trending:</h3>
                    <div className={css.tags}>
                        {tags.map(tag => (
                            <Link href={routes.posts.tag[0](tag)} key={tag}>
                                <a className={css.tag}>{`#${tag}`}</a>
                            </Link>
                        ))}
                    </div>

                    {auth?.token ? (
                        <>
                            <h3 className={css.subtitle}>Queue:</h3>
                            <QueueLoader loading={queue.loading} isEmpty={!queue?.data?.posts?.length}>
                                <>
                                    {queue?.data?.posts?.map(item => (
                                        <Link href={routes.posts.single[0](item._id)} key={item._id}>
                                            {mobile ? (
                                                <a className={css.queue}>
                                                    {item?.title?.length > QUEUE_LENGTH
                                                        ? item.title.slice(0, QUEUE_LENGTH) + '...'
                                                        : item?.title}
                                                </a>
                                            ) : (
                                                <a className={css.queue}>{item?.title}</a>
                                            )}
                                        </Link>
                                    ))}
                                    <Link href={routes.queue[0](auth?.user?._id || '')}>
                                        <a className={css.viewAll}>View all</a>
                                    </Link>
                                </>
                            </QueueLoader>
                        </>
                    ) : null}
                </Aside>

                <div className={css.content}>
                    <TrendingPost />

                    <h2 className={css.title}>Popular posts</h2>
                    {posts.data?.posts ? <Posts content={posts.data?.posts} /> : null}
                    <LoadMore
                        onSubmit={handleMore}
                        loading={posts.loading}
                        total={posts.data?.total}
                        style={{ marginTop: '4rem' }}
                    >
                        <PostsLoader />
                    </LoadMore>
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        ctx.store.dispatch({ type: types.GET_TRENDING_POST_START });
        ctx.store.dispatch({ type: types.GET_TRENDING_TAGS_START });
        ctx.store.dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage },
        });
        ctx.store.dispatch(END);
        await (ctx.store as IStore).sagaTask.toPromise();
    },
);

export default Home;
