import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { getContent } from '../../../../redux/selectors';
import 'react-quill/dist/quill.snow.css';
import './index.css';

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

const Content = (): ReactElement => {
    const value = useSelector(getContent);

    return (
        <ReactQuill
            theme="snow"
            placeholder="Main post content ..."
            modules={modules}
            formats={formats}
            value={value}
            onChange={(text: string): void => {
                console.log(text);
            }}
        />
    );
};

export default Content;
