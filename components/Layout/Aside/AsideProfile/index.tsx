import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../../../assets/routes';
import { IState, IUser } from '../../../../interfaces';
import types from '../../../../redux/types';
import Likes from '../../../Common/Likes';
import css from './index.module.css';

const COLORS: { [key: string]: string } = {
    A: '#3273dc',
    B: '#32acdc',
    C: '#9832dc',
    D: '#6aa50a',
    E: '#3a001b',
    F: '#9832dc',
    G: '#07925d',
    H: '#29ac6a',
    I: '#371880',
    J: '#076b92',
    K: '#2e9207',
    L: '#07925d',
    M: '#301a14',
    N: '#35141e',
    O: '#2c2680',
    P: '#07925d',
    Q: '#389471',
    R: '#a348c4',
    S: '#07925d',
    T: '#6433d9',
    U: '#35051d',
    V: '#80385d',
    W: '#07925d',
    X: '#07925d',
    Y: '#49665b',
    Z: '#4f535a',
};

const AsideProfile = (): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const user = useSelector<IState, IUser>(state => state.auth.user);
    const profile = useSelector<IState, IUser>(state => state.profile);

    const handleSubscribe = (): void => {
        dispatch({ type: types.FOLLOW_USER_START, payload: query.userId });
    };

    return (
        profile && (
            <div className={css.inner}>
                {profile.avatar ? (
                    <img className={css.avatar} src={profile.avatar} alt="" />
                ) : (
                    <p className={css.avatar} style={{ color: COLORS[profile.name[0]] || '#3273dc' }}>
                        {profile.name[0] + profile.surname[0]}
                    </p>
                )}

                <p className={css.text}>{`${profile.name} ${profile.surname}`}</p>
                <p className={clsx(css.text, css.email)}>{profile.email}</p>

                <div className={css.likes}>
                    <Likes
                        targetId={profile._id}
                        dislike={profile.feedback.dislike}
                        like={profile.feedback.like}
                        typeLike={types.LIKE_PROFILE_START}
                        typeDislike={types.DISLIKE_PROFILE_START}
                    />
                </div>

                {user ? (
                    user?._id === profile._id ? (
                        <Link href={routes.posts.new}>
                            <a className={css.add}>
                                <button className="add" type="button" />
                                <p className={clsx(css.text, css.addText)}>Add new post</p>
                            </a>
                        </Link>
                    ) : (
                        <button className={css.add} type="button" onClick={handleSubscribe}>
                            <div className="add" />
                            <p className={clsx(css.text, css.addText)}>Subscribe</p>
                        </button>
                    )
                ) : null}
            </div>
        )
    );
};

export default AsideProfile;
