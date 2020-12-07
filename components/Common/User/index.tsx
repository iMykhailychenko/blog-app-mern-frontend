import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../assets/routes';
import { IUser } from '../../../interfaces';
import UserAvatar from '../UserAvatar';
import css from './index.module.css';

interface IProps {
  user: IUser;
}

const User = ({ user }: IProps): ReactElement | null =>
  user ? (
    <div className={css.user}>
      <UserAvatar
        width={5}
        height={5}
        avatar={user.avatar}
        name={(user.name[0] + user.surname[0]).toUpperCase()}
      />
      <Link href={routes.user[0](user._id)}>
        <a className={css.userInfo}>
          <p className={css.name}>{user.name + ' ' + user.surname}</p>
          <p className={css.nick}>{`@${user?.nick}`}</p>
        </a>
      </Link>
    </div>
  ) : null;

export default User;
