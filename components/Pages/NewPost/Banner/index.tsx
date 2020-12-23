import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import styles from './index.module.css';

const Banner = (): ReactElement => {
    const dispatch = useDispatch();
    const value = useSelector<IState, File | null>(state => state.posts.newPost.banner);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.NEW_POST_BANNER, payload: event.target.files[0] || null });
    };

    const handleDelete = (): void => {
        dispatch({ type: types.NEW_POST_BANNER, payload: null });
    };

    return value ? (
        <div aria-hidden className={styles.wrp} onClick={handleDelete}>
            <img className={styles.img} src={value ? window.URL.createObjectURL(value) : ''} alt="Post banner" />
            <span>Click to delete img</span>
        </div>
    ) : (
        <div className={styles.add}>
            <div>
                <span className="add" />
                <p className={styles.text}>Click to add post banner</p>
            </div>

            <input
                type="file"
                className={styles.input}
                onChange={handleChange}
                name="img"
                accept=".jpg, .jpeg, .pngs"
            />
        </div>
    );
};

export default Banner;
