import React from "react";
import Layout from "../components/layout";

import Grid from '@mui/material/Unstable_Grid2';

import "../styles/emergingtech.css"
import "../styles/all.css"

function App() {
    return(
        <Layout>
            <div className="full-container-emerging-tech">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-emerging-tech">
                        <Grid xs={12}>
                            <h1 className="header-emerging-tech">The App Development Team</h1>
                        </Grid>
                    </div>
                </Grid>


                <Grid container spacing={0} className="bg-1">
                    <div className="grid-margins-emerging-tech">
                        <Grid xs={10}>
                            <h1 className="sub-header-emerging-tech">what we do</h1>
                        </Grid>

                        <Grid xs={2}>
                            
                        </Grid>

                        <Grid xs={7}>
                            <p className="paragraph-emerging-tech paragraph-intent-emerging-tech-left">
                                Our team develops mobile applications to showcase our research and 
                                explore empathy with Mixed Reality technologies.
                            </p>
                        </Grid>

                        <Grid xs={5}>
                            
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={0} className="">
                    <div className="grid-margins-emerging-tech">

                        <Grid xs={12} className="right-align-emerging-tech">
                            <h1 className="sub-header-emerging-tech">the empathy bytes mobile app</h1>
                        </Grid>


                        <Grid xs={12}>
                            <p className="paragraph-emerging-tech paragraph-intent-emerging-tech-left">Empathy Bytes is developing a 
                            mobile application to act as a portal showcasing our research on communities within Georgia Tech.
                            </p>
                        </Grid>
                    </div>

                </Grid>

                <Grid container spacing={0} className="bg-1">
                    <div className="grid-margins-emerging-tech">

                        <Grid xs={12} className="right-align-emerging-tech">
                            <h1 className="sub-header-emerging-tech">App Mock Ups</h1>
                        </Grid>
                    </div>

                </Grid>
                
                <Grid container spacing={0} className="" alignItems="center" justifyContent="center" direction="column">
                    <div className="grid-margins-emerging-tech">
                        <Grid container xs={12}>
                            <iframe src="https://youtube.com/embed/PGEr1T6ilTw?feature=share" title="App Redesign" width="640px" height="480px"></iframe>
                        </Grid>
                    </div>

                </Grid>
            </div>
        </Layout>
    );
}

export default App;