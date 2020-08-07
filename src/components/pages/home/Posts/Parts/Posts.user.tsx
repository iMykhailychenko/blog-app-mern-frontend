import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../../../../config/router';
import styles from '../index.module.css';

interface IProps {
    id: string;
    avatar: string;
    name: string;
    nick: string;
}

export default ({ id, avatar, name, nick }: IProps) => (
    <div className={styles.inner}>
        <div className={styles.user}>
            <img className={styles.avatar} src={avatar} alt={name} />

            <Link to={router.auth.user(id)} className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.nick}>{`@${nick}`}</p>
            </Link>
        </div>
    </div>
);
