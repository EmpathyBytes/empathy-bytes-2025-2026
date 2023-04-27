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
                                Our team creates media artifacts to support our other track's endevours. We also
                                create behhind the scenes content and interviews featuring our members.
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
                    </div>

                </Grid>

            </div>
        </Layout>
    );
}

export default Media;