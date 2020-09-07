import React, { lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import DetailPost from "./components/Detail/DetailPost";
import NextFormPost from "./components/CreatingPost/FormPost";

import Category from "./components/Category/CatePosts";
import Tag from "./components/TagPosts/TagPosts";


import SideNav from "./components/Common/SideNavigation";
import Header from './components/Common/Header'
import Footer from './components/Footer/Footer'
import CreatingPost from "./components/CreatingPost/CreatingPost";
import Loading from './Loader/LoadingCircle';

const Home = lazy(() => import("./components/Body/Home"));

// import { getState } from './components/Body/Home';



function App() {
  console.log(
    'App render'
  );
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <SideNav />
          <div className="wrapper">
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/home/blog/:alias/:id" component={DetailPost} />
              <Route exact path="/home/category/:alias/:id" component={Category} />
              <Route exact path="/home/tag/:TagName/:id" component={Tag} />
              <Route exact path="/home/create/post" component={CreatingPost} />
              <Route exact path="/home/create/post/next" component={NextFormPost} />
            </main>
            <Footer />
          </div>
        </div>
      </Suspense>
    </Router>

  );
}

export default App;
