import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "gatsby";

import "../styles/components/footer.css";
import Logo from "../images/empbytes.jpg";
import YoutubeLogo from "../images/socialmedia-icons/youtube_icon.png";
import LinkedinLogo from "../images/socialmedia-icons/linkedin_icon.png";
import GithubLogo from "../images/socialmedia-icons/github_icon.png";
import InstagramLogo from "../images/socialmedia-icons/instagram_icon.png";



// Here is a footer component for the website. This component is used in the "layout" component that is included in every page.
// The links in the footer navigate to various other pages on the site. - Jacob


function Footer(props) {

  return (
    <footer id="footer">
      <div className="container-footer">
        <Grid item xs={12} sm={4}>
        <h1 className="text-footer-title">
          Empathy <span className="bytes">Bytes</span>
          </h1>
        </Grid>

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">General</h1>
          <div className="text-anchor-container">

          <Link className="text-anchor" to="/">Home</Link>
          <Link className="text-anchor" to="/about">About Us</Link>
          <Link className="text-anchor" to="/contact">Contact</Link>
          <Link className="text-anchor" to="/privacy">Privacy Policy</Link>
          </div>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">Teams</h1>

          <div className="text-anchor-container">
          <Link className="text-anchor" to="/appteam">App</Link>
          <Link className="text-anchor" to="/emergingtech">VR</Link>
          <Link className="text-anchor" to="/mediateam">Media</Link>
          <Link className="text-anchor" to="/webteam">Web</Link>
          </div>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">Communities</h1>
          
          <div className="text-anchor-container">
          <Link className="text-anchor" to="/projects/distance-math/">Distance Math</Link>
          <Link className="text-anchor" to="/projects/covid-freshman/">Covid Freshman</Link>
          <Link className="text-anchor" to="/projects/makerspaces/">Makerspace</Link>
          <Link className="text-anchor" to="/projects/miscellaneous">Miscellaneous</Link>
          </div>
        </Grid> }

        <Grid item xs={6} sm={2} className="logo-container">

        <div className="centered-content">
        <div className="logo-container">
        <Link to={"/"}>
            <img
              className= "footer-logo"
              src= {Logo}
              alt="Empathy Bytes Logo"
            />
          </Link>
        </div>
        <div className="text-heading">
        <p>Follow Us</p>
      </div>
      </div>

        <div className="icon-group">
          <a className="text-anchor" href="https://www.youtube.com/@georgiatechempathybytesvip/featured">
            <img className="icon" src={YoutubeLogo} alt="Youtube"/>
          </a>

          <a className="text-anchor" href="https://www.linkedin.com/company/empathybytes/">

            <img className="icon" src={LinkedinLogo} alt="LinkedIn"/>
          </a>

          <a className="text-anchor" href="https://www.instagram.com/empathy_bytes/">
            <img className="icon" src={InstagramLogo} alt="Instagram"/>
          </a>

          <a className="text-anchor" href="https://github.com/EmpathyBytes/empathy-bytes-2024">
            <img className="icon" src={GithubLogo} alt="Github"/>
          </a>
          </div>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;












