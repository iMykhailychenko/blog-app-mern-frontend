import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Posts from '../../components/Common/Posts';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Layout/Aside/AsideProfile';
import { IPostList, IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const UserProfile = (): ReactElement => {
    const posts = useSelector<IState, IPostList>(state => state.posts.list);
    const profile = useSelector<IState, IUser>(state => state.profile);

    return (
        <main className={clsx(css.main, 'container')}>
            <Aside>
                <AsideProfile />
            </Aside>

            <div className={css.content}>
                <h2 className={css.title}>{`${profile?.name} ${profile?.surname}'s posts`}</h2>
                {posts.loading ? <PostsLoader /> : <Posts content={posts.data?.posts} author wide />}
                <LoadMore />
            </div>
        </main>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        if (!ctx.query?.userId) return null;
        store.dispatch({
            type: types.GET_PROFILE_START,
            payload: ctx.query.userId,
        });
        store.dispatch({
            type: types.GET_USER_POSTS_START,
            payload: ctx.query.userId,
        });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default UserProfile;
