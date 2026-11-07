import * as React from "react";
// import Navbar from "./navbar";
import Footer from "./footer"
import Newnav from "./newnav";
import "../styles/navstyles.css";

var year = new Date().getFullYear;

// This is the layout component. It contains the NavBar and Footer components. Every page should utilize this and wrap their
// content with <Layout> </Layout> - Jacob

/**
 * The standard Layout wrapper for the Empathy Bytes website.
 * * This component should be used to wrap the content of every page 
 * to ensure consistent branding and navigation.
 * * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The unique page content to be rendered between the Navbar and Footer.
 * @param {boolean} [props.transparent] - (Legacy/Optional) Previously used to toggle navbar transparency.
 * * @returns {JSX.Element} The full page structure with global header, content area, and footer.
 * * @example
 * // Usage in a page component:
 * <Layout>
 * <h1>Welcome to the About Page</h1>
 * <p>Page content goes here...</p>
 * </Layout>
 */


export default function Layout(props) {
  return (
    <div>
      {/* <Navbar transparent={!!props.transparent}/> */}
      <Newnav/>
      <div id="page-container">
        <div id="content-wrap">
            {props.children}
        </div>
      <Footer/>
    </div>
    </div>
  );
}