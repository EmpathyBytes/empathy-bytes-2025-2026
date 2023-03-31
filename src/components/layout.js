import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer"
import "../styles/navstyles.css";

var year = new Date().getFullYear;

export default function Layout(props) {
  return (
    <div>
      <Navbar transparent={!!props.transparent}/>
      
      <div id="page-container">
        <div id="content-wrap">
            {props.children}
        </div>
      <Footer></Footer>
    </div>
    </div>
  );
}