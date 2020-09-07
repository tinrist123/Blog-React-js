import React, { Component } from "react";

import Quote from '../Common/Quote';

import PostContent from './PostContent';
import RelatedPost from './RelatedPost';
import UserComment from './UserComment';

export default class DetailPost extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Quote />
        {/* //   < !--Blog Content-- > */}
        <div class="main-content">
          <div class="container">
            <PostContent id={id} />
            <RelatedPost id={id} />
            <UserComment id={id} />
          </div>
        </div>
      </div>
    );
  }
}
