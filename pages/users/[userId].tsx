import { faKeyboard, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import { bioHTML, serverCookie } from '../../assets/helpers';
import routes from '../../assets/routes';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Meta from '../../components/Common/Meta';
import { modal } from '../../components/Common/Modal';
import Posts from '../../components/Common/Posts';
import ProfileSmall from '../../components/Common/Profile/ProfileSmall';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Pages/Users/AsideProfile';
import FollowersModal from '../../components/Pages/Users/FollowersModal';
import { IAuth, IPostList, IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const UserProfile = (): ReactElement => {
    const dispatch = useDispatch();

    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const profile = useSelector<IState, IUser | null>(state => state.profile);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    const handleFollowersModal = (): void => {
        modal.open(<FollowersModal type="followers" />);
    };

    const handleFollowingModal = (): void => {
        modal.open(<FollowersModal type="following" />);
    };

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_POSTS_START, payload: { page, limit: config.postPerPage } });
    };

    const bio = profile?.bio ? bioHTML(profile.bio) : 'There is empty profile description';

    return (
        <>
            <Meta
                title={`${profile?.name || ''} ${profile?.surname || ''}`}
                description={profile?.bio}
                keywords={`${profile?.name || ''} ${profile?.surname || ''} ${profile?.nick || ''}`}
                icon={profile?.avatar}
            />
            {profile && (
                <main className={clsx(css.main, 'container')}>
                    <Aside>
                        <AsideProfile />
                    </Aside>

                    <div className={css.content}>
                        {profile.banner && (
                            <img className={css.banner} src={config.prod.back + profile.banner} alt="" />
                        )}

                        <div className={css.titleFlex}>
                            <h2 className={css.title}>Profile info</h2>

                            {profile?._id === auth?.user?._id && (
                                <Link href={routes.settings[0](profile?._id)}>
                                    <a className={css.link}>
                                        <FontAwesomeIcon icon={faKeyboard} /> edit your profile
                                    </a>
                                </Link>
                            )}
                        </div>

                        <div className={css.flex}>
                            <div className={css.desc}>
                                <hr />
                                <h3 className={css.subtitle}>Short description:</h3>
                                {bio ? (
                                    <div className={css.bio} dangerouslySetInnerHTML={{ __html: bio }} />
                                ) : (
                                    <div className={css.empty}>{bio}</div>
                                )}
                            </div>
                        </div>

                        <hr />
                        <div className={css.flex}>
                            <div className={css.inner}>
                                <h3 className={css.subtitle}>followers:</h3>
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
                                        <p className={css.empty}>There is no followers</p>
                                    )}
                                </div>
                            </div>
                            <div className={css.inner}>
                                <h3 className={css.subtitle}>following:</h3>
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
                                        <p className={css.empty}>There is no following profile here</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {posts.data?.posts?.length ? (
                            <>
                                <div className={css.titleFlex}>
                                    <h2 className={css.title}>{`${profile?.name} ${profile?.surname}'s posts:`}</h2>

                                    {profile?._id === auth?.user?._id && (
                                        <Link href={routes.posts.new}>
                                            <a className={css.link}>
                                                <FontAwesomeIcon icon={faPlusSquare} /> write new post
                                            </a>
                                        </Link>
                                    )}
                                </div>
                                <hr />
                                <div className={css.margin} />
                                <Posts content={posts.data?.posts} author />
                                <LoadMore
                                    onSubmit={handleMore}
                                    loading={posts.loading}
                                    total={posts.data?.total}
                                    style={{ marginTop: '4rem' }}
                                >
                                    <PostsLoader />
                                </LoadMore>
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
    async (ctx): Promise<void> => {
        if (serverCookie((ctx as unknown) as GetServerSidePropsContext))
            ctx.store.dispatch({ type: types.GET_USER_INFO_START });

        ctx.store.dispatch({
            type: types.GET_PROFILE_START,
            payload: ctx.query.userId,
        });
        ctx.store.dispatch({
            type: types.GET_USER_POSTS_START,
            payload: ctx.query.userId,
        });
        ctx.store.dispatch(END);
        await (ctx.store as IStore).sagaTask.toPromise();
    },
);

export default UserProfile;
