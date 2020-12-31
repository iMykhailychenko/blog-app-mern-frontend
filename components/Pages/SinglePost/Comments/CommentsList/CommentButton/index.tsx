import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IComment, IState, IUser } from '../../../../../../interfaces';
import types from '../../../../../../redux/types';
import Likes from '../../../../../Common/Likes';
import { modal } from '../../../../../Common/Modal';
import Answer from '../../Modals/Answer';
import css from '../index.module.css';

interface IProps {
    comment: IComment;
    hasAnswer?: boolean;
}

const CommentButton = ({ comment, hasAnswer = false }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const token = useSelector<IState, string | null>(state => state.auth.token);
    const user = useSelector<IState, IUser>(state => state.auth.user);

    const handleDelete = (): void => {
        dispatch({ type: types.DELETE_COMMENT_START, payload: comment._id });
    };

    const handleAnswer = () => {
        modal.open(<Answer comment={comment} />);
    };

    return (
        <div className={css.likes}>
            <Likes like={comment.feedback.like} dislike={comment.feedback.dislike} />
            {token && hasAnswer && (
                <button type="button" className={css.link} onClick={handleAnswer}>
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
