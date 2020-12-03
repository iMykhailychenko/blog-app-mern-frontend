import React from 'react';
import Like from './Like';
import Comment from './Comment';
import notification from '../../../../assets/notification';
import styles from '../index.module.css';

interface IProps {
    onClick: () => void;
}

export default ({ onClick }: IProps) => {
    return (
        <div className={`${styles.modal} ${styles.news}`} onClick={onClick}>
            {!notification.length ? (
                <p className={styles.nothing}>Nothing to show</p>
            ) : (
                <ul className={styles.list}>
                    {notification.map((item, index) =>
                        item.type === 'like' ? <Like key={index} {...item} /> : <Comment key={index} {...item} />,
                    )}
                </ul>
            )}
        </div>
    );
};
