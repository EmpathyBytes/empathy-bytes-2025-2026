// This is the App Team page! - Jacob

import React from "react";
import Layout from "../components/layout";


import Grid from '@mui/material/Unstable_Grid2';

import MockUp from "../images/experiences/appMockUp.png"

import "../styles/experiencesIndividual.css"
import "../styles/all.css"

function App() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                        <Grid xs={12}>
                            <h1 className="header-experiences">The App Development Team</h1>
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
                                Our team develops mobile applications to showcase our research and 
                                explore empathy with Mixed Reality technologies.
                            </p>
                        </Grid>

                        <Grid xs={5}>
                            
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={2} className="">

                        <Grid xs={12} className="right-align-experiences">
                            <div className="grid-margins-experiences">
                                <h1 className="sub-header-experiences">The Empathy Bytes App</h1>
                            </div>
                        </Grid>


                </Grid>

                <Grid container spacing={2} className="bg-1">
                    <Grid xs={6} container className="" alignItems="center" justifyContent="center">
                        <div className="grid-margins-experiences">
                            <p className="paragraph-experiences paragraph-indent-experiences-left" style={{marginLeft: 150}}>Empathy Bytes is developing a 
                            mobile application to act as a portal showcasing our research on communities within Georgia Tech through interactive content 
                            such as video/audio interviews and augmented reality games and models.</p>
                        </div>
                    </Grid>
                    <Grid xs={6} container className="" alignItems="center" justifyContent="center">
                        <div className="grid-margins-experiences">
                            <img src={MockUp}></img>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}

export default App;