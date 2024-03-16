import { Link } from "gatsby"
import React, { useRef } from "react"
// import styled from "styled-components"
import {FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/empbytes.jpg";
import "../styles/components/newnav.css"
import { useEffect, useState } from "react";

const ReactiveLink = ({ name, path }) => {
    return (
      <Link className={`navbar-link`} to={path} activeClassName="navbar-selected">
        {name}
        <div className={`navbar-link-bar`}></div>
      </Link>
    );
  };

function Newnav({ transparent }) {
    const breakpoint = 80;
    const [scroll, setScroll] = useState("");
    // console.log(withPrefix("/test"));
    console.log("This is a test hi");
    const onScroll = () => {
        let scroll = 0;
        if (typeof window !== undefined) {
            scroll = window.scrollY;
        }
        if (scroll > breakpoint) setScroll("scrolled");
        else setScroll("");
    };

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

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
        <header className="nav-content">
          <div className="nav-logo">
            <Link to={"/"}>
            <img
              className= "logo"
              src= {Logo}
              alt="Empathy Bytes Logo"
            />
            </Link>
            <h1 className="nav-title"> Empathy Bytes</h1>
          </div>
          <nav className="nav-links" ref={navRef}>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/experiences"}>Experiences</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Newnav;