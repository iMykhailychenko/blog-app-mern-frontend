import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from '../../../config/router';
import { logout } from '../../auth/Auth.action';
import user from '../../../assets/user';
import styles from './index.module.css';

export default () => {
    const dispatch = useDispatch();

    return (
        <ul className={styles.list}>
            <li>
                <Link to={router.user[0](user.id)}>Your profile</Link>
            </li>
            <li>
                <Link to={router.post.new}>Create new post</Link>
            </li>
            <li>
                <Link to={router.settings}>Settings</Link>
            </li>
            <li>
                <button
                    onClick={(): void => {
                        dispatch(logout());
                    }}
                >
                    Log out
                </button>
            </li>
        </ul>
    );
};
