import React, { Component } from 'react';

import TitleCate from './TitleCate';

import TagRow from './TagRow';

import Wave from '../../Loader/Wave';

export default class PostContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            post: []
        }
    }

    async componentDidMount() {
        let url = 'http://localhost/php/Blog/api/v1/post/' + this.props.id;
        let response = await fetch(url);
        let data = await response.json()

        this.setState({
            ...this.state,
            loading: false,
            post: data,
        })
    }

    render() {
        const { loading } = this.state;
        if (loading) {
            return <Wave />
        }
        const { post } = this.state;
        return (
            <div class="main-content__detailBlog">
                <div class="detailBlog__description">
                    <TitleCate id={this.props.id} />
                    <h2 class="title">{post.Title}</h2>
                    <div class="timestamp-cate">
                        <span class="timestamp">
                            <a href="javscript:void(0)" >{post.created_at}</a>
                        </span>
                        <TagRow id={this.props.id} />
                    </div>
                </div>
                <div class="detailBlog__picture">
                    <img
                        src={`${post.Image}`}
                        alt="Waiting"
                    />
                </div>
                <div class="detailBLog__content">
                    <article>
                        <div dangerouslySetInnerHTML={{ __html: post.Content }} />
                    </article>
                </div>
            </div>
        )
    }
}