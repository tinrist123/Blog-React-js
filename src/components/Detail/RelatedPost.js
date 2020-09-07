import React, { Component } from 'react';
import Wave from '../../Loader/Wave';

export default class PostContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            relatedPost: []
        }
    }

    async componentDidMount() {
        let url = 'http://localhost/php/Blog/api/v1/post/related/' + this.props.id;
        let response = await fetch(url);
        let data = await response.json()

        this.setState({
            ...this.state,
            loading: false,
            relatedPost: data,
        })
    }

    render() {
        const { loading, relatedPost } = this.state;
        if (loading) return <Wave />

        return (
            <div class="post-footer">
                <div class="share-box">
                    <h8 class="share-title">SHARE THIS:</h8>
                    <div class="share-art">
                        <a
                            class="fac-art"
                            href="http://www.facebook.com/sharer.php?u=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                            onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i class="fa fa-facebook"></i>
                            <span class="resp_del"> Facebook</span>
                        </a>
                        <a
                            class="twi-art"
                            href="http://twitter.com/share?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                            onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i class="fa fa-twitter"></i>
                            <span class="resp_del2"> Twitter</span>
                        </a>
                        <a
                            class="pin-art"
                            href="http://pinterest.com/pin/create/button/?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;media=https://1.bp.blogspot.com/-X5nvC5PWi-Y/XY3wc2ufM1I/AAAAAAAAKq0/Im59LMaeFjQpbn6mXtezWQvDDwFeTkEwACLcBGAsYHQ/s1600/3.jpg&amp;description=Lorem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt. Sit et liber minimum tacimates, sea no doctus fast..."
                            onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i class="fa fa-pinterest"></i>
                            <span class="resp_del4"> Pinterest</span>
                        </a>
                        <a
                            class="lin-art"
                            href="http://www.linkedin.com/shareArticle?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                            onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i class="fa fa-linkedin-square"></i>
                            <span class="resp_del5"> Linkedin</span>
                        </a>
                    </div>
                </div>
                <div class="post-related">
                    <div class="row">
                        {relatedPost.map(post => {
                            return (
                                <div class="col" >
                                    <div class="content-related">
                                        <div class="imgRelated-thump">
                                            <a
                                                href={`/home/blog/${post.Alias}/${post.id}`}
                                                style={{
                                                    backgroundImage: `url('${post.Image}')`,
                                                    backgroundSize: "100%",
                                                    backgroundPosition: "center",
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            ></a>
                                        </div>
                                        <h3 class="related-title">
                                            <a href={"/home/blog/" + post.id}>{post.Title}</a>
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}