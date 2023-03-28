
import * as React from "react"
import Layout from "../components/layout"

import Grid from '@mui/material/Unstable_Grid2';
import "../styles/experiences.css"

import VR from "../images/experiences/vr.png"
import APP from "../images/experiences/app.png"


function ExperiencesPage() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <a href="/appteam">
          <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">App</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={APP}></img>
              </div>
            </div>
          </a>
        </Grid>

        <Grid xs={6}>
          <a href="/emergingtech">
            <div className="container-half">
              <div className="text-overlay">
                <h1 className="text-experience">Emerging Tech</h1>
              </div>
              <div className="image-overlay">
              <img className="splash-experience" src={VR}></img>
              </div>
            </div>
          </a>
        </Grid>
      </Grid>
    </Layout>


import React from 'react';
import ExperiencesComponent from "../components/ExperiencesComponent";
import Navbar from "../components/navbar";

const ExperiencesPage = () => {
  return (
    <div>
      <Navbar transparent={false}/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px", textAlign: "center" }}>
        <ExperiencesComponent 
          appSection={
            <section style={{
                width: "50%",
                height: "550px",
                background: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "0 50px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}>
              <h2>App</h2>
              <p style={{lineHeight: "350px"}}>Here's where we'll showcase information about our app.</p>
            </section>
          }
          vrSection={
            <section style={{
                width: "50%",
                height: "550px",
                background: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "0 50px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}>
              <h2>VR</h2>
              <p style={{lineHeight: "350px"}}>Here's where we'll showcase information about our VR experiences.</p>
            </section>
          }
        />
      </div>
    </div>
  );
}

export default ExperiencesPage;
