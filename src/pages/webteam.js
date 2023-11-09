// This is the Web Team page! - Jacob

import React from "react";
import Layout from "../components/layout";

import technologies from "../images/gatsbyanddrupal.png"

import Grid from '@mui/material/Grid';

import "../styles/experiencesIndividual.css"
import "../styles/all.css"

function web() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                        <Grid item xs={12} className="grid-margins-experiences">
                            <h1 className="header-experiences">The Web Team</h1>
                        </Grid>
                </Grid>

                <Grid container spacing={0} className="bg-1">
                    <Grid item className="grid-margins-experiences" xs={10}>
                        <h1 className="sub-header-experiences">What We Do</h1>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <p className="paragraph-experiences paragraph-indent-experiences-left">
                            Our team develops website utilized to showcase our research. Our team is split into
                            two subteams for Web Development and Design. We created the site using GatsbyJS and Decoupled Drupal.
                            We also are experimenting with Web 3D using Three.js.
                        </p>
                    </Grid>
                </Grid>
                <Grid container alignItems="right" spacing={0} className="grid-margins-experiences">
                    <Grid item xs={12} className="right-align-experiences">
                        <h1 className="sub-header-experiences">The Website</h1>
                    </Grid>
                    <Grid item xs={0} sm={5}></Grid>
                    <Grid item xs={12} sm={7}>
                    <p className="paragraph-experiences paragraph-indent-experiences-left">Empathy Bytes is developing a 
                        web application to act as a portal showcasing our research on communities within Georgia Tech.
                        </p>
                    </Grid>
                </Grid>

                <img src={technologies} style={{width:"100%"}}/>


                <Grid container spacing={2} className="bg-1" >
                    <Grid xs={12} sm={6} item className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>


                    <Grid item xs={12} sm={6} alignItems="center" justifyContent="center" direction="column">
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