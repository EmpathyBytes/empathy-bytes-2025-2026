import { Link } from "gatsby"
import React, { useRef, useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../images/empbytes.jpg"
import "../styles/components/newnav.css"

function Newnav({ transparent }) {
    const breakpoint = 80;
    const [scroll, setScroll] = useState("");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const mobileNavRef = useRef(null);
    
    const onScroll = () => {
        let scroll = 0;
        if (typeof window !== undefined) {
            scroll = window.scrollY;
        }
        if (scroll > breakpoint) setScroll("scrolled");
        else setScroll("");
    };

    const showNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    // Handle escape key to close menu
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isNavOpen) {
                closeNavbar();
            }
        };

        if (isNavOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isNavOpen]);

    // Handle scroll event
    useEffect(() => {
        if (typeof window !== undefined) {
          window.addEventListener("scroll", onScroll, { passive: true });
          return () => {
            window.removeEventListener("scroll", onScroll);
          };
        }
    }, []);

    // Focus trap for mobile menu
    useEffect(() => {
        if (isNavOpen && mobileNavRef.current) {
            const focusableElements = mobileNavRef.current.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleTab = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleTab);
            firstElement?.focus();

            return () => {
                document.removeEventListener('keydown', handleTab);
            };
        }
    }, [isNavOpen]);

    return (
      <>
        <header className={scroll}>
          <div className="nav-logo">
            <Link to={"/"} className="logo-link">
              <img
                className="logo"
                src={Logo}
                alt="Empathy Bytes Logo"
              />
              <h2 className="body">Empathy Bytes</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to={"/projects"} activeClassName="active-link">
              <h3 className="pages">Projects</h3>
            </Link>
            <Link to={"/experiences"} activeClassName="active-link">
              <h3 className="pages">Experiences</h3>
            </Link>
            <Link to={"/about"} activeClassName="active-link">
              <h3 className="pages">About</h3>
            </Link>
            <Link to={"/contact"} activeClassName="active-link">
              <h3 className="pages">Contact</h3>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="nav-btn mobile-menu-toggle" 
            onClick={showNavbar}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isNavOpen}
            aria-controls="mobile-navigation"
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`mobile-nav-overlay ${isNavOpen ? 'open' : ''}`}
          id="mobile-navigation"
          ref={mobileNavRef}
          aria-hidden={!isNavOpen}
        >
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <Link to={"/"} className="mobile-nav-logo" onClick={closeNavbar}>
                <img
                  className="logo"
                  src={Logo}
                  alt="Empathy Bytes Logo"
                />
                <h2 className="body">Empathy Bytes</h2>
              </Link>
              <button 
                className="mobile-nav-close" 
                onClick={closeNavbar}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              <Link 
                to={"/projects"} 
                onClick={closeNavbar}
                activeClassName="mobile-active-link"
              >
                <h3 className="mobile-nav-page">Projects</h3>
              </Link>
              <Link 
                to={"/experiences"} 
                onClick={closeNavbar}
                activeClassName="mobile-active-link"
              >
                <h3 className="mobile-nav-page">Experiences</h3>
              </Link>
              <Link 
                to={"/about"} 
                onClick={closeNavbar}
                activeClassName="mobile-active-link"
              >
                <h3 className="mobile-nav-page">About</h3>
              </Link>
              <Link 
                to={"/contact"} 
                onClick={closeNavbar}
                activeClassName="mobile-active-link"
              >
                <h3 className="mobile-nav-page">Contact</h3>
              </Link>
            </nav>
          </div>
        </div>
      </>
    );
}

export default Newnav;