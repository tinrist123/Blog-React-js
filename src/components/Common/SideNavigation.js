import React, { Component } from "react";

import { Link } from 'react-router-dom';

import TagPlace from './TagsPlace';


export default class SideNavagation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onloadingCate: false,
      cates: [],
    }
  }

  async componentDidMount() {
    require("../../assets/animation/js/showNav");

    let url = 'http://localhost/php/Blog/api/v1/category';

    let response = await fetch(url);
    let data = await response.json();


    this.setState((state) => ({
      ...state,
      cates: data,
    }))
  }

  async loadingCategory() {
    this.setState((state) => ({
      onloadingCate: !state.onloadingCate,

    }))

  }

  render() {
    const { onloadingCate, cates } = this.state;

    return (
      <div>
        <div className="sidebar-menu__bgBlack"></div>
        <div className="sidebar-menu">
          <div className="sidebar-menu__nav">
            <ul className="navigation">
              <li>
                <Link to="/home/create/post">New Blog</Link>
              </li>
              <li>
                <a onClick={() => this.loadingCategory()}>Category</a>
                <ul className="sub-navi-cate" style={{ marginLeft: '1em', }}>
                  {onloadingCate && cates.map((cate) => {
                    return (
                      <li><Link to={`/home/category/${cate.Alias}/${cate.id}`}>{cate.CateName}</Link></li>
                    )
                  })}
                </ul>
              </li>
              <li>
                <a href="#contact-me">Contact me</a>
              </li>
              <li>
                <a href={`/home/blog/about-me/42`}>About me</a>
              </li>
              <li id="close-click">
                <a href="javascript:void(0)">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="sidebar-menu__search">
              <form action="">
                <div className="form-group">
                  <label for="">
                    <input
                      type="text"
                      name="txtSearch"
                      className="txtSearch"
                      placeholder="Keywords"
                    />
                    <input type="submit" value="GO" />
                  </label>
                </div>
              </form>
              <TagPlace />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
