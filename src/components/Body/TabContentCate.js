import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Spinner from '../../Loader/Spinner'

export default function Tab(props) {
    const [loading, setLoading] = useState(true);
    const [posts_related_cate, setPots] = useState([]);

    useEffect(() => {
        fetch('http://localhost/php/Blog/api/v1/post/category/image/' + props.id)
            .then(response => response.json())
            .then(data => setPots(data), setLoading(false));
    }, [props.id]);


    return (
        <div class="tab-content">
            <div class="tabpanel">
                <div className="row" >
                    {loading ? <Spinner /> : posts_related_cate.map(post => {
                        return (
                            <div className="col">
                                <Link to={`/home/blog/${post.Alias}/${post.id}`}>
                                    <img
                                        src={`${post.Image}`}
                                        alt=""
                                    />
                                </Link>
                            </div>);
                    })}
                </div>
            </div>
        </div>
    );
}