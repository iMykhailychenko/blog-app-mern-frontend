import React, { useState } from 'react';
import ReactQuill from 'react-quill';

// styles
import 'react-quill/dist/quill.snow.css';
import './theme.css';

interface Props {}

const modules = {
  toolbar: [
    [{ header: [2, 3, 4, 5, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['code-block', 'link', 'image'],
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
  'code-block',
  'link',
  'image',
];

const ContentEditor: React.FC<Props> = () => {
  const [value, setValue] = useState('');
  return (
    <ReactQuill
      theme="snow"
      value={value}
      placeholder="Write youre content here"
      onChange={setValue}
      modules={modules}
      formats={formats}
    />
  );
};

export default ContentEditor;
