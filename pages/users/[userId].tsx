import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import routes from '../../assets/routes';
import useAuth from '../../components/../hooks/auth.hook';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Meta from '../../components/Common/Meta';
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
    const auth = useAuth();

    const profile = useSelector<IState, IUser>(state => state.profile);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    const handleFollowersModal = (): void => {
        modal.open(<FollowersModal type="followers" />);
    };

    const handleFollowingModal = (): void => {
        modal.open(<FollowersModal type="following" />);
    };

    return (
        <>
            <Meta
                title={`${profile?.name || ''} ${profile?.surname || ''}`}
                description={profile?.desc}
                keywords={`${profile?.name || ''} ${profile?.surname || ''} ${profile?.nick || ''}`}
                icon={profile?.avatar}
            />
            {profile && (
                <main className={clsx(css.main, 'container')}>
                    <Aside>
                        <AsideProfile />
                    </Aside>

                    <div className={css.content}>
                        {profile.banner && <img className={css.banner} src={config.img + profile.banner} alt="" />}

                        <div className={css.flex}>
                            <h2 className={css.title}>Profile info</h2>

                            {profile?._id === auth?.user?._id && (
                                <Link href={routes.settings[0](profile?._id)}>
                                    <a className={css.link}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit your profile
                                    </a>
                                </Link>
                            )}
                        </div>

                        <div className={css.flex}>
                            <div className={css.inner}>
                                <h3 className={css.subtitle}>Followers:</h3>

                                <div className={css.profiles}>
                                    {profile?.followers?.length ? (
                                        <>
                                            {profile?.followers?.map(followers => (
                                                <ProfileSmall key={followers._id} user={followers} />
                                            ))}
                                            <button className={css.btn} type="button" onClick={handleFollowersModal}>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </>
                                    ) : (
                                        <p className={css.empty}>
                                            <span role="img" aria-label="img">
                                                🙈
                                            </span>{' '}
                                            <span>There is no followers</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={css.inner}>
                                <h3 className={css.subtitle}>{`${profile?.name}'s follows:`}</h3>

                                <div className={css.profiles}>
                                    {profile?.following?.length ? (
                                        <>
                                            {profile?.following?.map(following => (
                                                <ProfileSmall key={following._id} user={following} />
                                            ))}
                                            <button className={css.btn} type="button" onClick={handleFollowingModal}>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </>
                                    ) : (
                                        <p className={css.empty}>
                                            <span role="img" aria-label="img">
                                                🙈
                                            </span>{' '}
                                            <span>There is no following profile here</span>
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
                                        <span>There is empty profile description</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {posts.data?.posts?.length ? (
                            <>
                                <h2 className={css.postTitle}>{`${profile?.name} ${profile?.surname}'s posts`}</h2>
                                {posts.loading ? <PostsLoader /> : <Posts content={posts.data?.posts} author wide />}
                                <LoadMore />
                            </>
                        ) : (
                            <h2 className={css.empty}>{`${profile?.name} ${profile?.surname} dont have posts yet`}</h2>
                        )}
                    </div>
                </main>
            )}
        </>
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
