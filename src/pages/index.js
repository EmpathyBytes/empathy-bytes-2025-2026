import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby";

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
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { DesktopAccessDisabled } from "@mui/icons-material";

import useMediaQuery from '@mui/material/useMediaQuery';

import LandingInfoCard from "../components/landingInfo";
import PropTypes from 'prop-types';

function IndexPage() {
  const matches = useMediaQuery('(min-width:700px)'); 

  if (matches){ //desktop
    return (
      <Layout>
        <div className="top top-text dim">
          <h1>Empathy Bytes</h1>

          <a href="#info">
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
            <img className="splash-image" src={splash1}></img>
            <img className="splash-image" src={splash2}></img>
          </Carousel>
        </div>

        <div id="info" className="info">
          <div className="info-wrapper">
              <div className="image">
                <img src={teampic} className="teampic"></img>
              </div>
              <div className="infoCard">
                <LandingInfoCard 
                  title="What Is Empathy Bytes?"
                  body="Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
                  We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
                  currently focuses on identifying and presenting distinct communities connected to Georgia Tech."
                  link="/contact"
                  btnTitle="Learn More"
                />
              </div>
            </div>
          </div>
      </Layout>
    )



  } else { //mobile
    return (
      <Layout>
        <div className="top top-text dim">
          <h1>Empathy Bytes</h1>

          <a href="#info">
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
            <img className="splash-image" src={splash1}></img>
            <img className="splash-image" src={splash2}></img>
          </Carousel>
        </div>

        <div id="info" className="info">
          <div className="info-wrapper">
              <div className="image">
                <img src={teampic} className="teampic"></img>
              </div>
              <div className="infoCard">
                <LandingInfoCard 
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
      </Layout>
    )
  }
}

export default IndexPage;

export const Head = () => <title>Home Page</title>