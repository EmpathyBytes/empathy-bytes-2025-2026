import * as React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";
import Logo from "../images/empbytes.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

// Here is the Navbar component made by Joseph in Fall 2022 - Jacob

const ReactiveLink = ({ name, path }) => {
  return (
    <Link className={`navbar-link`} to={path} activeClassName="navbar-selected">
      {name}
      <div className={`navbar-link-bar`}></div>
    </Link>
  );
};

export default function Navbar({ transparent }) {
  const breakpoint = 80;
  const [scroll, setScroll] = useState("");
  // console.log(withPrefix("/test"));
  // console.log("This is a test hi");

  const onScroll = () => {
    let scroll = 0;
    if (typeof window !== undefined) {
      scroll = window.scrollY;
    }
    if (scroll > breakpoint) setScroll("scrolled");
    else setScroll("");
  };

  useEffect(() => {
    // console.log(withPrefix("/test"));
    // console.log("This is a test hi");
    if (typeof window !== undefined) {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <header
      className={`navbar-outer ${scroll} ${
        transparent ? "" : "navbar-background"
      }`}
    >
      <div className={`nav-container ${scroll}`}>
        <div className={`navbar-grid-left ${scroll}`}>
          <Link to={`/`}>
            <img
              className={`logo ${scroll}`}
              src= {Logo}
              alt="Empathy Bytes Logo"
            />
          </Link>
        </div>
        <div className="navbar-grid-right">
          <ReactiveLink name="Projects" path="/projects" />
          <ReactiveLink name="Experiences" path="/experiences" />
          <ReactiveLink name="About" path="/about" />
          <ReactiveLink name="Contact" path="/contact" />
        </div>
      </div>
      {transparent && <div className={`navbar-gradient ${scroll}`}></div>}
    </header>
  );
}
