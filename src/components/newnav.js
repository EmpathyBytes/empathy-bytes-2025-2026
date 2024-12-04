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
        const nav = navRef.current;
        if (nav.classList.contains("responsive_nav")) {
          nav.classList.remove("responsive_nav")
        } else {
          nav.classList.add("responsive_nav")
        }
        //navRef.current.classList.toggle("responsive_nav");
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
        <header>
          <div className="nav-logo">
            <Link to={"/"} className="logo-link">
            <img
              className= "logo"
              src= {Logo}
              alt="Empathy Bytes Logo"
            />
            <h2 className="body"> Empathy Bytes</h2>
            </Link>
          </div>
            <nav ref={navRef}>
                  {/* Projects Page */}
                  <Link to={"/projects"}>
                    <h3 className="pages">Projects</h3>
                  </Link>
                  {/* Experiences page */}
                  <Link to={"/experiences"}>
                    <h3 className="pages">Experiences</h3>
                  </Link>
                  {/* About page */}
                  <Link to={"/about"}>
                    <h3 className="pages">About</h3>
                  </Link>
                  {/* Contact page */}
                  <Link to={"/contact"}>
                    <h3 className="pages">Contact</h3>
                  </Link>
                  <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                      <FaTimes/>
                  </button>
            </nav>
              <button className="nav-btn" onClick={showNavbar}>
                  <FaBars/>
              </button>
          
        </header>
    );
}

export default Newnav;