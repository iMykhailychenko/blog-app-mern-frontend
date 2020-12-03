import React from 'react';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
import User from '../../../../user';
import { comment } from '../NewComment/NewComment.actions';
import styles from './index.module.css';

import user from '../../../../../assets/user';

export default ({ text }: { text: string }) => {
    const dispatch = useDispatch();
    const handleChange = (value: string): void => {
        dispatch(comment(value));
    };

    return (
        <div className={styles.container}>
            <User {...user} />
            <br />
            <CommentForm value={text} onChange={handleChange} edit />
        </div>
    );
};
