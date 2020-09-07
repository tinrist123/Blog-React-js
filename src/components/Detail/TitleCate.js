import React, { Component } from 'react';

import { Link } from 'react-router-dom'

export default class TitleCate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            cate: []
        }
    }

    async componentDidMount() {
        let url = 'http://localhost/php/Blog/api/v1/post/category/' + this.props.id;
        let response = await fetch(url);
        let data = await response.json()

        this.setState({
            ...this.state,
            loading: false,
            cate: data,
        })
    }

    render() {
        const { loading, cate } = this.state;
        if (loading) return <div>Loading..</div>;
        return (
            <div class="title-cate">
                <ul class="category row">
                    <li>
                        <a class="active" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <span>&nbsp;/&nbsp;</span>
                    </li>
                    <li>
                        <Link to={`/home/category/${cate.Alias}/${cate.id}`}>{cate.CateName}</Link>
                    </li>
                    <li>
                        <span>&nbsp;/&nbsp;</span>
                    </li>
                    <li>
                        <a href="#home">Blog Name</a>
                    </li>
                </ul>
            </div>
        );
    }
}