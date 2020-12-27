import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { IComment, IState } from '../../../../../../interfaces';
import Likes from '../../../../../Common/Likes';
import css from '../index.module.css';

interface IProps {
    comment: IComment;
}

const CommentButton = ({ comment }: IProps): ReactElement => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return (
        <div className={css.likes}>
            <Likes like={comment.feedback.like} dislike={comment.feedback.dislike} />

            {token && (
                <>
                    <button className={css.link}>Answer</button>
                    <button className={css.link}>Edit</button>
                    <button className={css.link}>Delete</button>
                </>
            )}
        </div>
    );
};

export default CommentButton;
