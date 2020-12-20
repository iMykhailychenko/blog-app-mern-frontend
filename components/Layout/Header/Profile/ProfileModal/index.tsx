import Link from 'next/link';
import React, { MouseEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../../../../assets/routes';
import { IState, IUser } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import styles from '../index.module.css';

interface IProps {
    onClick: () => void;
}

const ProfileModal = ({ onClick }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const user = useSelector<IState, IUser>(state => state.auth.user);

    const handleLogout = (): void => {
        dispatch({ type: types.LOGOUT_START });
    };

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) return;
        setTimeout(() => {
            onClick();
        }, 200);
    };

    return (
        <div className={styles.modal} onClick={handleClick} aria-hidden>
            <h4 className={styles.name}>{`${user.name} ${user.surname}`}</h4>
            <p className={styles.nick}>{'@' + user.nick}</p>

            <Link href={routes.user[0](user._id)}>
                <a className={styles.link}>Your profile</a>
            </Link>
            <Link href={routes.posts.new}>
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
