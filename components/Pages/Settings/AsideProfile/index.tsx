import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
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
            {profile.avatar ? (
                <img className={css.avatar} src={config.img + profile.avatar} alt="" />
            ) : (
                <p className={css.avatar} style={{ color: config.colors[profile.name[0]] || '#3273dc' }}>
                    {profile.name[0] + profile.surname[0]}
                </p>
            )}

            <div className={css.add}>
                <input onChange={handleAvatar} type="file" className={css.file} />
                <div className={clsx('add', css.addBtn)} />
                <p className={clsx(css.text, css.addText)}>Edit profile avatar</p>
            </div>

            {profile.avatar ? (
                <button className={css.delete} onClick={handleDelete} type="button">
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Delete avatar</span>
                </button>
            ) : null}
        </div>
    ) : null;
};

export default AsideProfile;
