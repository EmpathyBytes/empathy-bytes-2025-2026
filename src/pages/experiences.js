// This is the hompage for each team's track. - Jacob

import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby";

import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "../styles/experiences.css"
import "../styles/all.css"

import EmergingTech from "../images/experiences/emergingtech.png"
import App from "../images/experiences/app.png"
import Web from "../images/experiences/web.png"
import Media from "../images/experiences/mediaBTS.jpg"


function ExperiencesPage() {
  return (
    <Layout>
      <div className="container-experiences-homepage">
        <Grid container spacing={4} rowSpacing={0}
              alignItems="center"
              justifyContent="center">

          <Grid xs={5} container alignItems="center" justifyContent="center">
            <Link to="/appteam" className="noUnderline">
              <Card sx={{ width: 600 }}>
                <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={App}
                    alt="App"
                  />
                  <h1 className="text-experience">App</h1>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid xs={5} container alignItems="center" justifyContent="center">
            <Link to="/emergingtech" className="noUnderline">
              <Card sx={{ width: 600 }}>
                <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={EmergingTech}
                    alt="Emerging Tech"
                  />
                  <h1 className="text-experience">Emerging Tech</h1>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid xs={12} container style={{paddingTop: 30}} 
              alignItems="center"
              justifyContent="center">
          <Grid xs={5} container alignItems="center" justifyContent="center">
            <Link to="/mediateam" className="noUnderline">
            <Card sx={{ width: 600 }}>
                <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={Media}
                    alt="Media"
                    className="rotate"
                  />
                  <h1 className="text-experience">Media</h1>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid xs={5} container alignItems="center" justifyContent="center">
            <Link to="/webteam" className="noUnderline">
              <Card sx={{ width: 600 }}>
                <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={Web}
                    alt="Web"
                  />
                  <h1 className="text-experience">Web</h1>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <Grid container spacing={2}>
        <Grid xs={6}>
          <Link href="/appteam">
          <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">App</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={APP}></img>
              </div>
            </div>
          </Link>
        </Grid>

        <Grid xs={6}>
          <Link href="/emergingtech">
            <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">Emerging Tech</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={VR}></img>
              </div>
            </div>
          </Link>
        </Grid>

        <Grid xs={6}>
          <Link href="/mediateam">
            <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">Media</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={VR}></img>
              </div>
            </div>
          </Link>
        </Grid>

        <Grid xs={6}>
          <Link href="/webteam">
            <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">Web</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={VR}></img>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid> */}
    </Layout>
  );
}

export default ExperiencesPage;
