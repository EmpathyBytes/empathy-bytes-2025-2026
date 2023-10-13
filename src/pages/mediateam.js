// This is the Media Team page! - Jacob

import React from "react";
import Layout from "../components/layout";

import Grid from '@mui/material/Unstable_Grid2';

import "../styles/experiencesIndividual.css"
import "../styles/all.css"

function Media() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                        <Grid xs={12}>
                            <h1 className="header-experiences">The Media Team</h1>
                        </Grid>
                    </div>
                </Grid>


                <Grid container spacing={0} className="bg-1">
                    <div className="grid-margins-experiences">
                        <Grid xs={10}>
                            <h1 className="sub-header-experiences">What We Do</h1>
                        </Grid>

                        <Grid xs={2}>
                            
                        </Grid>

                        <Grid xs={7}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">
                                The Media Team strives to explore new communities, document the work of all of our sub-teams, and promote our VIP 
                                in new and creative ways. When exploring communities we often interview several members to find a clear view of what 
                                makes their community special. We also search for different artifacts that we can pass on to our different sub-teams 
                                so that they can discover new ways to preserve them in an engaging way.
                            </p>
                        </Grid>

                        <Grid xs={5}>
                            
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={0} className="">
                    <div className="grid-margins-experiences">

                        <Grid xs={12} className="right-align-experiences">
                            <h1 className="sub-header-experiences">Behind the Scenes Interviews</h1>
                        </Grid>


                        <Grid xs={12}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">
                                Empathy Bytes conducted behind the scenes interviews with team members to learn more about the "Why" behind our
                                projects. Watch the videos below to learn more!
                            </p>
                        </Grid>

                        <Grid xs={12} container alignItems="center" justifyContent="center" direction="column" style={{padding: "2% 0 2% 0"}}>
                            <iframe width="840" height="472" src="https://www.youtube.com/embed/caa4VsEymFU" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </Grid>
                    </div>

                </Grid>

                
                <Grid container spacing={2} className="bg-1" style={{padding: "2% 0 2% 0"}}>
                    <Grid xs={6} container className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>


                    <Grid container xs={6} alignItems="center" justifyContent="center" direction="column">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6_1n8RMNrjM" 
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