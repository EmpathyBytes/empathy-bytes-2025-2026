import * as React from "react";
import Navbar from "./navbar";
import "../styles/navstyles.css";

export default function Layout(props) {
  return (
    <div>
      <Navbar transparent={!!props.transparent}/>
      {props.children}
    </div>
  );
}