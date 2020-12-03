import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm';
// import User from '../../../../Common/User';
import styles from './index.module.css';

const EditModal = ({ text }: { text: string }): ReactElement => {
    const dispatch = useDispatch();
    const handleChange = (value: string): void => {

    };

    return (
        <div className={styles.container}>
            {/* <User {...user} /> */}
            <br />
            <CommentForm value={text} onChange={handleChange} edit />
        </div>
    );
};

export default EditModal;
