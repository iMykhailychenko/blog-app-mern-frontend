import React, { ReactElement, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import notifications from '../../../Common/Notifications';

const ONE_MB = 1048576; // 1 Megabytes = 1048576 Bytes

const Image = Quill.import('formats/image');
Image.sanitize = function (url) {
    if (url.length > ONE_MB) {
        notifications('error', 'Sorry, your image is too large. Max image size is 1 MB');
        return null;
    }
    return url;
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
            },
        }),
        [],
    );

    const handleChange = (payload: string): void => {
        dispatch({ type: types.NEW_POST_CONTENT, payload });
    };

    return <ReactQuill value={content} theme="snow" onChange={handleChange} modules={modules} formats={formats} />;
};

export default ContentEditor;
