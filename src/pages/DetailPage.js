import React, { Component } from "react";

import DetailPost from "../components/Detail/DetailPost";
import Footer from "../components/Footer/Footer";
import CommonBlock from "../components/Common/index";
import SideNavigation from "../components/Common/SideNavigation";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideNavigation />
        <div className="wrapper">
          <CommonBlock />
          <DetailPost />
          <Footer />
        </div>
      </div>
    );
  }
}
