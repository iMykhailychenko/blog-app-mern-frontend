import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
import User from '../../../../Common/User';
import { comment } from '../NewComment/NewComment.actions';
import { IUser } from '../../../../../interfaces';
import styles from './index.module.css';

const CommentModal = ({ user }: { user: IUser }): ReactElement => {
    const dispatch = useDispatch();
    const handleChange = (value: string): void => {
        dispatch(comment(value));
    };

    return (
        <div className={styles.container}>
            <User {...user} />
            <br />
            <CommentForm value={user.name + ', '} onChange={handleChange} />
        </div>
    );
};

export default CommentModal;
