import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';
import styles from './index.module.css';

interface IProps {
    id: string;
    avatar: string;
    name: string;
    nick: string;
}

const User = ({ id, avatar, name, nick }: IProps): ReactElement => (
    <div className={styles.user}>
        <img className={styles.avatar} src={avatar} alt={name} />

        <Link to={routes.User.path[0](id)} className={styles.userInfo}>
            <p className={styles.name}>{name}</p>
            <p className={styles.nick}>{`@${nick}`}</p>
        </Link>
    </div>
);

export default User;
