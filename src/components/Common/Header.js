import React, { Component } from "react";

import { Link } from 'react-router-dom';


export default class Header extends Component {

  componentDidMount() {
    require("../../assets/animation/js/showNav");
    require("../../assets/animation/js/fixedTop_Bar");

    // call api
  }
  render() {
    return (
      <header id="maincontent" style={{ Top: "70px" }}>
        <div class="top-bar">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="top-bar__logo">
                  <Link to="/">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                      alt=""
                    />
                  </Link>

                </div>
              </div>
              <div class="col">
                <div class="top-bar__bars">
                  <a href=" javascript:void(0)">
                    <i
                      id="js-showNav"
                      class="fa fa-bars"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


