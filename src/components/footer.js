import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "gatsby";

import "../styles/components/footer.css";
import Logo from "../images/empbytes.jpg";
import YoutubeLogo from "../images/socialmedia-icons/youtube_icon.png";
import LinkedinLogo from "../images/socialmedia-icons/linkedin_icon.png";
import GithubLogo from "../images/socialmedia-icons/github_icon.png";



// Here is a footer component for the website. This component is used in the "layout" component that is included in every page.
// The links in the footer navigate to various other pages on the site. - Jacob


function Footer(props) {

  return (
    <footer id="footer">
      <div className="container-footer">
        <Grid item xs={12} sm={4}>
          <Link to={"/"}>
            <img
              className= "logo"
              src= {Logo}
              alt="Empathy Bytes Logo"
            />
            </Link>
          <h1 className="text-footer-title">Empathy Bytes</h1>
        </Grid>

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">About</h1>

          <Link className="text-anchor" to="">Home</Link>
          <Link className="text-anchor" to="/about">About Us</Link>
          <Link className="text-anchor" to="/contact">Contact</Link>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">Experiences</h1>

          <Link className="text-anchor" to="/appteam">App Experience</Link>
          <Link className="text-anchor" to="/emergingtech">VR Experience</Link>
          <Link className="text-anchor" to="/mediateam">Media Experience</Link>
          <Link className="text-anchor" to="/webteam">Web Experience</Link>
        </Grid> }

        { <Grid item xs={6} sm={2} className="grouping">
          <h1 className="text-heading">Communities</h1>

          <Link className="text-anchor" to="/collections/distance-math/">Distance Math</Link>
          <Link className="text-anchor" to="/collections/covid-freshman/">Covid Freshman</Link>
          <Link className="text-anchor" to="/collections/makerspaces/">Makerspace</Link>
          <Link className="text-anchor" to="/articles">Misc</Link>
        </Grid> }

        <Grid item xs={6} sm={2} className="grouping">

          <a className="text-anchor" href="https://www.youtube.com/@georgiatechempathybytesvip3117">
            <img className="icon" src={YoutubeLogo} alt="Youtube"/>
          </a>

          <a className="text-anchor" href="https://www.linkedin.com/company/empathybytes/">

            <img className="icon" src={LinkedinLogo} alt="LinkedIn"/>
          </a>

          <a className="text-anchor" href="https://github.com/EmpathyBytes/empathy-bytes-2024">
            <img className="icon" src={GithubLogo} alt="Github"/>
          </a>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;



















// Going to Comment this out for Now - Jacob

// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./footerStyles";
  
// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "green", 
//                    textAlign: "center", 
//                    marginTop: "-50px" }}>
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <FooterLink href="#">Aim</FooterLink>
//             <FooterLink href="#">Vision</FooterLink>
//             <FooterLink href="#">Testimonials</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;
