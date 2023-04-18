import React, { useState } from "react"
import Layout from "../components/layout"
import Logo from "../images/empbytes.jpg"
import Webfull from "../images/full/Web-Full.jpg"

// Importing Data from the Mock Database - Jacob
import Members from "../database/members"

import "../styles/about.css"
import "../styles/all.css"


import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';






// Multi Bootstrap Imports
import MCarousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"



// Making the Carousels Responsive - Jacob
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



// Styling for html components & Layout - Jacob
const pageStyles = {
  color: "#005091",
  padding: 96,
  paddingTop: 180,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const headingAccentStyles = {
  color: "#663399",
};

const container = {
  backgroundColor: "#003663",
  padding: "6% 5% 6% 5%",
  paddingTop: 180,
};
const header = {
  fontFamily: "Titillium Web",
  fontSize: "3vw",
  color: "white",
};
const header2 = {
  fontFamily: "Titillium Web",
  fontSize: "2vw",
  color: "white",
};
const carouselInner = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2% 0 3% 0",
};
const gapS = {
  padding: "0.5% 0 0.5% 0",
};
const gapL = {
  padding: "2% 0 2% 0",
};
const paragraph = {
  fontFamily: "Roboto",
  fontWeight: "200",
  fontSize: "1.5vw",
  color: "white",
};

// function AboutPage(props) {
//   return(
//     <Layout>
//       <div className="container">
//       <h1>Meet the Team!</h1>
//       <div className="people-container">
//         <Grid container spacing={2}>
//           {Members.map((item) => (
//                   <Grid xs={3}>
//                     <PeopleCard
//                       name={item.name}
//                       img={item.image}
//                       role={item.role}
//                     />
//                   </Grid>
//                 ))}
//         </Grid>
//       </div>
//     </div>
//     </Layout>
//   );
// }

function AboutPage() {

  const [visEmerging, setToggleEmerging] = useState(false);
  const [visWeb, setToggleWeb] = useState(true);
  const [visMedia, setToggleMedia] = useState(false);
  const [visApp, setToggleApp] = useState(false);


  function toggleEmerging() {
    setToggleEmerging(true);
    setToggleWeb(false);
    setToggleMedia(false);
    setToggleApp(false);
  }
  function toggleWeb() {
    setToggleEmerging(false);
    setToggleWeb(true);
    setToggleMedia(false);
    setToggleApp(false);
  }
  function toggleMedia() {
    setToggleEmerging(false);
    setToggleWeb(false);
    setToggleMedia(true);
    setToggleApp(false);
  }
  function toggleApp() {
    setToggleEmerging(false);
    setToggleWeb(false);
    setToggleMedia(false);
    setToggleApp(true);
  }

  return (
    <Layout>
      <div style={container}>
        <div>
          <h1 className="header-about">About Us</h1>
          <p className="paragraph-about">
            We are a Vertically Integrated Project team at Georgia Tech
            exploring the lives of those touched by Georgia Tech’s research and
            technology initiatives. The Vertically Integrated Project Program at
            Georgia Tech brings together teams of undergraduate students from
            various years, disciplines, and backgrounds with faculty and
            graduate students to work on long-term, large-scale,
            multidisciplinary projects. Learn more about Georgia Tech’s VIP
            program here.
          </p>
        </div>

        <div className="about-nav">
        <Grid container spacing={2}>
          <Grid xs={3}>
            <p className="about-nav-text" onClick={toggleEmerging}>Emerging</p>
          </Grid>

          <Grid xs={3}>
            <p className="about-nav-text" onClick={toggleWeb}>Web</p>
          </Grid>

          <Grid xs={3}>
            <p className="about-nav-text" onClick={toggleMedia}>Media</p>
          </Grid>

          <Grid xs={3}>
            <p className="about-nav-text" onClick={toggleApp}>App</p>
          </Grid>
        </Grid>
        </div>



        <div className="emerging-tech-about" style={{ display: visEmerging ? 'block' : 'none' }}>
          <p className="paragraph-about">Emerging Tech About</p>
        </div>

        <div className="web-about" style={{ display: visWeb ? 'block' : 'none' }}>
          <p className="paragraph-about">Web About</p>

          <Grid container spacing={0} className="grid-inner-about" justifyContent="center">

<Grid xs={8}>
  {/* <img src={Webfull} alt="full web image" className="full-image"></img> */}
</Grid>

<Grid xs={4}>
  
</Grid>

{Members.map((item) => (
<Grid container xs={3.5} alignItems="center" justifyContent="center" direction="column">
  {/* <Paper elevation={3} className="paper-about b-0"> */}
    <Grid xs={7}>
    <div class="hex">
        <div class="hex-background">
          <img src= {item.image} alt="person"></img>
          <p className="paragraph-about">{ item.name }</p>
        <p className="paragraph-about">{ item.role }</p>
        </div>
      </div>
    </Grid>
    <Grid xs={5}>
      <div className="center-text">
        <p className="paragraph-about">{ item.name }</p>
      </div>
    </Grid>
  {/* </Paper> */}
</Grid>
))}
</Grid>
        </div>

        <div className="media-about" style={{ display: visMedia ? 'block' : 'none' }}>
          <p className="paragraph-about">Media About</p>
        </div>

        <div className="app-about" style={{ display: visApp ? 'block' : 'none' }}>
          <p className="paragraph-about">App About</p>
        </div>
        
        
{/*         
        
        
        <div style={gapS}>
          <h1 className="header-about">Web Team</h1>
          <MCarousel 
            responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}
            >

            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  img={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        
        <div style={gapS}>
          <h1 className="header-about">Media Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        
        <div style={gapS}>
          <h1 className="header-about">App Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        
        <div style={gapS}>
          <h1 className="header-about">Emerging Tech Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div> */}
      </div>
    </Layout>
  );
}

export default AboutPage;