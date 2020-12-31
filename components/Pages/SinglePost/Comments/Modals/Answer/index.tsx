import { faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { formatDate } from '../../../../../../assets/helpers';
import { IComment } from '../../../../../../interfaces';
import types from '../../../../../../redux/types';
import { modal } from '../../../../../Common/Modal';
import User from '../../../../../Common/User';
import CommentForm from '../../CommentForm';
import css from './index.module.css';

interface IProps {
    comment: IComment;
}

const Answer = ({ comment }: IProps): ReactElement => {
    const dispatch = useDispatch();

    const handleSubmit = (value: { id: string | string[]; form: FormData }): void => {
        dispatch({ type: types.POST_ANSWER_START, payload: { ...value, comment: comment._id } });
        modal.close();
    };

    return (
        <div className={css.inner}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <User user={comment.author[0]} />

            <p className={css.text}>{comment.text}</p>

            {comment.attachment && (
                <button className={css.imgBtn}>
                    <img className={css.img} src={comment.attachment} alt="" />
                </button>
            )}

            <p className={css.date}>{formatDate(comment.date)}</p>

            <CommentForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Answer;
