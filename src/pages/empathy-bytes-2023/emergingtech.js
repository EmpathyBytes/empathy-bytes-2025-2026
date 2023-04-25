import React from "react";
import Layout from "../../components/layout";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import BuzzPlaque from "../../components/canvas/buzzplaque";
import Football from "../../components/canvas/football";
import Sweater from "../../components/canvas/tSweater";
import Converse from "../../components/canvas/rightconverse";

import Grid from '@mui/material/Unstable_Grid2';


import "../../styles/experiencesIndividual.css"
import "../../styles/all.css"


function EmergingTech() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                        <Grid xs={12}>
                            <h1 className="header-experiences">The Emerging Technologies Team</h1>
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
                                Our team develops experiential technologies relating to Virtual and Mixed reality. We foster empathy through
                                the preservation of communities, artifacts, and experiences using 3D technologies.
                            </p>
                        </Grid>

                        <Grid xs={5}>
                            
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={0} className="">
                    <div className="grid-margins-experiences">

                        <Grid xs={12} className="right-align-experiences">
                            <h1 className="sub-header-experiences">The VR Archives</h1>
                        </Grid>


                        <Grid xs={12}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">Empathy Bytes is developing a 
                            Virtual Reality Museum where anyone can experience and learn artifacts in the Georgia Tech Archives.
                            Our team is able digitally preserve items such as an official 1996 Atlanta Olympics Torch, Buzz’s Converses 
                            from 1988, and a 1937 rat cap through the use of photogrammetry and hand-modeling techniques. We hope this VR experience 
                            allows the Georgia Tech Community to strengthen its connection to the school’s past and safely preserve these memories.
                            </p>
                        </Grid>
                    </div>

                </Grid>

                <Grid container spacing={2} className="bg-1">
                    
                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Buzz's Plaque</h1>
                    </Grid>

                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Buzs's Right Converse</h1>
                    </Grid>


                    <Grid xs={6} className="vr-container-1 b-1">
                        <Canvas>
                            <Suspense>
                                <BuzzPlaque scale={3.5} />
                                <Environment preset="sunset" />
                                <OrbitControls />
                            </Suspense>
                        </Canvas>
                    </Grid>

                        <Grid xs={6} className="vr-container-2 b-2">
                            <Canvas>
                                <Suspense>
                                    <Converse scale={6} />
                                    <Environment preset="sunset" />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </Grid>

                </Grid>
            </div>
        </Layout>
    );
}

export default EmergingTech;