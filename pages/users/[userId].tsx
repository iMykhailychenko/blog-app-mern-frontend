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
                <img
                    className={css.banner}
                    src="https://images.unsplash.com/photo-1610053012491-24cf866090c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2301&q=80"
                    alt=""
                />
                <h2 className={css.title}>Profile info</h2>
                <div className={css.flex}>
                    <div className={css.inner}>
                        <h3 className={css.subtitle}>Followers:</h3>
                    </div>
                    <div className={css.inner}>
                        <h3 className={css.subtitle}>Following:</h3>
                    </div>
                </div>
                <div className={css.flex}>
                    <div className={css.inner}>
                        <h3 className={css.subtitle}>Short description:</h3>
                        <p>
                            Для того чтобы начать непосредственное предоставление файлов, необходимо передать имя
                            каталога, в котором находятся статические ресурсы, в функцию промежуточной обработки
                            express.static. Например, воспользуйтесь приведенным ниже кодом для предоставления
                            изображений, файлов CSS и JavaScript, расположенных в каталоге public
                        </p>
                    </div>
                </div>

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
