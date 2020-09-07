import React, { Component } from "react";

import Home from "../components/Body/Home";
import Footer from "../components/Footer/Footer";
import CommonBlock from "../components/Common/index";
import SideNavigation from "../components/Common/SideNavigation";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideNavigation />
        <div className="wrapper">
          <CommonBlock />
          <Home />
          <Footer />
        </div>
      </div>
    );
  }
}
