import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';

const AttachedImg = (): ReactElement => {
    const dispatch = useDispatch();
    console.log(dispatch);
    // const file = useSelector(getCommentImg);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { files } = event.target;
        if (!files || !files.length) return;
        // dispatch(addImg(files[0]));
    };

    // return file ? (
    //     <div className={styles.wrp}>
    //         <div className={styles.close}></div>
    //         <img src={window.URL.createObjectURL(file)} alt="attachment" />
    //     </div>
    // ) : (
    //     <div className={styles.container}>
    //         <FontAwesomeIcon icon={faPaperclip} />
    //         <span className={styles.text}>Max img size 5mb (jpg, jpeg, png, webp, gif)</span>

    //         <input
    //             className={styles.input}
    //             onChange={handleChange}
    //             type="file"
    //             name="attachment"
    //             accept=".jpg, .jpeg, .png, .webp, .gif"
    //         />
    //     </div>
    // );
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faPaperclip} />
            <span className={styles.text}>Max img size 5mb (jpg, jpeg, png, webp, gif)</span>

            <input
                className={styles.input}
                onChange={handleChange}
                type="file"
                name="attachment"
                accept=".jpg, .jpeg, .png, .webp, .gif"
            />
        </div>
    );
};

export default AttachedImg;
