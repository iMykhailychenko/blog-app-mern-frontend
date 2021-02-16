import Link from 'next/link';
import React, { MouseEvent, ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import routes from '../../../../../assets/routes';
import useAuth from '../../../../../hooks/auth.hook';
import types from '../../../../../redux/types';
import css from '../index.module.css';

interface IProps {
    onClick: () => void;
}

const ProfileModal = ({ onClick }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const auth = useAuth();

    const handleLogout = (): void => {
        onClick();
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
                <div className={css.modal} onClick={handleClick} aria-hidden>
                    <Link href={routes.users[0](auth?.user._id)}>
                        <a>
                            <h4 className={css.name}>{`${auth?.user.name} ${auth?.user.surname}`}</h4>
                            <p className={css.nick}>{'@' + auth?.user.nick}</p>
                        </a>
                    </Link>
                    <Link href={routes.users[0](auth?.user._id)}>
                        <a className={css.link}>Your profile</a>
                    </Link>
                    <Link href={routes.settings[0](auth?.user?._id)}>
                        <a className={css.link}>Settings</a>
                    </Link>
                    <Link href={routes.posts.new}>
                        <a className={css.link}>New post</a>
                    </Link>
                    <Link href={routes.queue[0](auth?.user._id)}>
                        <a className={css.link}>Queue</a>
                    </Link>
                    <button className={css.link} type="button" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            )}
        </>,
        document.querySelector('body'),
    );
};

export default ProfileModal;
