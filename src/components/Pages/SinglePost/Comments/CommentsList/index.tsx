import React from 'react';
import ImgModal from '../ImgModal';
import Buttons from './Buttons';
import User from '../../../../user';
import modal from '../../../../../common/modal/Modal.operations';
import styles from './index.module.css';
import { comments } from '../../../../../assets/comments';

export default () => (
    <div className={styles.container}>
        <h3 className={styles.title}>Comments:</h3>

        <ul className={styles.list}>
            {comments.map(comment => (
                <li className={styles.item} key={comment.id}>
                    <User {...comment.user} />

                    <p className={styles.text}>{comment.text}</p>

                    {comment.img && (
                        <button
                            className={styles.imgBtn}
                            onClick={(): void => {
                                modal({
                                    size: 'l',
                                    node: <ImgModal src={comment.img ? comment.img : ''} />,
                                });
                            }}
                        >
                            <img className={styles.img} src={comment.img} alt="attached img" />
                        </button>
                    )}

                    <p className={styles.date}>{comment.date}</p>

                    <Buttons {...comment} />

                    {comment.answers && (
                        <ul className={styles.subList}>
                            {comment.answers.map(answer => (
                                <li className={styles.item} key={answer.id}>
                                    <User {...answer.user} />

                                    <p className={styles.text}>{answer.text}</p>

                                    {answer.img && (
                                        <button
                                            className={styles.imgBtn}
                                            onClick={(): void => {
                                                modal({
                                                    size: 'l',
                                                    node: <ImgModal src={answer.img ? answer.img : ''} />,
                                                });
                                            }}
                                        >
                                            <img className={styles.img} src={answer.img} alt="attached img" />
                                        </button>
                                    )}

                                    <p className={styles.date}>{answer.date}</p>

                                    <Buttons {...answer} />
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
