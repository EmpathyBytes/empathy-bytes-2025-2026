import { Link } from "gatsby"
import React, { useRef, useState } from "react"
// import styled from "styled-components"
import {FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/empbytes.jpg";
import "../styles/components/newnav.css"
import { useEffect } from "react";

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
    const [isNavOpen, setIsNavOpen] = useState(false);
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
        setIsNavOpen(!isNavOpen);
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
      <>
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
              <nav className = "desktop">
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
              </nav>
            </nav>
            <button 
                    className="nav-btn mobile-menu-toggle" 
                    onClick={showNavbar}
                >
                    {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
          
        </header>

      {isNavOpen && (
        <div className="mobile-nav-overlay">
            <div className="mobile-nav-content">
                <Link to={"/"} className="mobile-nav-logo" onClick={showNavbar}>
                    <img
                        className="logo"
                        src={Logo}
                        alt="Empathy Bytes Logo"
                    />
                    <h2 className="body"> Empathy Bytes</h2>
                </Link>
                <div className="mobile-nav-links">
                    <Link to={"/projects"} onClick={showNavbar}>
                        <h3 className="mobile-nav-page">Projects</h3>
                    </Link>
                    <Link to={"/experiences"} onClick={showNavbar}>
                        <h3 className="mobile-nav-page">Experiences</h3>
                    </Link>
                    <Link to={"/about"} onClick={showNavbar}>
                        <h3 className="mobile-nav-page">About</h3>
                    </Link>
                    <Link to={"/contact"} onClick={showNavbar}>
                        <h3 className="mobile-nav-page">Contact</h3>
                    </Link>
                </div>
                <button 
                    className="mobile-nav-close" 
                    onClick={showNavbar}
                >
                    <FaTimes />
                </button>
            </div>
        </div>
      )}
    </>
  );
}

export default Newnav;