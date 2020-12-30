import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    file: File | null;
    onChange: (value: File | null) => void;
}

const AttachedImg = ({ file, onChange }: IProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { files } = event.target;
        if (!files || !files.length) return;
        onChange(files[0]);
    };

    const handleRemove = (): void => {
        onChange(null);
    };

    return file ? (
        <div className={css.wrp} onClick={handleRemove} aria-hidden>
            <div className={css.close} />
            <img src={window.URL.createObjectURL(file)} alt="attachment" />
        </div>
    ) : (
        <div className={css.container}>
            <FontAwesomeIcon icon={faPaperclip} />
            <span className={css.text}>Max img size 5mb (jpg, jpeg, png, webp, gif)</span>
            <input
                className={css.input}
                onChange={handleChange}
                type="file"
                name="attachment"
                accept=".jpg, .jpeg, .png, .webp, .gif"
            />
        </div>
    );
};

export default AttachedImg;
