import { Delta } from 'quill';
import React, { ReactElement, useEffect, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'code',
    'link',
    'image',
    'code-block',
];

const getInput = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.jpg, .jpeg, .pngs');
    return input;
};

// const event = new Event('change');

const ContentEditor = (): ReactElement => {
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const content = useSelector<IState, string>(state => state.posts.newPost.content);

    const input = getInput();
    const imageHandler = (): void => {
        if (editorRef.current) {
            const quillEditor = editorRef.current.editor;
            const cursorPosition = quillEditor.getSelection().index;

            input.onchange = () => {
                if (input.files[0]) {
                    const value = window.URL.createObjectURL(input.files[0]).replace('blob:', '');
                    console.log(value);

                    quillEditor.insertEmbed(cursorPosition, 'image', 'blob:' + value, 'user');
                    quillEditor.setSelection(cursorPosition + 1);
                }
            };
            input.click();
        }
    };

    useEffect(() => {
        return () => {
            input.remove();
        };
    }, []);

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [2, 3, 4, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                    ['link', 'image'],
                    ['code-block'],
                    ['clean'],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        [],
    );

    const handleChange = (payload: string, d): void => {
        console.log(d);
        dispatch({ type: types.NEW_POST_CONTENT, payload });
    };

    return (
        <ReactQuill
            ref={editorRef}
            value={content}
            theme="snow"
            onChange={handleChange}
            modules={modules}
            formats={formats}
        />
    );
};

export default ContentEditor;
