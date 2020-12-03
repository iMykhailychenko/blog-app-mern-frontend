import React, { ReactElement } from 'react';
// import Like from './Like';
// import Comment from './Comment';
import styles from '../index.module.css';

interface IProps {
    onClick: () => void;
}

const NewxModal = ({ onClick }: IProps): ReactElement => {
    return (
        <div className={`${styles.modal} ${styles.news}`} onClick={onClick}>
            {/* {!notification.length ? (
                <p className={styles.nothing}>Nothing to show</p>
            ) : (
                <ul className={styles.list}>
                    {notification.map((item, index) =>
                        item.type === 'like' ? <Like key={index} {...item} /> : <Comment key={index} {...item} />,
                    )}
                </ul>
            )} */}
        </div>
    );
};

export default NewxModal;
