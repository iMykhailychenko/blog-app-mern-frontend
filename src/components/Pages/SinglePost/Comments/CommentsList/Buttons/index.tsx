import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import EditModal from '../../EditModal';
import CommentModal from '../../CommentModal';
import Confirm from '../../../../../Common/Confirm';
import Likes from '../../../../../Common/Likes';
import { getAuth } from '../../../../../../redux/selectors';
import { IComment } from '../../../../../../interfaces';
import styles from '../index.module.css';

const Buttons = (comment: IComment): ReactElement => {
    const { isAuth } = useSelector(getAuth);

    return (
        <div className={styles.likes}>
            <Likes like={comment.like} dislike={comment.dislike} click />

            {isAuth && (
                <>
                    <button className={styles.link} type="button">
                        Answer
                    </button>

                    <button className={styles.link} type="button">
                        Edit
                    </button>

                    <button className={styles.link} type="button">
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default Buttons;
