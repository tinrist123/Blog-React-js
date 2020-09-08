import React, { useState } from 'react';

import Options from './CategoryOptions';

import TagsCheckbox from './TagOptions';


export default function FormInput(props) {
    const [onLoadingAddingCate, setAddingCate] = useState(false);
    const [onLoadingAddingTag, setAddingTag] = useState(false);
    const [tagInput, setInput] = useState(['content'])
    const [CateName, setCateName] = useState();
    const [selectedImg, setImg] = useState();
    const [form, setForm] = useState();
    const { content, title } = props.location.state;

    function onClickAddingCate() {
        setAddingCate(!onLoadingAddingCate);
    }

    function onClickAddingTag(e) {
        setAddingTag(true);
        let addingTag = document.getElementsByClassName('newTag');
        if (addingTag.length === 0) return;

        let addingList = [];

        for (let i = 0; i < addingTag.length; i++) {
            addingList.push(addingTag[i].value);
        }
        setInput(tagInput.concat(addingList));
    }

    async function checkDataAndSubmit() {
        let a = document.getElementsByClassName('newTag');

        let key = 'a236a99107c5ae577479faf7b55083bf';
        let url = `https://api.imgbb.com/1/upload?key=${key}`;
        fetch(url, {
            method: 'POST',
            body: form
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => setImg(data)).catch(function (error) {
            alert("error", error);
        });

        let checkboxes = document.getElementsByName('tagList');
        let checkedboxes = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedboxes.push(checkboxes[i]);
            }
        }
        // console.log(selectedImg);
        console.log(tagInput);

        let data = {
            tags: tagInput.concat(a[a.length - 1].value),
            category: document.getElementById('newCate').value,
            content,
            title,
            checkedboxes
        };

        // console.log(data);

    }

    function fileSelectedHandler(event) {
        let form1 = new FormData();
        form1.append('image', event.target.files[0]);
        setForm(form1);
    }
    return (
        <div class="Signin-form">
            <div class="container">
                <div class="card">
                    <div class="cardImg"></div>
                    <div class="card-Form">
                        <h2 class="title">Detail Post</h2>
                        <form action="javascript:void(0)">
                            <label>Upload Image</label>
                            <div className="row">
                                <input type="file" onChange={fileSelectedHandler} />
                            </div>
                            <label for="">Category</label>
                            <div className="row">
                                {(onLoadingAddingCate) ?
                                    <input id={'newCate'} onChange={(event) => setCateName(event.target.value)} type="text" name="newCate" placeholder="New Cate..." style={{ marginBottom: "0" }} />
                                    :
                                    <Options value="CateName" name={'cateOptions'} url={'http://localhost/php/Blog/api/v1/category/all'} />
                                }
                                <button onClick={onClickAddingCate} className="addingCate"><i class="fa fa-plus" ></i></button>
                            </div>
                            <label style={{ marginTop: "1rem" }}>Tags</label>
                            <div className="row">
                                <TagsCheckbox name={'tagOptions'} value="TagName" url={'http://localhost/php/Blog/api/v1/tags'} />
                            </div>
                            <button onClick={onClickAddingTag} className="addingTag"><i class="fa fa-plus" ></i></button>
                            <div className="form-addingTag" style={{ marginTop: "34px" }} >
                                {onLoadingAddingTag &&
                                    tagInput.map((val, index) => {
                                        return <input key={index} className={'newTag'} type="text" name="newTag" />
                                    })}
                            </div>
                            <input onClick={checkDataAndSubmit} type="submit" name="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
