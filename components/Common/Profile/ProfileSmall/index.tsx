import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../assets/routes';
import { IUser } from '../../../../interfaces';
import UserAvatar from '../../UserAvatar';
import css from './index.module.css';

interface IProps {
    user: IUser;
}

const ProfileSmall = ({ user }: IProps): ReactElement | null =>
    user ? (
        <Link href={routes.users[0](user._id)}>
            <a className={css.user} title={`${user.name} ${user.surname}`}>
                <UserAvatar
                    width={4}
                    height={4}
                    avatar={user.avatar}
                    name={(user.name[0] + user.surname[0]).toUpperCase()}
                />
            </a>
        </Link>
    ) : null;

export default ProfileSmall;
