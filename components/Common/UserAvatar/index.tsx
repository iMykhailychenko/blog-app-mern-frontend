import React, { ReactElement } from 'react';

import config from '../../../assets/config';
import css from './index.module.css';

interface IProps {
    avatar: string | null | undefined;
    name: string;
    height?: number;
    width?: number;
}

const UserAvatar = ({ avatar, name, height = 3.5, width = 3.5 }: IProps): ReactElement => {
    return avatar ? (
        <img
            className={css.avatar}
            style={{ height: `${height}rem`, width: `${width}rem` }}
            src={config.back + avatar}
            alt={name}
        />
    ) : (
        <div
            className={css.placeholder}
            style={{
                height: `${height}rem`,
                width: `${width}rem`,
                color: config.colors[name[0] || 'A'],
                borderColor: config.colors[name[0] || 'A'],
            }}
        >
            {name}
        </div>
    );
};

export default UserAvatar;
