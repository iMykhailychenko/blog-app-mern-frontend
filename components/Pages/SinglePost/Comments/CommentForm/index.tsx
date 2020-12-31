import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import AttachedImg from '../AttachedImg';
import css from './index.module.css';

interface IProps {
    onSubmit: (value: { id: string | string[]; form: FormData }) => void;
}

const CommentForm = ({ onSubmit }: IProps): ReactElement => {
    const { query } = useRouter();
    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setText(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        const form = new FormData();
        file && form.append('attachment', file);
        form.append('text', text);

        onSubmit({ id: query.postId, form });
        setText('');
        setFile(null);
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
