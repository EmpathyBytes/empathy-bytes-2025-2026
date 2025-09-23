// This is the App Team page! - Jacob

import React from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/appTeamHeader.png";


import Grid from '@mui/material/Grid';

import MockUp from "../images/experiences/appMockUp.png"


import "../styles/experiencesIndividual.css"
import "../styles/all.css"

function App() {
    return(
        <Layout>
            <title>App Team</title>
            <div className="top-banner" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Banner})`}}>
                <h1 className="header-experiences">App Team</h1>
                </div>
                <div className="full-container-experiences">

                <Grid container spacing={0}>


                    <Grid item xs={12}>
                        <div className="blue-box">
                            <p>
                                Our team is currently developing a mobile application compatible with iOS devices using Swift and Xcode to showcase 
                                our research and interactions with communities. We hope to explore a variety of ways to use multimedia and Mixed Reality 
                                technologies as a means to cultivate empathy within users.
                            </p>
                        </div>
                    </Grid>
                </Grid>

            <div className="divider"></div>

            <div className="grid-margins-experiences">
                <Grid container spacing={2} className="bg-1">
                    <Grid xs={4} container className="" alignItems="center" justifyContent="center">
                    <div style={{ marginLeft: 50 }}>
                        <h1 className="sub-header-experiences" style={{ fontSize: '2.0rem'}} >The Empathy Bytes App</h1>
                            <p>
                                The Empathy Bytes mobile application acts as a portal showcasing our research on communities within 
                                Georgia Tech through interactive content such as video/audio interviews and augmented reality 
                                games and models.</p>
                        </div>
                    </Grid>
                    <Grid xs={4} container className="" alignItems="center" justifyContent="center">
                        <div style={{ transform: 'scale(0.8)'}}>    
                            <img src={MockUp} alt="Mockup"></img>
                        </div>
                    </Grid>
                    <Grid xs={4} container className="" alignItems="center" justifyContent="center">
                    <div style={{ transform: 'scale(0.8)'}}>
                    <h1 className="grid-margins-experiences" style={{ fontSize: '1.8rem'}} >Spring 2023 Progress</h1>
                        <iframe width="60" height="180" src="https://www.youtube.com/embed/zYQYxpvwx8U" 
                            title="App Team Demo Spring 2023" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    </Grid>
                </Grid>
            </div>
            </div>   

                
        </Layout>
    );
}

export default App;