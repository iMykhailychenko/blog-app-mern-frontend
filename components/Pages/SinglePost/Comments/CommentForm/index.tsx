import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import AttachedImg from '../AttachedImg';
import css from './index.module.css';

interface IProps {
    value?: string;
    hasAttachment?: boolean;
    onSubmit: (value: { id: string | string[]; form: FormData }) => void;
}

const CommentForm = ({ onSubmit, value = '', hasAttachment = true }: IProps): ReactElement => {
    const { query } = useRouter();
    const [text, setText] = useState<string>(value);
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setText(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if (!text) return;

        const form = new FormData();
        file && form.append('attachment', file);
        form.append('text', text);

        onSubmit({ id: query.postId, form });
        setText('');
        setFile(null);
    };

    return (
        <form action="#" method="POST">
            <TextareaAutosize
                className={css.comment}
                name="comment"
                cols={30}
                rows={10}
                value={text}
                placeholder="your comment"
                onChange={handleChange}
            />

            {hasAttachment && <AttachedImg file={file} onChange={setFile} />}

            <button className={clsx('btn btn--blue', !text && 'btn--disabled')} type="submit" onClick={handleSubmit}>
                Comment
            </button>
        </form>
    );
};

export default CommentForm;
