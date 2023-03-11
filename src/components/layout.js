import * as React from "react";
import Navbar from "./navbar";
import "../styles/navstyles.css";

export default function Layout(props) {
  return (
    <div>
      <Navbar transparent={!!props.transparent}/>
      
      <div id="page-container">
   <div id="content-wrap">
      {props.children}
   </div>
   <footer id="footer">test</footer>
 </div>
    </div>
  );
}