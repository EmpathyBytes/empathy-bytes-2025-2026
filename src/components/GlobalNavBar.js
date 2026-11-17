import React from "react";
import "../styles/navbar.css";
 
// Default links match the mid-fi wireframe. Pages can override via props.
const DEFAULT_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Teams", href: "/teams" },
  { label: "About", href: "/about" },
];
 
/**
 * Global nav bar (structure/layout only; colors and final interactions TBD).
 *
 * Props:
 *  - logo:  node shown on the left (image, icon, or text). Defaults to a placeholder.
 *  - logoHref: where the logo links to (default "/")
 *  - links: array of { label, href } shown on the right
 */
function GlobalNavBar({ logo = "LOGO/ICON", logoHref = "/", links = DEFAULT_LINKS }) {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <a className="navbar__logo" href={logoHref}>
          {logo}
        </a>
 
        <ul className="navbar__links">
          {links.map(({ label, href }) => (
            <li className="navbar__item" key={href}>
              <a className="navbar__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
 
export default GlobalNavBar;