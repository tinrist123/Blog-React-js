import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class InfoUserPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            user: [],
        }
    }

    async componentDidMount() {
        // add animation js scrips file
        require('../../assets/animation/js/nextActive');

        let url = 'http://localhost/php/Blog/api/v1/post/user/' + this.props.idBlog;

        let response = await fetch(url);
        let data = await response.json();
        this.setState((state) => ({
            loading: false,
            user: data
        }))
    }

    render() {
        const { created } = this.props;
        const { loading, user } = this.state;
        if (loading) return <div>Loading....</div>
        return (
            <div id="meta-post">
                <i className="fa fa-user"></i>
                <Link
                    className="g-profile"
                    to={"/home/blog/" + this.props.idBlog}
                >
                    <span itemProp="name">{user.Name}</span>
                </Link>
                <span
                    class="published timeago"
                    title="2015-03-04T04:16:00-08:00"
                >
                    {created}
                </span>
            </div>
        )
    }
}