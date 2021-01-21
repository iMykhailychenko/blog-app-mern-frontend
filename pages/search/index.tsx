import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import routes from '../../assets/routes';
import SearchForm from '../../components/Common/Forms/Search';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
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
    const history = useRouter();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [isPopular, setIsPopular] = useState(true);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    const handleSubmit = (): void => {
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: history.query.page || 1, limit: config.postPerPage, q: search || null },
        });

        setIsPopular(false);
        // to prevent page update
        window.history.replaceState(
            {},
            '',
            routes.search +
                '?' +
                queryString.stringify({
                    page: history.query.page || 1,
                    q: search || undefined,
                }),
        );
    };

    const handleReset = (): void => {
        setSearch('');
        setIsPopular(true);
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage },
        });
        window.history.replaceState(
            {},
            '',
            routes.search +
                '?' +
                queryString.stringify({
                    page: 1,
                }),
        );
    };

    return (
        <>
            <Meta title="Blog app | Search posts" />
            <SearchForm value={search} onReset={handleReset} onChange={setSearch} onSubmit={handleSubmit} />
            <div className={css.content}>
                <h2 className={css.title}>{isPopular ? 'Popular posts:' : 'Search result:'}</h2>
                {posts?.data?.posts?.length ? (
                    <Posts content={posts.data?.posts} wide={!auth?.token && mobile} />
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
