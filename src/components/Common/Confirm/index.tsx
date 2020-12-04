import React, { ReactElement } from 'react';

// import { useDispatch } from 'react-redux';
import styles from './index.module.css';

interface IProps {
    title: string;
    onSubmit: () => void;
}

const Confirm = ({ title, onSubmit }: IProps): ReactElement => {
    console.log(onSubmit);
    return (
        <div className={styles.wrp}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.btnWrp}>
                <button className={styles.btn + ' btn btn--gray'}>No</button>
                <button className={styles.btn + ' btn btn--info'}>Yes</button>
            </div>
        </div>
    );
};

export default Confirm;
