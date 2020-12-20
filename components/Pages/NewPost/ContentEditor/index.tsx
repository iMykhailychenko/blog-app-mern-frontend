import React, { ReactElement } from 'react';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';

const modules = {
    toolbar: [
        [{ header: [2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['code-block'],
        ['clean'],
    ],
};

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

const ContentEditor = (): ReactElement => {
    const dispatch = useDispatch();
    const content = useSelector<IState, string>(state => state.posts.newPost.content);

    const handleChange = (payload: string) => {
        dispatch({ type: types.NEW_POST_CONTENT, payload });
    };

    return <ReactQuill value={content} theme="snow" onChange={handleChange} modules={modules} formats={formats} />;
};

export default ContentEditor;
