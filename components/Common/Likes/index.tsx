import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import useAuth from '../Auth/AuthContext';
import css from './index.module.css';

interface IProps {
    postId?: string | string[];
    targetId?: string | string[];
    typeLike?: string;
    typeDislike?: string;
    like: string[];
    dislike: string[];
    view?: string[];
}

const Likes = ({ targetId, postId, typeLike, typeDislike, like, dislike, view }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const auth = useAuth();

    const handleLike = (): void => {
        if (!targetId || !typeLike) return;
        dispatch({ type: typeLike, payload: targetId, postId });
    };
    const handleDislike = (): void => {
        if (!targetId || !typeDislike) return;
        dispatch({ type: typeDislike, payload: targetId, postId });
    };

    return (
        <ul className={css.list} style={auth ? {} : { pointerEvents: 'none' }}>
            <li
                className={clsx(css.item, like?.includes(auth?.user?._id || null) && css.active)}
                onClick={handleLike}
                aria-hidden
            >
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className={css.num}>{like?.length || 0}</span>
            </li>
            <li
                className={clsx(css.item, css.dislike, dislike?.includes(auth?.user?._id || null) && css.active)}
                onClick={handleDislike}
                aria-hidden
            >
                <FontAwesomeIcon icon={faThumbsDown} />
                <span className={css.num}>{dislike?.length || 0}</span>
            </li>
            {view && (
                <li
                    className={clsx(css.item, view?.includes(auth?.user?._id || null) && css.active)}
                    style={{ pointerEvents: 'none' }}
                >
                    <FontAwesomeIcon icon={faEye} />
                    <span className={css.num}>{view?.length || 0}</span>
                </li>
            )}
        </ul>
    );
};

export default Likes;
