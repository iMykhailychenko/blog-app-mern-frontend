import React, { ReactElement } from 'react';

import { IComment } from '../../../../../interfaces';
import User from '../../../../Common/User';
import CommentButton from './CommentButton';
import css from './index.module.css';

export const comments: IComment[] = [
    {
        id: '01',
        date: '07.08.2020',
        text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores
        voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam
        sequi voluptatem quidem? Consequuntur!`,
        feedback: {
            like: ['2', '3'],
            dislike: ['2', '3'],
        },
        user: {
            avatar: null,
            _id: 'user-0001',
            name: 'Ihor',
            surname: 'Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
        },
        answers: [
            {
                id: '01',
                date: '07.08.2020',
                text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores
                voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam
                sequi voluptatem quidem? Consequuntur!`,
                feedback: {
                    like: ['2', '3'],
                    dislike: ['2', '3'],
                },
                user: {
                    avatar: null,
                    _id: 'user-0001',
                    name: 'Ihor',
                    surname: 'Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                },
            },
            {
                id: '02',
                date: '07.08.2020',
                text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores
                voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam
                sequi voluptatem quidem? Consequuntur!`,
                feedback: {
                    like: ['2', '3'],
                    dislike: ['2', '3'],
                },
                user: {
                    avatar: null,
                    _id: 'user-0001',
                    name: 'Ihor',
                    surname: 'Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                },
            },
            {
                id: '03',
                date: '07.08.2020',
                text: `labore nulla nihil soluta. Et voluptas veniam sequi voluptatem quidem? Consequuntur!`,
                feedback: {
                    like: ['2', '3'],
                    dislike: ['2', '3'],
                },
                user: {
                    avatar: null,
                    _id: 'user-0001',
                    name: 'Ihor',
                    surname: 'Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                },
            },
        ],
    },
    {
        id: '02',
        date: '07.08.2020',
        text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores
        voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam
        sequi voluptatem quidem? Consequuntur!`,
        feedback: {
            like: ['2', '3'],
            dislike: ['2', '3'],
        },
        user: {
            avatar: null,
            _id: 'user-0001',
            name: 'Ihor',
            surname: 'Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
        },
    },
    {
        id: '03',
        date: '07.08.2020',
        text: `labore nulla nihil soluta. Et voluptas veniam sequi voluptatem quidem? Consequuntur!`,
        feedback: {
            like: ['2', '3'],
            dislike: ['2', '3'],
        },
        user: {
            avatar: null,
            _id: 'user-0001',
            name: 'Ihor',
            surname: 'Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
        },
    },
];

const CommentsList = (): ReactElement => (
    <div className={css.container}>
        <h3 className={css.title}>Comments:</h3>

        <ul className={css.list}>
            {comments.map(comment => (
                <li className={css.item} key={comment.id}>
                    <User user={comment.user} />

                    <p className={css.text}>{comment.text}</p>

                    {/*TODO attachments*/}
                    {/*{comment.img && (*/}
                    {/*    <button className={css.imgBtn}>*/}
                    {/*        <img className={css.img} src={comment.img} alt="attached img" />*/}
                    {/*    </button>*/}
                    {/*)}*/}

                    <p className={css.date}>{comment.date}</p>

                    <CommentButton comment={comment} />

                    {comment.answers && (
                        <ul className={css.subList}>
                            {comment.answers.map(answer => (
                                <li className={css.item} key={answer.id}>
                                    <User user={answer.user} />

                                    <p className={css.text}>{answer.text}</p>

                                    {/*{answer.img && (*/}
                                    {/*    <button className={css.imgBtn}>*/}
                                    {/*        <img className={css.img} src={answer.img} alt="attached img" />*/}
                                    {/*    </button>*/}
                                    {/*)}*/}

                                    <p className={css.date}>{answer.date}</p>

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

export default CommentsList;
