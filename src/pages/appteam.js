// This is the App Team page! - Jacob

import React from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/appTeamHeader.png";
import Grid from "@mui/material/Grid";
import MockUp from "../images/experiences/appMockUp.png";

import "../styles/experiencesIndividual.css";
import "../styles/all.css";

export function Head() {
  return (
    <>
      <title>App Team | Empathy Bytes</title>
      <meta
        name="description"
        content="Learn about the Empathy Bytes App Team and their development of an iOS application using multimedia and Mixed Reality to promote empathy."
      />
    </>
  );
}

function App() {
  return (
    <Layout>
      <div
        className="top-banner"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Banner})`,
        }}
      >
        <h1 className="header-experiences">App Team</h1>
      </div>

      <div className="full-container-experiences">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className="blue-box">
              <p>
                Our team is developing a mobile application compatible with iOS
                devices using Swift and Xcode to showcase our research and
                interactions with communities. We aim to explore multimedia and
                Mixed Reality technologies as tools to cultivate empathy within
                users.
              </p>
            </div>
          </Grid>
        </Grid>

        <div className="divider"></div>

        <div className="grid-margins-experiences">
          <Grid container spacing={2} className="bg-1">
            <Grid xs={4} container alignItems="center" justifyContent="center">
              <div style={{ marginLeft: 50 }}>
                <h2 className="sub-header-experiences" style={{ fontSize: "2rem" }}>
                  The Empathy Bytes App
                </h2>
                <p>
                  The Empathy Bytes mobile application acts as a portal
                  showcasing our research on communities within Georgia Tech
                  through interactive content such as interviews, AR experiences,
                  and multimedia elements.
                </p>
              </div>
            </Grid>

            <Grid xs={4} container alignItems="center" justifyContent="center">
              <div style={{ transform: "scale(0.8)" }}>
                <img
                  src={MockUp}
                  alt="Mockup of the Empathy Bytes iOS app interface."
                />
              </div>
            </Grid>

            <Grid xs={4} container alignItems="center" justifyContent="center">
              <div style={{ transform: "scale(0.8)" }}>
                <h3 className="grid-margins-experiences" style={{ fontSize: "1.8rem" }}>
                  Spring 2023 Progress (Archived)
                </h3>

                <iframe
                  width="320"
                  height="180"
                  src="https://www.youtube.com/embed/zYQYxpvwx8U"
                  title="App Team Demo Spring 2023"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <p style={{ fontSize: "0.9rem" }}>
                  <a
                    href="https://www.youtube.com/watch?v=zYQYxpvwx8U"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube (captions available)
                  </a>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
}

export default App;