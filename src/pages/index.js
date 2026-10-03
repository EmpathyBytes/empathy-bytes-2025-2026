import * as React from "react"
import Layout from "../components/layout"

import "../styles/homepage.css"
import "../styles/all.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"
import teampic from "../images/homepage/teampic.jpg"

// import webicon from "../images/subteam-icons/webteambordered.png"
// import mediaicon from "../images/subteam-icons/mediateambordered.png"
// import appicon from "../images/subteam-icons/appteambordered.png"
// import emtechicon from "../images/subteam-icons/emergingtechteambordered.png"


import Carousel from 'react-material-ui-carousel'
// import CardMedia from '@mui/material/CardMedia';
// import { DesktopAccessDisabled } from "@mui/icons-material";

import useMediaQuery from '@mui/material/useMediaQuery';

import InfoCard from "../components/infocard";
import LearnCard from "../components/learncard";


function IndexPage() {
  const matches = useMediaQuery('(min-width:700px)'); 

  if (matches){ //desktop
    return (
      
      <Layout>
        {/**Content for the Carousel */}
        <div className="top top-text dim">
          <h1>Empathy Bytes</h1>
          {/**This is the animated arrows that scroll down the page when clicked */}
          <a href="#info" alt="arrows"> 
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>
        </div>
        <div className="bottom">
          <Carousel
            interval={10000}
            animation={"slide"}
            duration={2000}
            indicators={false}>
            <img className="splash-image" src={splash1} alt="Hive"></img>
            <img className="splash-image" src={splash2} alt="Gatech Tower"></img>
          </Carousel>
        </div>
        {/** This is the main part of the landing page containing the picture and info card*/}
        <div id="info" className="info">
          <div className="info-wrapper">
              <div className="image">
                <img src={teampic} className="teampic" alt="EB Team"></img>
              </div>
              <div className="info-card">
                <InfoCard 
                  title="What Is Empathy Bytes?"
                  body="Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
                  We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
                  currently focuses on identifying and presenting distinct communities connected to Georgia Tech."
                  // link="/contact"
                  // btnTitle="Learn More"
                />
              </div>
            </div>
          </div>

        {/* This is the learn more section */}
        <div id="learn-more-home" className="learn-more-home"> 
          {/* Had to use info-wrapper instead of a custom since 
          it made the text have a weird yellow underline */}
          <div className="info-wrapper">
          <div className="learn-card">
                <LearnCard 
                  title="Want to Learn More?"
                  body="Check out our Experience and Project Pages to learn more about our work!"

                  // Currently the links don't go to the top of the pages
                  link="/experiences"
                  btnTitle="Experiences"
                  link2="/projects"
                  btnTitle2="Projects"
                />
            </div>
            </div>  
          </div>
      </Layout>
    )



  } else { //mobile layout
    // TODO: create a better layout for mobile
    return (
      <Layout>
        <div className="top top-text dim">
          <h1>Empathy Bytes</h1>

          <a href="#info" alt="arrows">
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>
          
        </div>
        <div className="bottom">
          <Carousel
            interval={10000}
            animation={"slide"}
            duration={2000}
            indicators={false}>
            <img className="splash-image" src={splash1} alt="Hive"></img>
            <img className="splash-image" src={splash2} alt="Gatech Tower"></img>
          </Carousel>
        </div>

        <div id="info" className="info">
          <div className="info-wrapper">
              <div className="image">
                <img src={teampic} className="teampic" alt="EB Team"></img>
              </div>
              <div className="info-card">
                <InfoCard 
                  title="What Is Empathy Bytes?"
                  body="Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
                  We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
                  currently focuses on identifying and presenting distinct communities connected to Georgia Tech."
                  link="/contact/"
                  btnTitle="Learn More"
                />
              </div>
            </div>
          </div>

          {/* This is the learn more section */}
          <div id="learn-more-home" className="learn-more-home"> 
          {/* Had to use info-wrapper instead of a custom since 
          it made the text have a weird yellow underline */}
          <div className="info-wrapper">
          <div className="learn-card">
                <LearnCard 
                  title="Want to Learn More?"
                  body="Check out our Experience and Project Pages to learn more about our work!"

                  // Currently the links don't go to the top of the pages
                  link="/experiences"
                  btnTitle="Experiences"
                  link2="/projects"
                  btnTitle2="Projects"
                />
            </div>
            </div>  
          </div>
      </Layout>
    )
  }
}

export default IndexPage;

export const Head = () => (
<>
<link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
<title>Home</title>
</>
)