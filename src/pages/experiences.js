import * as React from "react"
import Layout from "../components/layout"

import Grid from '@mui/material/Unstable_Grid2';
import "../styles/experiences.css"

import VR from "../images/experiences/vr.png"
import APP from "../images/experiences/app.png"


function ExperiencesPage() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <a href="/appteam">
          <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">App</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={APP}></img>
              </div>
            </div>
          </a>
        </Grid>

        <Grid xs={6}>
          <a href="/emergingtech">
            <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">Emerging Tech</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={VR}></img>
              </div>
            </div>
          </a>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ExperiencesPage;