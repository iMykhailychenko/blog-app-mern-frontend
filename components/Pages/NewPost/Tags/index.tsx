import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generateTags } from '../../../../assets/helpers';
import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Tags = (): ReactElement => {
    const dispatch = useDispatch();
    const tags = useSelector<IState, string>(state => state.posts.newPost.tags);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.NEW_POST_TAGS, payload: event.target.value });
    };

    return (
        <>
            <p className={styles.text}>Provide tags for your post:</p>

            <ul className={styles.list}>
                {generateTags(tags).map((tag, index) => (
                    <li className={styles.item} key={tag + index}>{`#${tag}`}</li>
                ))}
            </ul>

            <input
                value={tags}
                onChange={handleChange}
                type="text"
                name="tags"
                className={clsx(inputs.input, inputs.empty, styles.input)}
                placeholder="javascript react redux..."
            />
        </>
    );
};

export default Tags;
