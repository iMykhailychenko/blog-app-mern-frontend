import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { END } from 'redux-saga';

import config from '../../assets/config';
import AuthRedirect from '../../components/Common/Auth/AuthRedirect';
import Meta from '../../components/Common/Meta';
import serverRedirect from '../../components/HOC/ServerRedirect';
import Aside from '../../components/Layout/Aside';
import AsideProfile from '../../components/Pages/Settings/AsideProfile';
import { IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const Settings = (): ReactElement => {
    const dispatch = useDispatch();
    const profile = useSelector<IState, IUser>(state => state.profile);
    const [bio, setBio] = useState<string | null>(profile?.bio || null);

    // MEDIA
    const handleUserBanner = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.UPDATE_USER_BANNER_START, payload: event?.target?.files?.[0] || null });
    };
    const handleDeleteBanner = (): void => {
        dispatch({ type: types.UPDATE_USER_BANNER_START, payload: null });
    };

    // BIO
    const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setBio(event.target.value);
    };
    const handleSubmitBio = (): void => {
        dispatch({ type: types.UPDATE_USER_BIO_START, payload: bio });
    };

    return (
        <>
            <AuthRedirect />
            <Meta
                title="Blog app | Demo account"
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
                            {profile.banner && <img className={css.banner} src={config.img + profile.banner} alt="" />}
                            <input type="file" onChange={handleUserBanner} className={css.file} />
                            <div className={css.add}>
                                <div className="add" />
                                <p>Edit page banner</p>
                            </div>
                        </div>

                        {profile.banner ? (
                            <button className={css.delete} onClick={handleDeleteBanner} type="button">
                                <FontAwesomeIcon icon={faTrash} />
                                <span>Delete banner</span>
                            </button>
                        ) : null}

                        <h2 className={css.title}>General settings</h2>
                        <div className={css.flex}>
                            <div className={css.desc}>
                                <h3 className={css.subtitle}>Short description:</h3>
                                <TextareaAutosize
                                    className={css.comment}
                                    name="comment"
                                    cols={30}
                                    rows={10}
                                    value={bio}
                                    placeholder="your comment"
                                    onChange={handleBioChange}
                                />
                                <button
                                    className={clsx('btn btn--blue', !bio && 'btn--disabled')}
                                    type="submit"
                                    onClick={handleSubmitBio}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    serverRedirect(
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
    ),
);

export default Settings;
