import React, { Component } from "react";
import { Link } from "react-router-dom";
import InforUserPost from './InforUserPost';


export default class BlogPost extends Component {


  render() {
    const { Image, Shor_Description, Title, created_at, id, CateName, Alias } = this.props.property;

    return (

      <div class="post-outer">
        <div class="post">
          <div class="block-image">
            <div class="thump">
              <Link to={`/home/blog/${Alias}/` + id}
                href=""
                style={{
                  backgroundImage: `url('${Image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                }}
              ></Link>
            </div>
          </div>
          <div class="post-decription">
            <div class="article">
              <article>
                <div class="post-label">{CateName}</div>
                <font class="retitle">
                  <h2 class="post-title entry-title">
                    <Link to={`/home/blog/${Alias}/` + id}>
                      {Title}
                    </Link>
                  </h2>
                </font>
                <div class="date-header">
                  <InforUserPost created={(created_at)} idBlog={id} />
                  <div class="resumo">
                    <span>
                      {Shor_Description}
                    </span>
                  </div>
                  <div class="post-footer-home">
                    <div class="share-box">
                      <div class="share-art">
                        <a
                          class="fac-art"
                          href="http://www.facebook.com/sharer.php?u=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                          rel="nofollow"

                        >
                          <i class="fa fa-facebook"></i>
                          <span class="resp_del"></span>
                        </a>
                        <a
                          class="twi-art"
                          href="http://twitter.com/share?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                          // onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                          rel="nofollow"
                        >
                          <i class="fa fa-twitter"></i>
                          <span class="resp_del2"></span>
                        </a>
                        <a
                          class="pin-art"
                          href="http://pinterest.com/pin/create/button/?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;media=https://1.bp.blogspot.com/-X5nvC5PWi-Y/XY3wc2ufM1I/AAAAAAAAKq0/Im59LMaeFjQpbn6mXtezWQvDDwFeTkEwACLcBGAsYHQ/s1600/3.jpg&amp;description=Lorem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt. Sit et liber minimum tacimates, sea no doctus fast..."
                          // onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                          rel="nofollow"

                        >
                          <i class="fa fa-pinterest"></i>
                          <span class="resp_del4"></span>
                        </a>
                        <a
                          class="lin-art"
                          href="http://www.linkedin.com/shareArticle?url=https://janice-slider-themexpose.blogspot.com/2015/03/my-summer-outfits-glasses.html&amp;title=MY SUMMER OUTFITS &amp; GLASSES"
                          // onClick="window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;"
                          rel="nofollow"

                        >
                          <i class="fa fa-linkedin-square"></i>
                          <span class="resp_del5"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
