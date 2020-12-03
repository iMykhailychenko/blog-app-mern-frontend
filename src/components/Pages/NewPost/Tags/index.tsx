import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { tags } from '../NewPost.actions';
import { getTags } from '../../../../redux/selectors';
import inputs from '../inputs.module.css';
import styles from './index.module.css';

const generateTags = (str: string): string[] => str.trim().toLowerCase().split(' ');

const Tags = (): ReactElement => {
    const dispatch = useDispatch();
    const value = useSelector(getTags);

    return (
        <>
            <p className={styles.text}>Provide tags for your post:</p>

            {/* <ul className={styles.list}>
                {generateTags(value).map((tag, index) => (
                    <li className={styles.item} key={tag + index}>{`#${tag.length < 15 ? tag : tag.slice(0, 15)}`}</li>
                ))}
            </ul> */}

            <input
                type="text"
                name="tags"
                className={clsx(inputs.input, styles.input)}
                placeholder="javascipt react redux..."
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    dispatch(tags(event.target.value));
                }}
            />
        </>
    );
};

export default Tags;
