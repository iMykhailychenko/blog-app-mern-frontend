import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../../config/router';
import styles from './index.module.css';
import avatar from '../../../images/avatar.jpg';
import user from '../../../assets/user';

interface Props {
    addBtn?: boolean;
}

export default ({ addBtn = true }: Props) => {
    return (
        <div className={styles.inner}>
            <img className={styles.img} src={avatar} alt={user.name} />

            <Link className={styles.link} to={router.auth.user(user.id)}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.nick}>{`@${user.nick}`}</p>
            </Link>

            <p className={styles.text}>{`total posts: ${user.posts}`}</p>

            {addBtn && (
                <Link to={router.post.new}>
                    <button className="add" />
                    <p className={styles.text}>Add new post</p>
                </Link>
            )}
        </div>
    );
};
