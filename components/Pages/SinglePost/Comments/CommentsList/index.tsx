import React, { memo, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../../assets/config';
import { formatDate } from '../../../../../assets/helpers';
import { ICommentList, IState } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import User from '../../../../Common/User';
import CommentForm from '../CommentForm';
import CommentButton from './CommentButton';
import css from './index.module.css';

const CommentsList = (): ReactElement => {
    const dispatch = useDispatch();
    const comments = useSelector<IState, ICommentList>(state => state.comments);

    const handleSubmit = (comment: string) => (value: { id: string | string[]; form: FormData }): void => {
        dispatch({ type: types.POST_ANSWER_START, payload: { ...value, comment } });
    };

    return (
        <div className={css.container}>
            <h3 className={css.title}>Comments:</h3>

            <ul className={css.list}>
                {comments?.data?.comments?.map(comment => (
                    <li className={css.item} key={comment._id}>
                        <User user={comment.author[0]} />

                        <p className={css.text}>{comment.text}</p>

                        {comment.attachment && (
                            <button className={css.imgBtn}>
                                <img className={css.img} src={config.img + comment.attachment} alt="" />
                            </button>
                        )}

                        <p className={css.date}>
                            <span>Created: {formatDate(comment.date)}</span>
                            {comment.edited && <span>Edited: {formatDate(comment.edited)}</span>}
                        </p>

                        <CommentButton comment={comment} hasAnswer />

                        {!!comment.answers?.length && (
                            <ul className={css.subList}>
                                {comment.answers.map(answer => (
                                    <li className={css.item} key={answer._id}>
                                        <User user={answer.author[0]} />

                                        <p className={css.text}>{answer.text}</p>

                                        {answer.attachment && (
                                            <button className={css.imgBtn}>
                                                <img className={css.img} src={config.img + answer.attachment} alt="" />
                                            </button>
                                        )}

                                        <p className={css.date}>
                                            <span>Created: {formatDate(answer.date)}</span>
                                            {answer.edited && <span>Edited: {formatDate(answer.edited)}</span>}
                                        </p>

                                        <CommentButton comment={answer} />
                                    </li>
                                ))}

                                <li className={css.item}>
                                    <CommentForm onSubmit={handleSubmit(comment._id)} />
                                </li>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(CommentsList);
