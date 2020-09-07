import React from 'react';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
import User from '../../../../user'
import { comment } from '../NewComment/NewComment.actions';
import { IUser } from '../../../../../helpers/interfaces';
import styles from './index.module.css';

export default ({ user }: { user: IUser }) => {
    const dispatch = useDispatch();
    const handleChange = (value: string): void => {
        dispatch(comment(value));
    };

    return (
        <div className={styles.container}>
            <User {...user} />
            <br/>
            <CommentForm value={user.name + ', '} onChange={handleChange} />
        </div>
    );
};
