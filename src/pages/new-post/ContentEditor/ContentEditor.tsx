import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default class ContentEditor extends Component {
  handleEditorChange = (e: any): void => {
    console.log('Content was updated:', e.target.getContent());
  };

  render() {
    return (
      <Editor
        apiKey="fbjg6yiybznikw5yv4zrbi1asyt38cay9443z5k3z004a6ag"
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
