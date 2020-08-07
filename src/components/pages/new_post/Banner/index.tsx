import React, { createRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { banner } from '../NewPost.actions';
import { getBanner } from '../../../../redux/selectors';
import styles from './index.module.css';

export default () => {
    const dispatch = useDispatch();
    const fileInputRef = createRef<HTMLInputElement>();
    const value = useSelector(getBanner);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { files } = event.target;
        if (!files || !files.length) return;
        dispatch(banner(files[0]));
    };

    return value && value.name ? (
        <div
            className={styles.wrp}
            onClick={(): void => {
                dispatch(banner(null));
            }}
        >
            <img
                className={styles.img}
                src={window.URL.createObjectURL(value)}
                alt="Post banner"
            />
            <span>Click to delete img</span>
        </div>
    ) : (
        <div className={styles.add}>
            <div>
                <span className="add"></span>
                <p className={styles.text}>Click to add post banner</p>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                className={styles.input}
                onChange={handleChange}
                name="img"
                accept=".jpg, .jpeg, .png, .webp"
            />
        </div>
    );
};
