import Link from 'next/link';
import React, { MouseEvent, ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import routes from '../../../../../assets/routes';
import types from '../../../../../redux/types';
import useAuth from '../../../../Common/Auth/AuthContext';
import styles from '../index.module.css';
import css from '../index.module.css';

interface IProps {
    onClick: () => void;
}

const ProfileModal = ({ onClick }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const auth = useAuth();
    const body = document.querySelector('body');

    const handleLogout = (): void => {
        dispatch({ type: types.LOGOUT_START });
    };

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) return;
        setTimeout(() => {
            onClick();
        }, 200);
    };

    useEffect(() => {
        const handleClose = (event: KeyboardEvent): void => {
            if (event.code !== 'Escape') return;
            onClick();
        };
        window.addEventListener('keydown', handleClose);

        return () => {
            window.removeEventListener('keydown', handleClose);
        };
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className={css.backdrop} onClick={onClick} aria-hidden />
            {auth?.user && (
                <div className={styles.modal} onClick={handleClick} aria-hidden>
                    <h4 className={styles.name}>{`${auth?.user.name} ${auth?.user.surname}`}</h4>
                    <p className={styles.nick}>{'@' + auth?.user.nick}</p>

                    <Link href={routes.users[0](auth?.user._id)}>
                        <a className={styles.link}>Your profile</a>
                    </Link>
                    <Link href={routes.posts.new}>
                        <a className={styles.link}>New post</a>
                    </Link>
                    <Link href={routes.settings[0](auth?.user?._id)}>
                        <a className={styles.link}>Settings</a>
                    </Link>
                    <button className={styles.link} type="button" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            )}
        </>,
        body,
    );
};

export default ProfileModal;
