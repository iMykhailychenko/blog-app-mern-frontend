import { GetServerSidePropsContext } from 'next';
import queryString from 'query-string';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import routes from '../../assets/routes';
import SearchForm from '../../components/Common/Forms/Search';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Meta from '../../components/Common/Meta';
import Posts from '../../components/Common/Posts';
import useAuth from '../../hooks/auth.hook';
import useMedia from '../../hooks/media.hook';
import { IPostList, IState, IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const Search = (): ReactElement => {
    const auth = useAuth();
    const mobile = useMedia(900);
    const dispatch = useDispatch();

    const [search, setSearch] = useState<string>('');
    const [isPopular, setIsPopular] = useState<boolean>(true);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    const handleSubmit = (): void => {
        dispatch({ type: types.RESET_POSTS });
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage, q: search || null },
        });

        if (search.trim()) {
            setIsPopular(false);
            window.history.replaceState({}, '', routes.search + '?' + queryString.stringify({ q: search }));
        }

        if (!search.trim()) {
            setIsPopular(true);
            window.history.replaceState({}, '', routes.search);
        }
    };

    const handleReset = (): void => {
        setSearch('');
        setIsPopular(true);
        dispatch({ type: types.RESET_POSTS });
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage },
        });
        window.history.replaceState({}, '', routes.search);
    };

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_POSTS_START, payload: { page, limit: config.postPerPage, q: search || null } });
    };

    return (
        <>
            <Meta title="Blog app | Search posts" />
            <SearchForm value={search} onReset={handleReset} onChange={setSearch} onSubmit={handleSubmit} />
            <div className={css.content}>
                <p className={css.total}>total results: {posts?.data?.total}</p>
                <h2 className={css.title}>{isPopular ? 'Popular posts:' : 'Search result:'}</h2>
                {posts?.data?.posts?.length ? (
                    <>
                        <Posts content={posts.data?.posts} wide={!auth?.token && mobile} />
                        {posts.data?.posts?.length < posts.data?.total ? (
                            <>
                                <PostsLoader wide />
                                <LoadMore onSubmit={handleMore} loading={posts.loading} />
                            </>
                        ) : null}
                    </>
                ) : (
                    <div className={css.empty}>
                        <img src="/img/emoji/exploding.png" alt="" />
                        <p>{`Yur search query break our mind. We didnt find something related to "${search}"`}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        store.dispatch({
            type: types.GET_POSTS_START,
            payload: { page: ctx.query?.page || 1, limit: config.postPerPage, q: ctx.query?.q || null },
        });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default Search;
