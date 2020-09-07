import React, { Component } from 'react';
import CommentPost from './CommentPost'


import Wave from '../../Loader/Wave';

export default class UserComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            comments: [],
            clickedReplies: false,
        }
    }
    async componentDidMount() {
        let url = 'http://localhost/php/Blog/api/v1/post/comment/' + this.props.id;
        let response = await fetch(url);
        let data = await response.json();
        this.setState((state) => ({
            ...state,
            loading: false,
            comments: data,
        }))
    }

    showCmt() {
        this.setState((state) => ({
            clickedReplies: !state.clickedReplies
        }))
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Wave />
        const { comments } = this.state;
        console.log(comments);
        return (
            <div class="response-place">
                <div class="tab-header">
                    <h2 class="notice-text">Post Comments</h2>
                    <ul class="response-place__taskbar">
                        <li>
                            <a class="activeTab" href="javascript:void(0)">
                                BLOGGER{" "}
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">FACEBOOK</a>
                        </li>
                    </ul>
                </div>
                <div class="content-tab">
                    <div class="blogger-tab">
                        <div class="comments">
                            <h4>{comments.length} comments:</h4>
                            <div class="comments-content">
                                <div class="comment-holder">
                                    <div class="comment-thread toplevel-thread">
                                        <ol>
                                            {comments.map((comment) => {
                                                return (
                                                    <li class="comment" key={comment.id} >
                                                        <div class="avatar-image-container">
                                                            <img
                                                                src={comment.Avatar}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="comment-block">
                                                            <div class="comment-header">
                                                                <cite class="user">
                                                                    <a
                                                                        href="https://www.blogger.com/profile/01341102157123104056"
                                                                        rel="nofollow"
                                                                    >
                                                                        Lara Tynnauer
                                                            </a>
                                                                </cite>
                                                                <span class="icon user"></span>
                                                                <span class="datetime secondary-text">
                                                                    <a
                                                                        rel="nofollow"
                                                                        href="https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html?showComment=1470646634575#c942504895747494441"
                                                                    >
                                                                        {comment.created_at}
                                                                    </a>
                                                                </span>
                                                            </div>
                                                            <p class="comment-content">
                                                                {comment.Comment}
                                                            </p>
                                                            <span class="comment-actions secondary-text">
                                                                <a
                                                                    class="comment-reply"
                                                                    target="_self"
                                                                    data-comment-id="942504895747494441"
                                                                    href="javascript:;"
                                                                >
                                                                    Reply
                                                            </a>
                                                                <span class="item-control blog-admin blog-admin pid-483992903">
                                                                    <a
                                                                        target="_self"
                                                                        href="https://www.blogger.com/delete-comment.g?blogID=367552797195162735&amp;postID=942504895747494441"
                                                                    >
                                                                        Delete
                                                            </a>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div class="comment-replies">
                                                            <div
                                                                id="c942504895747494441-rt"
                                                                class="comment-thread inline-thread"
                                                            >
                                                                <span class="thread-toggle thread-expanded">
                                                                    <span class="thread-arrow"></span>
                                                                    <span class="thread-count">
                                                                        <button onClick={() => this.showCmt()} href="javascript;;">
                                                                            Replies
                                                                </button>
                                                                    </span>
                                                                </span>
                                                                <ol
                                                                    id="c942504895747494441-ra"
                                                                    class="thread-chrome thread-expanded"
                                                                >
                                                                    <div>
                                                                        <li
                                                                            class="comment"
                                                                            id="c6475910531500269063"
                                                                        >
                                                                            <div class="avatar-image-container">
                                                                                <img
                                                                                    src="//resources.blogblog.com/img/blank.gif"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div class="comment-block">
                                                                                <div class="comment-header">
                                                                                    <cite class="user">
                                                                                        <a
                                                                                            href="https://www.blogger.com/profile/12587469525509222019"
                                                                                            rel="nofollow"
                                                                                        >
                                                                                            Tiara Mirna
                                                                                </a>
                                                                                    </cite>
                                                                                    <span class="icon user"></span>
                                                                                    <span class="datetime secondary-text">
                                                                                        <a
                                                                                            rel="nofollow"
                                                                                            href="https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html?showComment=1520217390602#c6475910531500269063"
                                                                                        >
                                                                                            March 4, 2018 at 6:36 PM
                                                                                </a>
                                                                                    </span>
                                                                                </div>
                                                                                <p class="comment-content">check</p>
                                                                                <span class="comment-actions secondary-text">
                                                                                    <span class="item-control blog-admin blog-admin pid-483992903">
                                                                                        <a
                                                                                            target="_self"
                                                                                            href="https://www.blogger.com/delete-comment.g?blogID=367552797195162735&amp;postID=6475910531500269063"
                                                                                        >
                                                                                            Delete
                                                                                </a>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="comment-replies">
                                                                                <div
                                                                                    id="c6475910531500269063-rt"
                                                                                    class="comment-thread inline-thread hidden"
                                                                                >
                                                                                    <span class="thread-toggle thread-expanded">
                                                                                        <span class="thread-arrow"></span>
                                                                                        <span class="thread-count">
                                                                                            <button
                                                                                                onClick={() => this.showCmt()}
                                                                                                href="javascript:;"
                                                                                            >
                                                                                                Replies
                                                                                    </button>
                                                                                        </span>
                                                                                    </span>
                                                                                    <ol
                                                                                        id="c6475910531500269063-ra"
                                                                                        class="thread-chrome thread-expanded"
                                                                                    >
                                                                                        {/* Insert cmt here */}
                                                                                        {this.state.clickedReplies && <CommentPost />}
                                                                                        {/* {/* End */}
                                                                                    </ol>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </div>

                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                            {/* Leave Your Cmt */}
                                            <CommentPost />
                                            {/* Here */}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}