    import React from 'react';
    import ReactQuill from 'react-quill';
    import 'react-quill/dist/quill.snow.css';
    import './index.css';
    const Editor = ({ onChange, name, value }) => {
    
        const modules = {
            toolbar: [
                [{ 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link'],
                ['clean']
            ],
        }
        return (
	<div style={{ background: 'white'  }}>
            <ReactQuill
                theme="snow"
                value={value}
                modules={modules}
                onChange={(content, event, editor) => {
                    onChange({ target: { name, value: content } });
                }}
            />
	</div>
        );
    };
    export default Editor;
