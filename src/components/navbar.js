import * as React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

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
              src="https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-cropped-cropped-logoGearsTechRound100x100-1.png"
              alt="Empathy Bytes Logo"
            />
          </Link>
        </div>
        <div className="navbar-grid-right">
          <ReactiveLink name="Projects" path="/projects" />
          <ReactiveLink name="About" path="/about" />
          <ReactiveLink name="Contact" path="/contact" />
          <ReactiveLink name="Experiences" path="/experiences" />
        </div>
      </div>
      {transparent && <div className={`navbar-gradient ${scroll}`}></div>}
    </header>
  );
}
