import React, { Component } from "react";

export default class CommentPost extends Component {


  render() {
    return (
      <div class="comment-replybox-single" id="c942504895747494441-ce">
        <h2>Leave Your Comment</h2>
        <div class="comment-reply-form">
          <form action="">
            <div class="comment-reply-submit">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                style={{
                  height: "70px",
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  resize: "none",
                }}
              ></textarea>
            </div>
            <div class="comment-form-identify">
              <div class="comment-form-guest">
                <div class="comment-form-block">
                  <div class="row">
                    <div class="avatar">
                      <img
                        width="25"
                        height="25"
                        src="https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=150&r=pg&d=mm"
                        alt=""
                      />
                    </div>
                    <div class="indentify-fields">
                      <div class="comment-form-email">
                        <label for="">
                          <span>Email</span>
                          <span>(required)</span>
                        </label>
                        <div class="form-input-shadow">
                          <input type="text" />
                        </div>
                      </div>
                      <div class="comment-form-name">
                        <label for="">
                          <span>Name</span>
                          <span>(required)</span>
                        </label>
                        <div class="form-input-shadow">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="submit-comment-form">
              <button>Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
