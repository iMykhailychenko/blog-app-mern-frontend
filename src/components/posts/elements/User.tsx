import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Posts.module.css';

interface Props {
  avatar: string;
  name: string;
  nick: string;
}

const User: React.FC<Props> = ({ avatar, name, nick }) => (
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

export default User;
