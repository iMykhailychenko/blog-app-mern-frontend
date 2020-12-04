import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { IUser } from '../../../../../interfaces';
import User from '../../../../Common/User';
import CommentForm from '../CommentForm';
import styles from './index.module.css';

const CommentModal = ({ user }: { user: IUser }): ReactElement => {
    const dispatch = useDispatch();
    const handleChange = (value: string): void => {
        console.log(dispatch, value);
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
