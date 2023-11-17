import React, { useState } from "react"
import Layout from "../components/layout"
import Logo from "../images/empbytes.jpg"
import All from "../images/people/fullTeam.jpg"
import { Link } from "gatsby";

// Importing Data from the Mock Database - Jacob
import webMembers from "../database/webMembers"
import appMembers from "../database/appMembers"
import mediaMembers from "../database/mediaMembers"
import emergingTechMembers from "../database/emergingTechMembers"


import "../styles/about.css"
import "../styles/all.css"


import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';









function AboutPage() {

  // These functions set the visibility of each team
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

      <div className="top-about dim">
        {/* <h1>About Us</h1> */}
      </div>
      <div className="bottom-about">
        <img src={All} className="about-full"></img>
      </div>
      <div className="a-c-full">
        <div style={{padding: "2% 5% 1% 5%"}}>
          <h1 className="header-about">About Us</h1>
          <p className="paragraph-about">
            Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we 
            create digital scholarship. This VIP section looks to document the stories of diverse communities in Georgia and beyond. 
            The team explores how technology can enhance empathy, as well as improve access to resources. Most importantly, the students on 
            this team ask themselves how these advanced technologies allow us to understand new perspectives, solve problems, or simply be a 
            better person in a world full of daily challenges.
          </p>
          <p className="paragraph-about">
            Empathy Bytes is broken down into sub-groups that specialize in different areas of research to accomplish the overall goals of the project. 
            Within sub teams, students explore areas of personal research interest, while learning project management skills and terminology.
          </p>
          <p className="paragraph-about">
            Current technologies being used include: React, GatsbyJS, Drupal, and GraphQL the web team, the Adobe Creative Suite for the Media team.
            Unity and Blender for the Emerging Tech team, and Swift for the App team.
          </p>
          
        </div>

        {/* Div that contains the navbar */}
        <div className="about-nav" style={{paddingTop: 25, paddingBottom: 25}}>
        <Grid container spacing={2} className="navBG">
            <Grid xs={2}>
            </Grid>
            <Grid xs={2}>
              <a href="#about-emerging" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleEmerging}>Emerging</h3>
              </a>
            </Grid>

            <Grid xs={2}>
              <a href="#about-web" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleWeb}>Web</h3>
              </a>
            </Grid>

            <Grid xs={2}>
              <a href="#about-media" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleMedia}>Media</h3>
              </a>
            </Grid>

            <Grid xs={2}>
              <a href="#about-app" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleApp}>App</h3>
              </a>
            </Grid>
            <Grid xs={2}>
            </Grid>
        </Grid>
        </div>


        {/* The section that contains emerging tech information */}
        <div id="about-emerging" className="emerging-tech-about" style={{ display: visEmerging ? 'block' : 'none' }}>

          <Grid container spacing={0}  justifyContent="center">

          <Grid xs={12} md={8} style={{padding: "0% 5% 1% 5%"}}>
            <h1 className="header-about">Emerging Tech Team</h1>
            <p className="paragraph-about padding-bottom-about">The emerging tech team is comprised of students from a variety of different backgrounds
            and majors, including Computational Media and Computer Science. The team focuses on exploring cutting edge technologies and their ability
            to create empathy.</p>
          </Grid>

          <Grid xs={4}>
            
          </Grid>

          {emergingTechMembers.map((item) => (
          <Grid container xs={4} md={3.5} alignItems="center" justifyContent="center" direction="column">
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
              <Grid xs={6}>
                <div className="center-text">
                  <p className="paragraph-about">{ item.name }</p>
                </div>
              </Grid>
            {/* </Paper> */}
          </Grid>
          ))}
          </Grid>
        </div>

        {/* The section that contains web team information */}
        <div id="about-web" className="web-about" style={{ display: visWeb ? 'block' : 'none' }}>


          <Grid container spacing={0} justifyContent="center">

          <Grid xs={12} md={8} style={{padding: "0% 5% 1% 5%"}}>
            <h1 className="header-about">Web Team</h1>
            <p className="paragraph-about padding-bottom-about">The Web team is comprised of students from a variety of backgrounds, such as Computer Science
            and Computational Media. The team maintains the external facing Empathy Bytes website which uses GatsbyJS, GraphQL, and Drupal. The team also
            is exploring Web XR and its capabilities to create unique and memorable experiences.</p>
          </Grid>

          <Grid xs={4}>
            
          </Grid>

          {webMembers.map((item) => (
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


        {/* The section that contains media team information */}
        <div id="about-media" className="media-about" style={{ display: visMedia ? 'block' : 'none' }}>
          <Grid container spacing={0} justifyContent="center">

          <Grid xs={12} md={8} style={{padding: "0% 5% 1% 5%"}}>
            <h1 className="header-about">Media Team</h1>
            <p className="paragraph-about padding-bottom-about">The Media team is comprised of students from a variety of backgrounds, such as Computer Science
            and Computational Media. The team creates media content for the site in addition to working across teams to help with design needs.</p>
          </Grid>

          <Grid xs={4}>
            
          </Grid>

          {mediaMembers.map((item) => (
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

        {/* The section that contains app team information */}
        <div id="about-app" className="app-about" style={{ display: visApp ? 'block' : 'none' }}>

          <Grid container spacing={0} justifyContent="center">

          <Grid xs={12} md={8} style={{padding: "0% 5% 1% 5%"}}>
            <h1 className="header-about">App Team</h1>
            <p className="paragraph-about padding-bottom-about">The App team is comprised of students from a variety of backgrounds, such as Computer Science
            and Computational Media. The team is currently creating a Mobile Application to present the teams research with future hopes of publishing on the
            Apple Store.</p>
          </Grid>

          <Grid xs={4}>
            
          </Grid>

          {/* The section contains the button to past member information */}
          {appMembers.map((item) => (
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
          <div className="about-nav-past" style={{paddingTop: 25, paddingBottom: 25}}>
              <Link to="/pastmembers" className="noUnderline">
                <h3 className="about-nav-text">Past Members</h3>
              </Link>
          </div>
      </div>
    </Layout>
  );
}

export default AboutPage;