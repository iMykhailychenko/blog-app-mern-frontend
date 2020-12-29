import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IComment, IState, IUser } from '../../../../../../interfaces';
import types from '../../../../../../redux/types';
import Likes from '../../../../../Common/Likes';
import css from '../index.module.css';

interface IProps {
    comment: IComment;
}

const CommentButton = ({ comment }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const token = useSelector<IState, string | null>(state => state.auth.token);
    const user = useSelector<IState, IUser>(state => state.auth.user);

    const handleDelete = (): void => {
        dispatch({ type: types.DELETE_COMMENT_START, payload: comment._id });
    };

    return (
        <div className={css.likes}>
            <Likes like={comment.feedback.like} dislike={comment.feedback.dislike} />
            {token && (
                <button type="button" className={css.link}>
                    Answer
                </button>
            )}

            {token && comment.author[0]._id === user._id && (
                <>
                    <button type="button" className={css.link}>
                        Edit
                    </button>
                    <button type="button" className={css.link} onClick={handleDelete}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default CommentButton;
