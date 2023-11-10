import * as React from "react";
// import Navbar from "./navbar";
import Footer from "./footer"
import Newnav from "./newnav";
import "../styles/navstyles.css";

var year = new Date().getFullYear;

// This is the layout component. It contains the NavBar and Footer components. Every page should utilize this and wrap their
// content with <Layout> </Layout> - Jacob

export default function Layout(props) {
  return (
    <div>
      {/* <Navbar transparent={!!props.transparent}/> */}
      <Newnav/>
      <div id="page-container">
        <div id="content-wrap">
            {props.children}
        </div>
      <Footer/>
    </div>
    </div>
  );
}