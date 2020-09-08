import React, { useState, useEffect } from "react";
import BlogPost from "./../Body/BlogPost";

import Pagination from './../Body/Pagination';
import Quote from './../Common/Quote';

import Loading from "../../Loader/LoadingPost";


export default function Home(props) {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const idTag = props.match.params.id;
    useEffect(() => {
        fetch(`http://localhost/php/Blog/api/v1/tags/post/${idTag}/page=` + pageNumber)
            .then(response => response.json())
            .then(data => setPosts([...data]), setLoading(false));
    }, [idTag, pageNumber]);

    if (loading) return Loading;



    return (
        <div >
            <Quote />
            {/* // <!-- Blog Content --> */}
            <div class="main-content" style={{ paddingTop: '2rem' }}>
                <div class="container">
                    {/* <!-- Content for each Blog - Cate --> */}
                    <div class="blog-posts">
                        {(loading || blogPosts.length === 0) ? <Loading /> : blogPosts.map((post) => <BlogPost property={post} />)}
                        <Pagination url={'http://localhost/php/Blog/api/v1/tags/post/total/' + idTag} paginate={item => { setPageNumber(item) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}