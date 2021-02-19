import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IUser } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import css from '../index.module.css';

const UserInfo = ({ profile }: { profile: IUser }): ReactElement => {
    const dispatch = useDispatch();
    const [info, setInfo] = useState<{ [key: string]: string }>({
        name: profile?.name || '',
        surname: profile?.surname || '',
        email: profile?.email || '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInfo({ [event.target.name]: event.target.value });
    };
    const handleSubmit = (): void => {
        if (info.name === profile.name && info.surname === profile.surname && info.email === profile.email) return;
        dispatch({ type: types.UPDATE_USER_INFO_START, payload: info });
    };

    return (
        <div className={css.flex}>
            <div className={css.inner}>
                <label>
                    <h3 className={css.subtitle}>Name:</h3>
                    <input
                        value={info.name}
                        onChange={handleChange}
                        className={css.input}
                        placeholder="name"
                        type="text"
                        name="name"
                    />
                </label>
                <label>
                    <h3 className={css.subtitle}>Surname:</h3>
                    <input
                        value={info.surname}
                        onChange={handleChange}
                        className={css.input}
                        placeholder="surname"
                        type="text"
                        name="name"
                    />
                </label>
            </div>
            <div className={css.inner}>
                <label>
                    <h3 className={css.subtitle}>Email:</h3>
                    <input
                        value={info.email}
                        onChange={handleChange}
                        className={css.input}
                        placeholder="email"
                        type="text"
                        name="name"
                    />
                </label>
                <button className="btn btn--blue" onClick={handleSubmit} type="button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default UserInfo;
