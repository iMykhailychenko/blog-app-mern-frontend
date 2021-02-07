import { faEye, faImages, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
import routes from '../../../../assets/routes';
import { IState, IUser } from '../../../../interfaces';
import types from '../../../../redux/types';
import css from '../../Users/AsideProfile/index.module.css';

const AsideProfile = (): ReactElement => {
    const dispatch = useDispatch();
    const profile = useSelector<IState, IUser>(state => state.profile);

    const handleAvatar = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.UPDATE_AVATAR_START, payload: event.target.files[0] });
    };
    const handleDelete = (): void => {
        dispatch({ type: types.UPDATE_AVATAR_START, payload: null });
    };

    return profile ? (
        <div className={css.inner}>
            <Link href={routes.users[0](profile?._id)}>
                <a>
                    {profile.avatar ? (
                        <img className={css.avatar} src={config.img + profile.avatar} alt="" />
                    ) : (
                        <p className={css.avatar} style={{ color: config.colors[profile.name[0]] || 'var(--blue-01)' }}>
                            {profile.name[0] + profile.surname[0]}
                        </p>
                    )}
                </a>
            </Link>

            {profile.avatar ? (
                <button className={css.delete} onClick={handleDelete} type="button">
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Delete avatar</span>
                </button>
            ) : null}

            <div className={css.edit}>
                <input className={css.file} onChange={handleAvatar} type="file" />
                <FontAwesomeIcon icon={faImages} />
                <span>Change avatar</span>
            </div>

            <Link href={routes.users[0](profile?._id)}>
                <a className={css.view}>
                    <FontAwesomeIcon icon={faEye} />
                    <span>View profile</span>
                </a>
            </Link>
        </div>
    ) : null;
};

export default AsideProfile;
