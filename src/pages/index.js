import * as React from "react"
import Layout from "../components/layout"

import "../styles/homepage.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"

import Carousel from 'react-material-ui-carousel'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



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
        <h1 className="header">What is Empathy Bytes?</h1>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>