import * as React from "react"
import Layout from "../components/layout"

import "../styles/homepage.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"

import Carousel from 'react-material-ui-carousel'
import Grid2 from '@mui/material/Unstable_Grid2';



function IndexPage() {
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
      <Grid2 container spacing={2}>
        <Grid2 xs={8}>
          <h1 className="header">What is Empathy Bytes?</h1>
        </Grid2>
        <Grid2 xs={4}>

        </Grid2>
        <Grid2 xs={7}>
        <p className="paragraph">
          Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
          We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
          currently focusses on identifying and presenting distinct communities connected to Georgia Tech.
        </p>
        </Grid2>
        <Grid2 xs={5}>
          
        </Grid2>
      </Grid2>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>