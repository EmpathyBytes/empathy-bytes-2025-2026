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
                                Our team is currently developing a mobile application compatible with iOS devices using Swift and Xcode to showcase 
                                our research and interactions with communities. We hope to explore a variety of ways to use multimedia and Mixed Reality 
                                technologies as a means to cultivate empathy within users.
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
                            <p className="paragraph-experiences paragraph-indent-experiences-left" style={{marginLeft: 150}}>
                                The Empathy Bytes mobile application acts as a portal showcasing our research on communities within 
                                Georgia Tech through interactive content such as video/audio interviews and augmented reality 
                                games and models.</p>
                        </div>
                    </Grid>
                    <Grid xs={6} container className="" alignItems="center" justifyContent="center">
                        <div className="grid-margins-experiences">
                            <img src={MockUp}></img>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="bg-1" style={{padding: "2% 0 2% 0"}}>
                    <Grid xs={6} container className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>


                    <Grid container xs={6} alignItems="center" justifyContent="center" direction="column">
                        <iframe width="469" height="833" src="https://www.youtube.com/embed/zYQYxpvwx8U" 
                            title="App Team Demo Spring 2023" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
                
            </div>
        </Layout>
    );
}

export default App;