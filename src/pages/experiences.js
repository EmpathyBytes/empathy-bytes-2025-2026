import * as React from "react"
import Layout from "../components/layout"

import Grid from '@mui/material/Unstable_Grid2';
import "../styles/experiences.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"


function ExperiencesPage() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <a href="/appteam">
            <div className="container-half">
              <h1 className="top-text-2">App</h1>
            </div>
          </a>
        </Grid>

        <Grid xs={6}>
          <a href="/emergingtech">
            <div className="container-half">
              <h1 className="top-text-2">Emerging Tech</h1>
            </div>
          </a>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ExperiencesPage;