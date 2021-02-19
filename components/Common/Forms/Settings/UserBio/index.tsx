import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { IUser } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import css from '../index.module.css';

const UserBio = ({ profile }: { profile: IUser }): ReactElement => {
    const dispatch = useDispatch();
    const [bio, setBio] = useState<string>(profile?.bio || '');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setBio(event.target.value);
    };
    const handleSubmit = (): void => {
        dispatch({ type: types.UPDATE_USER_BIO_START, payload: bio });
    };

    return (
        <div className={css.flex}>
            <div className={css.desc}>
                <h3 className={css.subtitle}>Provide description for your account:</h3>
                <TextareaAutosize
                    className={css.input}
                    name="comment"
                    value={bio}
                    placeholder="your comment"
                    onChange={handleChange}
                />
                <button className="btn btn--blue" type="button" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default UserBio;
