import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../index.module.css';

interface IProps {
    avatar: string;
    name: string;
    nick: string;
}

export default ({ avatar, name, nick }: IProps) => (
    <div className={styles.inner}>
        <div className={styles.user}>
            <img className={styles.avatar} src={avatar} alt="" />

            <Link to={`/user/${nick}`} className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.nick}>{`@${nick}`}</p>
            </Link>
        </div>
    </div>
);
