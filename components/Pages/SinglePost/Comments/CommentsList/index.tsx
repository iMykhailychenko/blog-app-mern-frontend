import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { formatDate } from '../../../../../assets/helpers';
import { ICommentList, IState } from '../../../../../interfaces';
import User from '../../../../Common/User';
import CommentButton from './CommentButton';
import css from './index.module.css';

const CommentsList = (): ReactElement => {
    const comments = useSelector<IState, ICommentList>(state => state.comments);

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
                                <img className={css.img} src={comment.attachment} alt="" />
                            </button>
                        )}

                        <p className={css.date}>{formatDate(comment.date)}</p>

                        <CommentButton comment={comment} />

                        {!!comment.answers?.length && (
                            <ul className={css.subList}>
                                {comment.answers.map(answer => (
                                    <li className={css.item} key={answer._id}>
                                        <User user={answer.author[0]} />

                                        <p className={css.text}>{answer.text}</p>

                                        {answer.attachment && (
                                            <button className={css.imgBtn}>
                                                <img className={css.img} src={answer.attachment} alt="" />
                                            </button>
                                        )}

                                        <p className={css.date}>{formatDate(answer.date)}</p>

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

export default CommentsList;
