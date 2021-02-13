import React, { memo, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../../assets/config';
import { formatDate } from '../../../../../assets/helpers';
import { ICommentList, IState } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import { modal } from '../../../../Common/Modal';
import ProfileBig from '../../../../Common/Profile/ProfileBig';
import CommentForm from '../CommentForm';
import Photo from '../Modals/Photo';
import CommentButton from './CommentButton';
import css from './index.module.css';

const CommentsList = (): ReactElement => {
    const dispatch = useDispatch();
    const comments = useSelector<IState, ICommentList>(state => state.comments);

    const handleSubmit = (comment: string) => (value: { id: string | string[]; form: FormData }): void => {
        dispatch({ type: types.POST_ANSWER_START, payload: { ...value, comment } });
    };

    const handleModal = (src: string): (() => void) => (): void => {
        modal.open(<Photo src={src} />);
    };

    return (
        <div className={css.container}>
            <h3 className={css.title}>Comments:</h3>

            <ul className={css.list}>
                {comments?.data?.comments?.map(comment => (
                    <li className={css.item} key={comment._id}>
                        <ProfileBig user={comment.author[0]} />

                        <p
                            className={css.text}
                            dangerouslySetInnerHTML={{ __html: comment.text?.replace(/\n/, '<br>') }}
                        />

                        {comment.attachment && (
                            <button
                                className={css.imgBtn}
                                type="button"
                                onClick={handleModal(config.img + comment.attachment)}
                            >
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
                                <li className={css.item}>
                                    <CommentForm onSubmit={handleSubmit(comment._id)} />
                                </li>
                                {comment.answers.map(answer => (
                                    <li className={css.item} key={answer._id}>
                                        <ProfileBig user={answer.author[0]} />

                                        <p
                                            className={css.text}
                                            dangerouslySetInnerHTML={{ __html: answer.text?.replace(/\n/, '<br>') }}
                                        />

                                        {answer.attachment && (
                                            <button
                                                className={css.imgBtn}
                                                type="button"
                                                onClick={handleModal(config.img + answer.attachment)}
                                            >
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
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(CommentsList);
