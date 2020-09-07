import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function TagRow({ id }) {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = 'http://localhost/php/Blog/api/v1/post/tags/' + id;
        fetch(url).then(res => res.json()).then(data => setTags(data), setLoading(false))
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <span class="cate">
            <i class="fa fa-folder-open-o"></i>
            {tags.map((tag) => {
                return (
                    <Link to={`/home/tag/${tag.TagName}/${tag.id}`}>{tag.TagName}</Link>
                )
            })}
        </span>
    )
}