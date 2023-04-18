import React from "react";

import Grid from '@mui/material/Unstable_Grid2';

import "../styles/components/footer.css"


function Footer(props) {

  return (
    <footer>
      <div className="container">
        <Grid container spacing={2}>
          
          <Grid xs={4}>
            <h1 className="text-footer-title">Empathy Bytes</h1>
          </Grid>

          <Grid xs={2} className="grouping">
            <h1 className="text-heading">About</h1>

            <a className="text-anchor" href="">Home</a>
            <a className="text-anchor" href="/#info">About Us</a>
            <a className="text-anchor" href="/contact">Contact</a>
          </Grid>

          <Grid xs={2} className="grouping">
            <h1 className="text-heading">Experiences</h1>

            <a className="text-anchor" href="/appteam">App Experience</a>
            <a className="text-anchor" href="/emergingtech">VR Experience</a>
          </Grid>

          <Grid xs={2} className="grouping">
            <h1 className="text-heading">Communities</h1>

            <a className="text-anchor" href="/collections/distance-math/">Distance Math</a>
            <a className="text-anchor" href="/collections/covid-freshman/">Covid Freshman</a>
            <a className="text-anchor" href="/collections/makerspaces/">Makerspace</a>
            <a className="text-anchor" href="/articles">Misc</a>
          </Grid>

          <Grid xs={2} className="grouping">
            <h1 className="text-heading">Social Media</h1>

            <a className="text-anchor" href="https://www.youtube.com/@georgiatechempathybytesvip3117">Youtube</a>
          </Grid>
          
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