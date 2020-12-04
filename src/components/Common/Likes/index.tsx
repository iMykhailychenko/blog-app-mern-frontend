import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import styles from './index.module.css';

interface IProps {
    like: string[];
    dislike: string[];
    watched?: string[];
    click?: boolean;
}

const Likes = ({ like, dislike, watched, click }: IProps): ReactElement => {
    return (
        <ul className={styles.list} style={click ? {} : { pointerEvents: 'none' }}>
            <li className={styles.item}>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className={styles.num}>{like.length}</span>
            </li>
            <li className={styles.item}>
                <FontAwesomeIcon icon={faThumbsDown} />
                <span className={styles.num}>{dislike.length}</span>
            </li>
            {watched && (
                <li className={styles.item} style={{ pointerEvents: 'none' }}>
                    <FontAwesomeIcon icon={faEye} />
                    <span className={styles.num}>{watched.length}</span>
                </li>
            )}
        </ul>
    );
};

export default Likes;
