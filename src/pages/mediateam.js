// This is the Media Team page! - Jacob

import React from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/mediaTeamHeader.png";

import Grid from '@mui/material/Grid';

import "../styles/experiencesIndividual.css"
import "../styles/all.css"

function Media() {
    return(
        <Layout>
            <title>Media Team</title>
            <div className="top-banner" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Banner})`}}>
                <h1 className="header-experiences">Media Team</h1>
            </div>
            <div className="full-container-experiences">



                <Grid container spacing={0}>
                <Grid item xs={12}>
                        <div className="blue-box">
                            <p>
                                The Media Team strives to explore new communities, document the work of all of our sub-teams, and promote our VIP 
                                in new and creative ways. When exploring communities we often interview several members to find a clear view of what 
                                makes their community special. We also search for different artifacts that we can pass on to our different sub-teams 
                                so that they can discover new ways to preserve them in an engaging way.
                            </p>
                        </div>
                    </Grid>
                            
                </Grid>

                <div className="divider"></div>
                <Grid container alignItems="right" spacing={3} className="grid-margins-experiences">
                    <Grid item xs={12} className="right-align-experiences">
                        <h1 className="sub-header-experiences">Behind the Scenes Interviews</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="paragraph-experiences-body">
                            Empathy Bytes conducted behind the scenes interviews with team members to learn more about the "Why" behind our
                            projects. Watch the videos below to learn more!
                        </p>
                    </Grid>

                    <Grid item xs={0} sm={5}></Grid> 

                    <Grid xs={12} sm={12} alignItems="center" justifyContent="center" direction="column">
                            <iframe src="https://www.youtube.com/embed/caa4VsEymFU" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen
                            ></iframe>
                        </Grid>
                </Grid>
            <div className="divider"></div>
                
                <Grid container spacing={2}>
                <Grid xs={12} sm={12} item className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>

                    <Grid item xs={12} sm={12} alignItems="center" justifyContent="center" direction="column">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/6_1n8RMNrjM" 
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

export default Media;