import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import avatar from '../../../images/avatar.jpg';
import user from '../../../assets/user';

interface Props {
    addBtn?: boolean;
}

export default ({ addBtn = true }: Props) => {
    return (
        <div className={styles.inner}>
            <img className={styles.img} src={avatar} alt="" />

            <Link className={styles.link} to={`/user/${user.nick}`}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.nick}>{`@${user.nick}`}</p>
            </Link>

            <p className={styles.text}>{`total posts: ${user.posts}`}</p>

            {addBtn && (
                <Link to="/new-post">
                    <button className="add" />
                    <p className={styles.text}>Add new post</p>
                </Link>
            )}
        </div>
    );
};
