import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../assets/routes';
import { IUser } from '../../../../interfaces';
import UserAvatar from '../../UserAvatar';
import css from './index.module.css';

interface IProps {
    user: IUser;
}

const ProfileBig = ({ user }: IProps): ReactElement | null =>
    user ? (
        <Link href={routes.users[0](user._id)}>
            <a className={css.user}>
                <UserAvatar
                    width={5}
                    height={5}
                    avatar={user.avatar}
                    name={(user.name[0] + user.surname[0]).toUpperCase()}
                />
                <div className={css.userInfo}>
                    <p className={css.name}>{user.name + ' ' + user.surname}</p>
                    <p className={css.nick}>{`@${user?.nick}`}</p>
                </div>
            </a>
        </Link>
    ) : null;

export default ProfileBig;
