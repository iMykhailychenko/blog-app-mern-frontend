// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { contentActions } from '../../../redux/post-editor/editorActions';
// // libs
// import ReactQuill from 'react-quill';
// // styles
// import 'react-quill/dist/quill.snow.css';
// import './theme.css';

// const modules = {
//     toolbar: [
//         [{ header: [2, 3, 4, 5, false] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [
//             { list: 'ordered' },
//             { list: 'bullet' },
//             { indent: '-1' },
//             { indent: '+1' },
//         ],
//         ['code-block', 'link', 'image'],
//         ['clean'],
//     ],
// };

// const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'code-block',
//     'link',
//     'image',
// ];

// const ContentEditor = () => {
//     const dispatch = useDispatch();

//     const handleChange = (value: string): void => {
//         dispatch(contentActions(value));
//     };

//     return (
//         <ReactQuill
//             theme="snow"
//             placeholder="Write youre content here"
//             onChange={handleChange}
//             modules={modules}
//             formats={formats}
//         />
//     );
// };

// export default ContentEditor;

import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
// import styles from './ContentEditor.module.css';

const ContentEditor = () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty(),
    );

    return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default ContentEditor;
