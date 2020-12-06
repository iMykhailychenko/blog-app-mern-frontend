import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import Aside from '../components/Common/Aside';
import FormLogin from '../components/Common/Forms/Login';
import LoadMore from '../components/Common/LoadMore';
import Posts from '../components/Common/Posts';
import ScrollTop from '../components/Common/ScrollTopBtn';
import { IPostList, IState, IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';
import css from './index.module.css';

const POST_PER_PAGE = 20;

const Home = (): ReactElement => {
  const posts = useSelector<IState, IPostList>(state => state.posts.list);
  const token = useSelector<IState, string | null>(state => state.auth.token);

  return (
    <main className={clsx(css.main, 'container')}>
      {!token && (
        <Aside>
          <FormLogin />
        </Aside>
      )}

      <div className={clsx(css.content, !!token && css.auth)}>
        <h2 className={css.title}>Popular posts</h2>
        <Posts content={posts.data?.posts} />
        <LoadMore />
      </div>

      <ScrollTop />
    </main>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }: { store: IStore }): Promise<void> => {
    store.dispatch({
      type: types.GET_POSTS_START,
      payload: { page: 1, limit: POST_PER_PAGE },
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  },
);

export default Home;
