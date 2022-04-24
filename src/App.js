import React from "react";
import AboutContent from "./component/AboutContent";
import ContentJumbotron from "./component/ContentJumbotron";
import FooterContent from "./component/FooterContent";
import HeaderNav from "./component/HeaderNav";
import ProjectContent from "./component/ProjectContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import LayoutHome from "./component/LayoutHome";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<LayoutHome />}></Route>
        <Route path="about" element={<AboutContent />}></Route>
        <Route path="project" element={<ProjectContent />}></Route>
      </Routes>
      <FooterContent />
    </React.Fragment>
  );
}

export default App;
