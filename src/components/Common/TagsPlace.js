import React, { useState, useEffect } from 'react';

import Loading from '../../Loader/Loading'
import { Link } from 'react-router-dom';

export default function TagsPlace() {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = 'http://localhost/php/Blog/api/v1/tags';
        fetch(url)
            .then(response => response.json())
            .then(data => setTags(data), setLoading(false));
    }, []);

    if (loading) return <Loading />

    return (
        <div className={'tag-place'}>
            <h3>Tags</h3>
            <ul className={"tags"}>
                {tags.map(tag => {
                    return <li><Link to={`/home/tag/${tag.TagName}/${tag.id}`}>{tag.TagName}</Link></li>
                })}
            </ul>
        </div>
    )
}