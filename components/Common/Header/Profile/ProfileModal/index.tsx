import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../../../../assets/routes';
import { IState, IUser } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import styles from '../index.module.css';

const ProfileModal = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector<IState, IUser>(state => state.auth.user);

  const handleLogout = (): void => {
    dispatch({ type: types.LOGOUT_START });
  };

  return (
    <div className={styles.modal}>
      <h4 className={styles.name}>{`${user.name} ${user.surname}`}</h4>
      <p className={styles.nick}>{'@' + user.nick}</p>

      <Link href={routes.user[0](user._id)}>
        <a className={styles.link}>Your profile</a>
      </Link>
      <Link href={routes.post.new}>
        <a className={styles.link}>New post</a>
      </Link>
      <Link href={routes.settings}>
        <a className={styles.link}>Settings</a>
      </Link>
      <button className={styles.link} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default ProfileModal;
