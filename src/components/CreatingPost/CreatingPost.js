import React, { useState } from 'react';

import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import { useHistory } from 'react-router-dom';


export default function CreatePost() {
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState("");
    const history = useHistory();

    function onNextPage() {
        if (title === "") {
            return alert('Chưa đặt tên !!');
        }
        if (content === null) return alert('Văn Bản còn trống !!!');
        history.push('/home/create/post/next', { content, title });
    }

    function handleChange(Editorcontent) {
        setContent(Editorcontent);
    }

    return (
        <div class="post-create-form">
            <div class="title-input">
                <div class="border-bottom"></div>
                <span class='title-placeholder'>Tiêu Đề</span>
                <input type="text" onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div class="submit-form">
                <button onClick={onNextPage} class="submit-post" type="submit">Đăng Bài <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
            <div class="container" style={{ height: '400px' }}>
                <div >
                    <SunEditor name={'editor'} value={content} onChange={handleChange} setOptions={{
                        height: 200,
                        buttonList: [
                            ["undo", "redo"],
                            ["font", "fontSize", "formatBlock"],
                            ["bold", "underline", "italic", "strike", "textStyle", 'blockquote', "subscript", "superscript"],
                            ["removeFormat"],
                            "/",
                            ["fontColor", "hiliteColor"],
                            ["outdent", "indent"],
                            ["align", "horizontalRule", "list", "table"],
                            ["link"],
                            ["fullScreen", "showBlocks", "codeView"],
                            ["preview"],
                        ],

                    }}
                    />
                </div>
            </div>
        </div>

    )

}