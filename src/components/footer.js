import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "gatsby";

import "../styles/components/footer.css";
import Logo from "../images/empbytes.jpg";
import YoutubeLogo from "../images/socialmedia-icons/youtube_icon.png";
import LinkedinLogo from "../images/socialmedia-icons/linkedin_icon.png";
import GithubLogo from "../images/socialmedia-icons/github_icon.png";
import InstagramLogo from "../images/socialmedia-icons/instagram_icon.png";
import GlobalStyles from "@mui/material/GlobalStyles";


// Here is a footer component for the website. This component is used in the "layout" component that is included in every page.
// The links in the footer navigate to various other pages on the site. - Jacob


function Footer(props) {

  return (
    <footer id="footer">
     <GlobalStyles
        styles={{
          "@media (min-width:700px) and (max-width:1200px)": {
            "#learn-more-home": {
              height: "auto",
              minHeight: "50vh",
              overflow: "visible",
            },

            "#footer": {
              height: "auto",
              maxHeight: "none",
              overflow: "visible",
            },
            // Use grid layout for mid-sized screens to avoid overlap
            "#footer .container-footer": {
              display: "grid",
              gridTemplateColumns: "220px 180px 220px",
              gridTemplateRows: "auto auto auto",
              rowGap: "40px",
              columnGap: "40px",
              alignItems: "start",
              justifyContent: "center",
              width: "100%",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              boxSizing: "border-box",
            },
            // Center brand title on first row
            "#footer .footer-brand": {
              gridColumn: "1 / 4",
              gridRow: "1",
              justifySelf: "center",
              textAlign: "center",
            },
            // Align sections so Teams is centered visually
            "#footer .footer-general": {
              gridColumn: "1",
              gridRow: "2",
              justifySelf: "start",
              textAlign: "left",
            },
            "#footer .footer-teams": {
              gridColumn: "2",
              gridRow: "2",
              justifySelf: "center",
              textAlign: "left",
            },
            "#footer .footer-communities": {
              gridColumn: "3",
              gridRow: "2",
              justifySelf: "end",
              textAlign: "left",
            },
            // Center social section on final row
            "#footer .footer-social": {
              gridColumn: "1 / 4",
              gridRow: "3",
              justifySelf: "center",
              textAlign: "center",
            },

            "#footer .footer-brand .text-footer-title": {
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "baseline",
              gap: "0.35ch",
            },

            "#footer .footer-brand .bytes": {
              display: "inline",
              whiteSpace: "nowrap",
            },
          },

          "#footer, #footer .container-footer": {
            height: "auto",
            maxHeight: "none",
            overflow: "visible",
          },
        }}
      />
      <div container className="container-footer">
        <Grid item xs={12} sm={4} className="footer-brand">
        <h1 className="text-footer-title">
          Empathy <span className="bytes">Bytes</span>
        </h1>
        </Grid>

        { <Grid item xs={6} sm={2} className="grouping footer-general">
          <h1 className="text-heading">General</h1>
          <div className="text-anchor-container">

          <Link className="text-anchor" to="/">Home</Link>
          <Link className="text-anchor" to="/about">About Us</Link>
          <Link className="text-anchor" to="/contact">Contact</Link>
          <Link className="text-anchor" to="/privacy">Privacy Policy</Link>
          </div>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping footer-teams">
          <h1 className="text-heading">Teams</h1>

          <div className="text-anchor-container">
          <Link className="text-anchor" to="/appteam">App</Link>
          <Link className="text-anchor" to="/emergingtech">VR</Link>
          <Link className="text-anchor" to="/mediateam">Media</Link>
          <Link className="text-anchor" to="/webteam">Web</Link>
          </div>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping footer-communities">
          <h1 className="text-heading">Communities</h1>
          
          <div className="text-anchor-container">
          <Link className="text-anchor" to="/projects/distance-math/">Distance Math</Link>
          <Link className="text-anchor" to="/projects/covid-freshman/">Covid Freshman</Link>
          <Link className="text-anchor" to="/projects/makerspaces/">Makerspace</Link>
          <Link className="text-anchor" to="/projects/miscellaneous">Miscellaneous</Link>
          </div>
        </Grid> }

        <Grid item xs={6} sm={2} className="logo-container footer-social">

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







