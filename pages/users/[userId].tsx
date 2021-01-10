import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import { modal } from '../../components/Common/Modal';
import Posts from '../../components/Common/Posts';
import ProfileSmall from '../../components/Common/Profile/ProfileSmall';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Layout/Aside/AsideProfile';
import FollowersModal from '../../components/Pages/Users/FollowersModal';
import { IPostList, IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const UserProfile = (): ReactElement => {
    const posts = useSelector<IState, IPostList>(state => state.posts.list);
    const profile = useSelector<IState, IUser>(state => state.profile);

    const handleModal = (): void => {
        modal.open(<FollowersModal />);
    };

    return (
        profile && (
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

                            <div className={css.profiles}>
                                {profile?.followers?.length ? (
                                    <>
                                        {profile?.followers?.map(followers => (
                                            <ProfileSmall key={followers._id} user={followers} />
                                        ))}
                                        <button className={css.btn} type="button" onClick={handleModal}>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </>
                                ) : (
                                    <p className={css.empty}>
                                        <span role="img" aria-label="img">
                                            🙈
                                        </span>{' '}
                                        There is no followers
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={css.inner}>
                            <h3 className={css.subtitle}>{`${profile?.name} follows:`}</h3>

                            <div className={css.profiles}>
                                {profile?.following?.length ? (
                                    <>
                                        {profile?.following?.map(following => (
                                            <ProfileSmall key={following._id} user={following} />
                                        ))}
                                        <button className={css.btn} type="button" onClick={handleModal}>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </>
                                ) : (
                                    <p className={css.empty}>
                                        <span role="img" aria-label="img">
                                            🙈
                                        </span>{' '}
                                        There is no following profile here
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={css.flex}>
                        <div className={css.inner}>
                            <h3 className={css.subtitle}>Short description:</h3>
                            {profile?.desc ? (
                                <p>{profile?.desc}</p>
                            ) : (
                                <p className={css.empty}>
                                    <span role="img" aria-label="img">
                                        🙈
                                    </span>{' '}
                                    There is empty profile description
                                </p>
                            )}
                        </div>
                    </div>

                    <h2 className={css.title}>{`${profile?.name} ${profile?.surname}'s posts`}</h2>
                    {posts.loading ? <PostsLoader /> : <Posts content={posts.data?.posts} author wide />}
                    <LoadMore />
                </div>
            </main>
        )
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
