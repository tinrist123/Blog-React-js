import React, { lazy, useState, Suspense, Component } from "react";

import Header from "./Header";

const Quote = lazy(() => import('./Quote'))

export default class CommonBlock extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quote />
      </div>
    );
  }
}
