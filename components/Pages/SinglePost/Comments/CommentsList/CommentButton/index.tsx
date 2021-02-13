import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import useAuth from '../../../../../../hooks/auth.hook';
import { IComment } from '../../../../../../interfaces';
import types from '../../../../../../redux/types';
import Likes from '../../../../../Common/Likes';
import { modal } from '../../../../../Common/Modal';
import Answer from '../../Modals/Answer';
import Edit from '../../Modals/Edit';
import css from '../index.module.css';

interface IProps {
    comment: IComment;
    hasAnswer?: boolean;
}

const CommentButton = ({ comment, hasAnswer = false }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const auth = useAuth();

    const handleDelete = (): void => {
        dispatch({ type: types.DELETE_COMMENT_START, payload: comment._id });
    };

    const handleAnswer = () => {
        modal.open(<Answer comment={comment} />);
    };
    const handleEdit = () => {
        modal.open(<Edit comment={comment} />);
    };

    return (
        <div className={css.likes}>
            <Likes
                postId={query.postId}
                targetId={comment._id}
                typeLike={types.POST_COMMENT_LIKE_START}
                typeDislike={types.POST_COMMENT_DISLIKE_START}
                feedback={comment.feedback}
            />
            {auth?.user && hasAnswer && (
                <button type="button" className={css.link} onClick={handleAnswer}>
                    Answer
                </button>
            )}

            {auth?.user && comment.author[0]._id === auth?.user._id && (
                <>
                    <button type="button" className={css.link} onClick={handleEdit}>
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
