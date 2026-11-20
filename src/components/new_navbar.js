import React from "react";
import { Link } from "gatsby";
import "../styles/new_navstyles.css";

const Header = () => {
    return (
        <header className="site-header-tan">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/" className="noUnderline">
                    LOGO/ICON
                    </Link>
                </div>

                <nav className="nav-links">
                    <Link to="/new_projects" className="nav-link-item">Projects</Link>
                    <Link to="/new_teamspage" className="nav-link-item">Teams</Link>
                    <Link to="/new_about" className="nav-link-item">About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;