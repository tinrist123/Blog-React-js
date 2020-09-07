import React, { useState, useEffect } from 'react';

export default function Pagination({ url, paginate }) {
    const [loading, setLoading] = useState(true);
    const [countPosts, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCount(data), setLoading(false));
    }, [url]);


    const postsPerPage = 5;
    let maxPageNumber = countPosts / postsPerPage;
    let showPageNumber = Math.ceil(maxPageNumber / 2);
    let pageNumber = [];

    if (showPageNumber === 1) return null;
    if (currentPage < maxPageNumber) {
        if (currentPage === showPageNumber) showPageNumber = showPageNumber + 1;
        if (currentPage > showPageNumber) showPageNumber = currentPage + 1;
    }
    else {
        showPageNumber = currentPage;
    }

    for (let i = 1; i <= showPageNumber; i++) {
        pageNumber.push(i);
    }


    if (loading) return <div>Loading...</div>
    return (
        <div class="paging">
            <ul class="paging__pageNumber">
                <li >
                    {pageNumber.includes(currentPage - 1) && <button onClick={() => {
                        setCurrentPage(currentPage - 1);
                        paginate(currentPage - 1);
                    }} >Prev</button>}
                </li>
                {
                    pageNumber.map((number) => {
                        return (
                            <li className={currentPage === number && 'current'}>
                                <button onClick={() => {
                                    setCurrentPage(number)
                                    paginate(number)
                                }}>
                                    {number}
                                </button>
                            </li>
                        )
                    })
                }
                <li>
                    {pageNumber.includes(currentPage + 1) && <button onClick={() => {
                        setCurrentPage(currentPage + 1);
                        paginate(currentPage + 1);
                    }}> Next </button>}
                </li>
            </ul>
        </div >
    );
}


