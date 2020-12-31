import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { IComment } from '../../../../../../interfaces';
import types from '../../../../../../redux/types';
import { modal } from '../../../../../Common/Modal';
import User from '../../../../../Common/User';
import CommentForm from '../../CommentForm';
import css from '../index.module.css';

interface IProps {
    comment: IComment;
}

const Edit = ({ comment }: IProps): ReactElement => {
    const dispatch = useDispatch();

    const handleSubmit = (value: { form: FormData }): void => {
        dispatch({ type: types.EDIT_COMMENT_START, payload: { comment: comment._id, ...value } });
        modal.close();
    };

    return (
        <div className={css.inner}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <User user={comment.author[0]} />

            <div className={css.divider} />

            <CommentForm value={comment.text} onSubmit={handleSubmit} hasAttachment={false} />
        </div>
    );
};

export default Edit;
