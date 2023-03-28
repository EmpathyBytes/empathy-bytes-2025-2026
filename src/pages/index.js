import * as React from "react"
import Layout from "../components/layout"

import "../styles/homepage.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"

import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



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
      <Grid container spacing={2}>
        <Grid xs={12}>
          <h1 className="header">What is Empathy Bytes?</h1>
          <p className="paragraph">
            Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
            We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
            currently focuses on identifying and presenting distinct communities connected to Georgia Tech.
          </p>
        </Grid>
        <Grid xs={12}>
        <hr></hr>
        </Grid>
        <Grid xs={12}>
          <h1 className="header">Our Types of Technology</h1>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://thenounproject.com/api/private/icons/5621920/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkImQoebjxN2U6ruMR1S1kXBaLMX0XXLTJfr0AIfn9rZVtjnpEWEpTZonhDkMgCLfCXsxrrZLRD1QbArALB87ewW5mDg%3D%3D"
            />
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">Web Track</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://thenounproject.com/api/private/icons/2462652/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkImQoebjxN2U6ruMR1S1kXBaLMX0XXLTJfr0AIfn9rZVtjnpEWEpTZonhDkMgCLfCXsxrrZLRD1QbArALB87ewW5mDg%3D%3D"
            />
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">VR Track</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://thenounproject.com/api/private/icons/1295152/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkImQoebjxN2U6ruMR1S1kXBaLMX0XXLTJfr0AIfn9rZVtjnpEWEpTZonhDkMgCLfCXsxrrZLRD1QbArALB87ewW5mDg%3D%3D"
            />
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">App Track</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://thenounproject.com/api/private/icons/1682527/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkImQoebjxN2U6ruMR1S1kXBaLMX0XXLTJfr0AIfn9rZVtjnpEWEpTZonhDkMgCLfCXsxrrZLRD1QbArALB87ewW5mDg%3D%3D"
            />
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">Media Track</h1>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12}>
        <hr></hr>
        </Grid>
        <Grid xs={12}>
          <h1 className="header">Want to Learn More?</h1>
          <p className="paragraph">
            Check out or Experiences and Project Pages to learn more about the type of work we do!
          </p>
        </Grid>
        <Grid xs={3}></Grid>
        <Grid xs={3}>
        <a href="/experiences">
          <Card sx={{ maxWidth: 360 }}>
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">Experiences</h1>
            </CardContent>
          </Card>
          </a>
        </Grid>
        <Grid xs={3}>
          <a href="/projects">
          <Card sx={{ maxWidth: 360 }}>
            <CardContent style={{backgroundColor: "#003057"}}>
              <h1 className="card-text">Projects</h1>
            </CardContent>
          </Card>
          </a>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>