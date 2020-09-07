import React from 'react';
import { useDispatch } from 'react-redux';
import { close } from '../../common/modal/Modal.action';
import styles from './index.module.css';

interface IProps {
    title: string;
    onSubmit: () => void;
}

export default ({ title, onSubmit }: IProps) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.wrp}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.btnWrp}>
                <button
                    className={styles.btn + ' btn btn--gray'}
                    onClick={(): void => {
                        dispatch(close());
                    }}
                >
                    No
                </button>
                <button
                    className={styles.btn + ' btn btn--info'}
                    onClick={(): void => {
                        onSubmit();
                        dispatch(close());
                    }}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};
