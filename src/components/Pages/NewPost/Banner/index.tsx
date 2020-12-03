import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../../../../redux/selectors';
import styles from './index.module.css';

const Banner = (): ReactElement => {
    const dispatch = useDispatch();
    const value = useSelector(getBanner);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { files } = event.target;
        if (!files || !files.length) return;
    };

    return value && value.name ? (
        <div aria-hidden className={styles.wrp}>
            <img className={styles.img} src={window.URL.createObjectURL(value)} alt="Post banner" />
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
                className={styles.input}
                onChange={handleChange}
                name="img"
                accept=".jpg, .jpeg, .png, .webp"
            />
        </div>
    );
};

export default Banner;
