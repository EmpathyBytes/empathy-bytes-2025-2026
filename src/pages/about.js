import React, { useState } from "react"
import Layout from "../components/layout" // importing the navbar and footer
import All from "../images/people/fullTeam.jpg" // importing the full team picture
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import "../styles/about.css"
import "../styles/all.css"
import AboutComponent from "../components/aboutComponent" // everything relating to the images

import Grid from '@mui/material/Grid';

function AboutPage({ data }) {

  // These functions set the visibility of each team
  const [visEmerging, setToggleEmerging] = useState(false);
  const [visWeb, setToggleWeb] = useState(true);
  const [visMedia, setToggleMedia] = useState(false);
  const [visApp, setToggleApp] = useState(false);

  // Extract team member info from each query
  const webMembers = data.webTeam.relationships.node__team_members;
  const appMembers = data.appTeam.relationships.node__team_members;
  const emergingMembers = data.emergingTechTeam.relationships.node__team_members;
  const mediaMembers = data.mediaTeam.relationships.node__team_members;


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
        <img src={All} className="about-full" alt="Empathy Bytes VIP full team group photo" />
      </div>
      <div className="a-c-full">
        <div style={{ padding: "2% 5% 1% 5%" }}>
          <div className="about-card">
            <h1 className="header-about">About Us</h1>
            <p className="paragraph-about">
              Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we create digital scholarship.
              Our work documents the stories of diverse communities in Georgia and beyond. We examine how technology can deepen empathy,
              expand access to resources,and help us understand new perspectives, solve problems, and be better people in a world full of daily challenges.
            </p>
            <p className="paragraph-about">
              Empathy Bytes is organized into sub-teams that specialize in different areas of research while contributing to shared project goals.
              Within these groups, students pursue personal research interests and practice project-management skills and terminology.
            </p>
            <p className="paragraph-about">
              Current technologies include React, GatsbyJS, Drupal, and GraphQL for the Web team;
              Adobe Creative Cloud for the Media team; Unity and Blender for the Emerging Tech team; and Swift for the App team.
            </p>
          </div>
        </div>

        {/* Div that contains the navbar */}
        <div className="about-nav" style={{ paddingTop: 25, paddingBottom: 25 }}>
          <Grid container spacing={2} className="navBG" justifyContent="center">
            <Grid xs={12} sm={1} md={2}>
            </Grid>
            <Grid xs={12} sm={3} md={2}>
              <a href="#about-emerging" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleEmerging}>Emerging Tech</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={5} md={2}>
              <a href="#about-web" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleWeb}>Web</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={5} md={2}>
              <a href="#about-media" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleMedia}>Media</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={3} md={2}>
              <a href="#about-app" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleApp}>App</h3>
              </a>
            </Grid>
            <Grid xs={12} sm={1} md={2}>
            </Grid>
          </Grid>
        </div>


        {/* The section that contains emerging tech information */}
        <div id="about-emerging" className="emerging-tech-about" style={{ display: visEmerging ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Emerging Tech"}
            members={emergingMembers}
            about={"The emerging tech team is comprised of students from a variety of different backgrounds and majors, including Computational Media and Computer Science. The team explores cutting-edge technologies and how they can create empathy."}
            learnMore={"https://educast.library.gatech.edu/emergingtech/"}
          />
        </div>

        {/* The section that contains web team information */}
        <div id="about-web" className="web-about" style={{ display: visWeb ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Web"}
            members={webMembers}
            about={"The Web team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team maintains the public-facing site (GatsbyJS, GraphQL, Drupal) and explores WebXR and its capabilities to create unique and memorable experiences."}
            learnMore={"https://educast.library.gatech.edu/webteam/"}
          />
        </div>


        {/* The section that contains media team information */}
        <div id="about-media" className="media-about" style={{ display: visMedia ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Media"}
            members={mediaMembers}
            about={"The Media team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team creates site content and supports cross-team design needs."}
            learnMore={"https://educast.library.gatech.edu/mediateam/"}
          />
        </div>

        {/* The section that contains app team information */}
        <div id="about-app" className="app-about" style={{ display: visApp ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"App"}
            members={appMembers}
            about={"The App team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team is currently developing a mobile application to present the team’s research; future plans to publish on the App Store."}
            learnMore={"https://educast.library.gatech.edu/appteam/"}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
    query {
      webTeam : taxonomyTermTeam (name: {eq : "Web"}) {
            relationships {
              node__team_members {
                title
                field_current_member
                relationships {
                  field_pfp {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
      appTeam : taxonomyTermTeam (name: {eq : "App"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }

      emergingTechTeam : taxonomyTermTeam (name: {eq : "Emerging Tech"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }

      mediaTeam : taxonomyTermTeam (name: {eq : "Media"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
        
}
`;

export default AboutPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>About | Empathy Bytes VIP</title>
    <meta
      name="description"
      content="Learn about Empathy Bytes VIP—our mission, sub-teams, and how we use web, media, emerging tech, and apps to build empathy through digital scholarship."
    />
  </>
);