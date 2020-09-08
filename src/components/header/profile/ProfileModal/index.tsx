import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../../../config/router';
import styles from '../index.module.css';
import user from '../../../../assets/user';

interface IProps {
    onClick: () => void;
    onLogout: () => void;
}

export default ({ onClick, onLogout }: IProps) => {
    return (
        <div className={styles.modal}>
            <h4 className={styles.name}>{user.name}</h4>
            <p className={styles.nick}>{'@' + user.nick}</p>

            <Link
                className={styles.link}
                to={router.user[0](user.id)}
                onClick={onClick}
            >
                Your profile
            </Link>
            <Link
                className={styles.link}
                to={router.post.new}
                onClick={onClick}
            >
                New post
            </Link>
            <Link
                className={styles.link}
                to={router.settings}
                onClick={onClick}
            >
                Settings
            </Link>
            <button className={styles.link} onClick={onLogout}>
                Log out
            </button>
        </div>
    );
};
