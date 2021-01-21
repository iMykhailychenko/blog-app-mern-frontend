import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import css from '../index.module.css';

interface IProps {
    onClick: () => void;
}

const NewsModal = ({ onClick }: IProps): ReactElement => {
    return ReactDOM.createPortal(
        <div className={`${css.modal} ${css.news}`} onClick={onClick} aria-hidden>
            {/* {!notification.length ? (
                <p className={styles.nothing}>Nothing to show</p>
            ) : (
                <ul className={styles.list}>
                    {notification.map((item, index) =>
                        item.type === 'like' ? <Like key={index} {...item} /> : <Comment key={index} {...item} />,
                    )}
                </ul>
            )} */}
        </div>,
        document.querySelector('body'),
    );
};

export default NewsModal;
