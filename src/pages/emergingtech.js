// This page contains all the information about the emerging tech team... 3D model implementation is also done at the end of this page. - Jacob

import React from "react";
import Layout from "../components/layout";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import BuzzPlaque from "../components/canvas/buzzplaque";
import Converse from "../components/canvas/rightconverse";
import Banner from "../images/experiences/EmergingTechTeamBanner.png";


import Grid from '@mui/material/Grid';


import "../styles/experiencesIndividual.css"
import "../styles/all.css"


function EmergingTech() {
    return(
        <Layout>
            <div className="top-banner" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Banner})`}}>
                <h1 className="header-experiences">Emerging Technologies Team</h1>
            </div>
            <div className="full-container-experiences">
                {/* <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                            <h1 className="header-experiences">The Emerging Technologies Team</h1>
                    </div>
                </Grid> */}

                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className="blue-box">
                        <p className="intro-text">
                        Our team develops virtual and augmented reality experiences with the goal of fostering empathy and understanding.
                        Through 3D technologies, we aim to preserve communities and their artifacts, giving others the chance to see and learn more about them.
                        </p>

                        </div>
                    </Grid>

                    <div className="grid-margins-experiences">
                        {/* <Grid item xs={12} sm={8}>
                            <h1 className="sub-header-experiences">What We Do</h1>
                        </Grid> */}
                        <Grid item sm={4}></Grid>
                        <Grid sm={5}></Grid>
                    </div>
                </Grid>

                <div className="divider"></div>


                <Grid container alignItems="right" spacing={3} className="grid-margins-experiences">
                    <Grid item xs={12} className="right-align-experiences">
                        <h1 className="sub-header-experiences">The VR Archives</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="paragraph-experiences-body text-body">
                            Empathy Bytes is developing a virtual reality museum where anyone can explore and learn about artifacts in the Georgia Tech Archives.
                            Our team is able to digitally preserve items such as an official 1996 Olympic Torch, Buzz’s Converse from 1988, and a 1937 rat cap
                            using photogrammetry and hand-modeling techniques. We hope this VR experience helps the Georgia Tech community strengthen
                            its connection to the school’s past and safely preserve these memories.
                        </p>
                        <br/>
                        <p className="paragraph-experiences-body models-intro">Please click and drag the 3D models below to see
                            in 360-degree view.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} alignItems="flex-end">
                    {/* Loading 3D Models */}
                    <Grid sm={6} xs={12} item>
                        <h2><center>Buzz's Plaque</center></h2>
                        {/* I would recommend following this structure for importing future models - Jacob */}
                        <div className="vr-container-1 b-1" style={{height: "300px"}}>
                            <Canvas >
                                <color
                                    attach="background"
                                    args={["#004B87"]}
                                />
                                <Suspense>
                                    <BuzzPlaque scale={20} />
    
                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}
    
                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls enableZoom={false}/>
                                </Suspense>
                            </Canvas>
                        </div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <h2><center>Buzz's Right Converse</center></h2>
                        <div className="vr-container-2 b-2" style={{height: "300px"}}>
                            <Canvas>
                                <Suspense>
                                    <Converse scale={600} />
                                        <color
                                            attach="background"
                                            args={["#004B87"]}
                                        />
                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}

                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls enableZoom={false}/>
                                </Suspense>
                            </Canvas>
                        </div> 
                    </Grid>
                </Grid>

                <div className="divider"></div>


                <Grid container spacing={2} className="" style={{padding: "2% 0 2% 0"}} alignItems={'center'}>
                    <Grid xs={12} item className="right-align-experiences">
                        <h2 className="sub-header-experiences">Progress Archive: Spring 2023</h2>
                    </Grid>
    
                    <Grid item xs={12}>
                        <iframe src="https://www.youtube.com/embed/yJHL_D9JobI" 
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

export default EmergingTech;


export const Head = () => (
    <>
        <title>Emerging Technologies Team | Empathy Bytes VIP</title>
        <meta
            name = "description"
            content = "Explore the Emerging Technologies Team at Empathy Bytes VIP—using VR/AR, photogrammetry, and 3D modeling to preserve artifacts and foster empathy."
        
        />
    </>
);