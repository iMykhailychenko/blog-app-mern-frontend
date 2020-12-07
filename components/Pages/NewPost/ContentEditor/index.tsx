import Quill from 'quill';
import React, { ReactElement, useEffect, useRef } from 'react';

const instance = {
  editor: null,
};

const options = {
  debug: 'info',
  // modules: {
  //   toolbar: '#toolbar',
  // },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'snow',
};

const ContentEditor = (): ReactElement => {
  const editorRef = useRef(null);
  console.log();

  useEffect(() => {
    if (editorRef?.current) {
      instance.editor = new Quill(editorRef.current, options);

      return () => {
        delete instance.editor;
      };
    }
  }, [editorRef]);

  return <div ref={editorRef} />;
};

export default ContentEditor;
