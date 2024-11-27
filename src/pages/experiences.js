// This is the hompage for each team's track. - Jacob

import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import "../styles/experiences.css"
import "../styles/all.css"

import EmergingTech from "../images/experiences/emergingtech.png"
import App from "../images/experiences/app.png"
import Web from "../images/experiences/web.png"
import Media from "../images/experiences/mediaBTS.jpg"

import ScrollToTop from "../components/scrollToTop";

function ExperiencesPage() {
  const matches = useMediaQuery('(min-width:600px)');
  if (matches) {
    return (
      <Layout>
        <ScrollToTop/>
        <div className="container-experiences-homepage">
          <Grid container spacing={4}
                alignItems="center"
                justifyContent="center">
  
            <Grid xs={5} item>
              <Link to="/appteam" className="noUnderline">
                <Card>
                  <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                    <CardMedia
                      component="img"
                      image={App}
                      alt="App"
                      height = '250'
                    />
                      <h1 className="text-experience">App</h1>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
  
            <Grid xs={5} item>
              <Link to="/emergingtech" className="noUnderline">
                <Card>
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
  
            <Grid xs={5} item>
              <Link to="/mediateam" className="noUnderline">
              <Card>
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
  
            <Grid xs={5} item>
              <Link to="/webteam" className="noUnderline">
                <Card>
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
        </div>
        
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container-experiences-homepage">
          <Grid container spacing={4}
                alignItems="center"
                justifyContent="center">
  
            <Grid xs={5} item>
              <Link to="/appteam" className="noUnderline">
                <Card>
                  <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                    <CardMedia
                      component="img"
                      image={App}
                      alt="App"
                      height = '100'
                    />
                      <h1 className="text-experience">App</h1>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
  
            <Grid xs={5} item>
              <Link to="/emergingtech" className="noUnderline">
                <Card>
                  <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={EmergingTech}
                      alt="Emerging Tech"
                    />
                    <h1 className="text-experience">Emerging Tech</h1>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
  
            <Grid xs={5} item>
              <Link to="/mediateam" className="noUnderline">
              <Card>
                  <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={Media}
                      alt="Media"
                      className="rotate"
                    />
                    <h1 className="text-experience">Media</h1>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
  
            <Grid xs={5} item>
              <Link to="/webteam" className="noUnderline">
                <Card>
                  <CardActionArea style={{backgroundColor: "#1B3F66"}}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={Web}
                      alt="Web"
                    />
                    <h1 className="text-experience">Web</h1>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default ExperiencesPage;

export const Head = () => (
  <>
  <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
  <title>Experiences</title>
  </>
  )