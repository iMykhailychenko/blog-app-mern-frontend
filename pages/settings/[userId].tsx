import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import { serverRedirect } from '../../assets/helpers';
import ChangePass from '../../components/Common/Forms/Settings/ChangePass';
import UserBio from '../../components/Common/Forms/Settings/UserBio';
import UserInfo from '../../components/Common/Forms/Settings/UserInfo';
import Meta from '../../components/Common/Meta';
import AuthRedirect from '../../components/HOC/Auth/AuthRedirect';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Pages/Settings/AsideProfile';
import { IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const Settings = (): ReactElement => {
    const dispatch = useDispatch();
    const profile = useSelector<IState, IUser | null>(state => state.profile);

    // MEDIA
    const handleUserBanner = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.UPDATE_USER_BANNER_START, payload: event?.target?.files?.[0] || null });
    };
    const handleDeleteBanner = (): void => {
        dispatch({ type: types.UPDATE_USER_BANNER_START, payload: null });
    };

    return (
        <>
            <AuthRedirect />
            <Meta
                title={`Blog app | ${profile?.name} ${profile?.surname}`}
                description="Do not want to register but interesting? You are lucky, I signed up for you"
                keywords="login auth blog"
            />

            {profile && (
                <main className={clsx(css.main, 'container')}>
                    <Aside>
                        <AsideProfile />
                    </Aside>

                    <div className={css.content}>
                        <div className={clsx(css.banner, !profile.banner && css.empty)}>
                            {profile.banner && (
                                <img className={css.banner} src={config.prod.back + profile.banner} alt="" />
                            )}
                            <input type="file" onChange={handleUserBanner} className={css.file} />
                            <div className={css.add}>
                                <div className="add" />
                                <p>Edit page banner</p>
                            </div>
                        </div>

                        {profile.banner ? (
                            <button className={css.delete} onClick={handleDeleteBanner} type="button">
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <span>Delete banner</span>
                            </button>
                        ) : null}

                        <h2 className={css.title}>General account data</h2>
                        <hr />
                        {profile && <UserInfo profile={profile} />}

                        <h2 className={css.title}>User profile</h2>
                        <hr />
                        {profile && <UserBio profile={profile} />}

                        <h2 className={css.title}>Change password</h2>
                        <hr />
                        <ChangePass />
                    </div>
                </main>
            )}
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        const token = serverRedirect((ctx as unknown) as GetServerSidePropsContext);
        if (!token) return;

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

export default Settings;
