import React from 'react';
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
      <a
        href="https://ihor-mykhailychenko.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.userInfo}
      >
        <p className={styles.name}>{name}</p>
        <p className={styles.nick}>{`@${nick}`}</p>
      </a>
    </div>
  </div>
);

export default User;
