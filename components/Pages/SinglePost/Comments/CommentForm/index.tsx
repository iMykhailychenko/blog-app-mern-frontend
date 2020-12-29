import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import types from '../../../../../redux/types';
import AttachedImg from '../AttachedImg';
import css from './index.module.css';

const CommentForm = (): ReactElement => {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setText(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        const form = new FormData();
        file && form.append('attachment', file);
        form.append('text', text);
        dispatch({ type: types.POST_COMMENT_START, payload: { id: query.postId, form } });
    };

    return (
        <form action="#" method="POST">
            <textarea
                className={css.comment}
                name="comment"
                cols={30}
                rows={10}
                value={text}
                placeholder="your comment"
                onChange={handleChange}
            />

            <AttachedImg file={file} onChange={setFile} />

            <button className="btn btn--blue" type="submit" onClick={handleSubmit}>
                Comment
            </button>
        </form>
    );
};

export default CommentForm;
