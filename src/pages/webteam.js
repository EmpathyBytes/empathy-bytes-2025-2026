// This is the Web Team page! - Jacob

import React from "react";
import Layout from "../components/layout";

import technologies from "../images/gatsbyanddrupal.png";
import Banner from "../images/experiences/WebTeamBanner.png";

import Grid from '@mui/material/Grid';

import "../styles/experiencesIndividual.css";
import "../styles/all.css";

function web() {
    return(
        <Layout>
            <title>Web Team</title>
            <div className="top-banner" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Banner})`}}>
                <h1 className="header-experiences">Web Team</h1>
            </div>
            <div className="full-container-experiences">

                <Grid container spacing={0}>

                    <Grid item xs={12}>
                        <div className="blue-box">
                        <p>
                            Our team develops website utilized to showcase our research. Our team is split into
                            two subteams for Web Development and Design. We created the site using GatsbyJS and Decoupled Drupal.
                            We also are experimenting with Web 3D using Three.js.
                        </p>
                        </div>
                    </Grid>
                </Grid>

                <div className="divider"></div>

                <Grid container alignItems="right" spacing={3} className="grid-margins-experiences">
                    <Grid item xs={12} className="right-align-experiences">
                        <h1 className="sub-header-experiences">The Website</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="paragraph-experiences-body">Empathy Bytes is developing a 
                            web application to act as a portal showcasing our research on communities within Georgia Tech.
                        </p>
                    </Grid>

                    <Grid item xs={0} sm={5}></Grid>

                    <Grid item xs={12} className="right-align-experiences">
                        <h2 className="sub-header-experiences">Our Technologies</h2>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="blue-box" style={{width: "920px", display: "flex", justifyContent: "center"}}>
                            <img src={technologies} style={{width:"50%"}} alt="Gatsby and Drupal Logo"/>
                        </div>
                    </Grid>
                </Grid>

                <div className="divider"></div>

                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} item className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>


                    <Grid item xs={12} sm={12} alignItems="center" justifyContent="center" direction="column">
                        <iframe src="https://www.youtube.com/embed/hL6BJbFQqqk" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}

export default web;

export const Head = () => (
    <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>Web Team</title>
    </>
    )