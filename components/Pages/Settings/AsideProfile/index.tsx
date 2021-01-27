import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import config from '../../../../assets/config';
import { IState, IUser } from '../../../../interfaces';
import css from '../../Users/AsideProfile/index.module.css';

const AsideProfile = (): ReactElement => {
    const profile = useSelector<IState, IUser>(state => state.profile);

    return profile ? (
        <div className={css.inner}>
            {profile.avatar ? (
                <img className={css.avatar} src={profile.avatar} alt="" />
            ) : (
                <p className={css.avatar} style={{ color: config.colors[profile.name[0]] || '#3273dc' }}>
                    {profile.name[0] + profile.surname[0]}
                </p>
            )}

            <div className={css.add}>
                <input type="file" className={css.file} />
                <div className={clsx('add', css.addBtn)} />
                <p className={clsx(css.text, css.addText)}>Edit profile avatar</p>
            </div>
        </div>
    ) : null;
};

export default AsideProfile;
