import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import React, { ReactElement, useEffect, useRef } from 'react';

const instance: { editor?: null | unknown } = {};

const ContentEditor = (): ReactElement | null => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef?.current) {
            delete instance.editor;

            instance.editor = new EditorJS({
                holder: editorRef.current,
                tools: {
                    header: Header,
                    list: List,
                },
            });
        }
    }, [editorRef]);

    return <div ref={editorRef} />;
};

export default ContentEditor;
