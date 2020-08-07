import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { desc } from '../NewPost.actions';
import { getDesc } from '../../../../redux/selectors';
import inputs from '../inputs.module.css';
import styles from './index.module.css';

export default () => {
    const dispatch = useDispatch();
    const value = useSelector(getDesc);

    return (
        <textarea
            name="desc"
            cols={30}
            rows={40}
            placeholder="Short description for the post preview"
            className={clsx(inputs.input, styles.input)}
            value={value}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                dispatch(desc(event.target.value));
            }}
        />
    );
};
