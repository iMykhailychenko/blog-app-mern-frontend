import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid, faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import useAuth from '../../../hooks/auth.hook';
import css from './index.module.css';

interface IProps {
    postId?: string | string[];
    targetId?: string | string[];
    typeLike?: string;
    typeDislike?: string;
    typeQueue?: string;
    queue?: 1 | 0;
    feedback: {
        dislike: number;
        view?: number;
        like: number;
        isDisliked: 1 | 0;
        isViewed?: 1 | 0;
        isLiked: 1 | 0;
    };
}

const Likes = ({ targetId, postId, typeLike, typeDislike, feedback, typeQueue, queue }: IProps): ReactElement => {
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
    const handleQueue = (): void => {
        if (!targetId || !typeQueue) return;
        dispatch({ type: typeQueue, payload: targetId });
    };

    return (
        <ul className={css.list} style={auth ? {} : { pointerEvents: 'none' }}>
            <li
                className={clsx(css.item, feedback.isLiked && css.active)}
                title="like"
                onClick={handleLike}
                aria-hidden
            >
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className={css.num}>{feedback.like}</span>
            </li>

            <li
                className={clsx(css.item, css.dislike, feedback.isDisliked && css.active)}
                title="dislike"
                onClick={handleDislike}
                aria-hidden
            >
                <FontAwesomeIcon icon={faThumbsDown} />
                <span className={css.num}>{feedback.dislike}</span>
            </li>

            {feedback.view !== undefined ? (
                <li
                    className={clsx(css.item, feedback.isViewed && css.active)}
                    title="view"
                    style={{ pointerEvents: 'none' }}
                >
                    <FontAwesomeIcon icon={faEye} />
                    <span className={css.num}>{feedback.view}</span>
                </li>
            ) : null}

            {typeQueue && auth ? (
                <li
                    className={clsx(css.item, queue && css.active)}
                    title="read later"
                    onClick={handleQueue}
                    aria-hidden
                >
                    {queue ? <FontAwesomeIcon icon={faBookmarkSolid} /> : <FontAwesomeIcon icon={faBookmark} />}
                </li>
            ) : null}
        </ul>
    );
};

export default Likes;
