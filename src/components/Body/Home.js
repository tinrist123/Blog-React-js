import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

import Quote from '../Common/Quote';
import CategoriesMenu from './CategoriesMenu';
import Pagination from './Pagination';

import Loading from "../../Loader/LoadingPost";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        fetch('http://localhost/php/Blog/api/v1/post/new/page/' + pageNumber)
            .then(response => response.json())
            .then(data => setPosts(data), setLoading(false));
    }, [pageNumber]);


    return (
        <div>
            <Quote />
            {/* // <!-- Blog Content --> */}
            <div class="main-content">
                <div class="container">
                    <CategoriesMenu />
                    {/* <!-- Content for each Blog --> */}
                    <div class="blog-posts">
                        {loading ? <Loading /> : blogPosts.map((post) => <BlogPost property={post} />)}
                        <Pagination url={'http://localhost/php/Blog/api/v1/post/total'} paginate={item => setPageNumber(item)} />
                    </div>
                </div>
            </div>
        </div>
    )
}