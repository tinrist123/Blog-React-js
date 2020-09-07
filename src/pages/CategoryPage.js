import React, { useState, useEffect } from "react";
import BlogPost from "./../Body/BlogPost";

import Pagination from './../Body/Pagination';

import Loading from "../../Loader/LoadingPost";


export default function Home2({ idCate }) {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        fetch('http://localhost/php/Blog/api/v1/category/post/1/page=' + pageNumber)
            .then(response => response.json())
            .then(data => setPosts(data), setLoading(false));
    }, [pageNumber]);


    return (
        <div>
            Content
            {/* // <!-- Blog Content --> */}
            <div class="main-content">
                <div class="container">
                    {/* <!-- Content for each Blog - Cate --> */}
                    <div class="blog-posts">
                        {loading ? <Loading /> : blogPosts.map((post) => <BlogPost property={post} />)}
                        <Pagination url={'http://localhost/php/Blog/api/v1/category/post/total/' + idCate} paginate={item => setPageNumber(item)} />
                    </div>
                </div>
            </div>
        </div>
    )
}