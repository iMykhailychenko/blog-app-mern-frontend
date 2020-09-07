import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from '../CommentForm';
import { comment } from './NewComment.actions';
import { getAuth } from '../../../../../redux/selectors';
import router from '../../../../../config/router';
import styles from './index.module.css';

export default () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(getAuth);
    const handleChange = (value: string): void => {
        dispatch(comment(value));
    };

    return isAuth ? (
        <div className={styles.container}>
            <h3 className={styles.title}>Leave the comment:</h3>
            <CommentForm onChange={handleChange} />
        </div>
    ) : (
        <div className={styles.container}>
            <p className={styles.auth}>
                <Link to={router.auth.login}>Login</Link> or{' '}
                <Link to={router.auth.signup}>Signup</Link> to leave the comment
            </p>
        </div>
    );
};
