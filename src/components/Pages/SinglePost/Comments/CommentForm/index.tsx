import React, { ChangeEvent, ReactElement, useState } from 'react';

import AttachedImg from '../AttachedImg';
import styles from './index.module.css';

interface IProps {
    value?: string;
    edit?: boolean;
    onChange: (text: string) => void;
}

const CommentForm = ({ value = '', edit = false, onChange }: IProps): ReactElement => {
    const [text, setText] = useState(value);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setText(event.target.value);
        onChange(event.target.value);
    };

    return (
        <form action="#" method="POST">
            <textarea
                className={styles.comment}
                name="comment"
                cols={30}
                rows={10}
                value={text}
                placeholder="your comment"
                onChange={handleChange}
            />

            {!edit && <AttachedImg />}

            <button className="btn btn--blue" type="submit">
                Comment
            </button>
        </form>
    );
};

export default CommentForm;
