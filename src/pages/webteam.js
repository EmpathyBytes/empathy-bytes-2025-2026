import React from "react";
import Layout from "../components/layout";
import technologies from "../images/gatsbyanddrupal.png";
import Banner from "../images/experiences/WebTeamBanner.png";
import Grid from '@mui/material/Grid';
import "../styles/experiencesIndividual.css";
import "../styles/all.css";

// Tech stack icons import
import gatsbyIcon from "../images/subteam-icons/webteam-icons/gatsby-logo.avif";
import reactIcon from "../images/subteam-icons/webteam-icons/figma-logo.png";
import htmlIcon from "../images/subteam-icons/webteam-icons/js-logo.webp";
import cssIcon from "../images/subteam-icons/webteam-icons/css-logo.png";
// Import placeholder images for work examples
import designPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import projectPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";

function web() {
    return(
        <Layout>
            <title>The Web Development Team</title>
            
            <div style={{
                background: "linear-gradient(180deg, #001833 0%, #003057 100%)",
                minHeight: "100vh",
                width: "100%",
                padding: "50px 0 40px 0",
                position: "relative",
                zIndex: "0"
            }}>
            
            {/* Banner Section with gradient overlay that blends into background */}
            <div className="top-banner" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) 70%, #001833 100%), url(${Banner})`,
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                marginBottom: "-50px", // Negative margin to create overlap effect
                position: "relative",
                zIndex: "1"
            }}>
                <h3 style={{margin: "0", fontSize: "1.5rem"}}>The</h3>
                <h1 style={{fontSize: "3rem", margin: "10px 0"}}>Web</h1>
                <h2 style={{margin: "0", fontSize: "1.8rem"}}>Development Team</h2>
            </div>
            
            {/* About Us Section */}
            <div style={{
                backgroundColor: "#003057", 
                padding: "30px 20px",
                color: "white",
                textAlign: "center",
                margin: "20px auto",
                borderRadius: "50px",
                maxWidth: "90%"
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "20px"}}>About Us</h2>
                <p style={{maxWidth: "80%", margin: "0 auto", lineHeight: "1.6"}}>
                    Our team develops this website that showcases our research and
                    our projects building towards utilizing empathy in technology. We
                    are split into two teams: Frontend and Backend. We design in
                    Figma and implement using GatsbyJS, GraphQL, and Drupal.
                </p>
                
                {/* Team buttons */}
                <div style={{display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px"}}>
                    <button style={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        padding: "8px 30px",
                        borderRadius: "20px",
                        border: "none",
                        fontWeight: "bold"
                    }}>
                        Frontend
                    </button>
                    <button style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "8px 30px",
                        borderRadius: "20px",
                        border: "none",
                        fontWeight: "bold"
                    }}>
                        Backend
                    </button>
                </div>
            </div>
            
            {/* Frontend Section */}
            <div style={{
                backgroundColor: "#003057", 
                padding: "30px 20px",
                color: "white",
                textAlign: "center",
                margin: "20px auto",
                borderRadius: "50px",
                maxWidth: "90%"
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "20px"}}>Frontend</h2>
                <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6"}}>
                    The frontend team focuses on creating responsive, accessible, and engaging user interfaces that bring our research into life.
                </p>
                
                {/* Tech Stack */}
                <h3 style={{color: "#FFD700", marginTop: "30px", marginBottom: "15px"}}>Tech Stack</h3>
                <div style={{display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px"}}>
                    <img src={gatsbyIcon} alt="Gatsby" style={{width: "40px", height: "40px"}} />
                    <img src={reactIcon} alt="React" style={{width: "40px", height: "40px"}} />
                    <img src={htmlIcon} alt="HTML" style={{width: "40px", height: "40px"}} />
                    <img src={cssIcon} alt="CSS" style={{width: "40px", height: "40px"}} />
                </div>
            </div>
            
            {/* Our Work Section */}
            <div style={{
                maxWidth: "90%",
                margin: "20px auto",
                textAlign: "center"
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "30px"}}>Our work</h2>
                
                {/* Designs Section */}
                <div style={{
                    backgroundColor: "#003057",
                    padding: "20px",
                    borderRadius: "50px",
                    marginBottom: "20px"
                }}>
                    <h3 style={{color: "white", marginBottom: "15px"}}>Designs</h3>
                    <div style={{display: "flex", justifyContent: "center", marginBottom: "10px"}}>
                        <div style={{width: "20px", height: "20px", backgroundColor: "#FFD700", borderRadius: "50%", margin: "0 5px"}}></div>
                        <div style={{width: "10px", height: "10px", backgroundColor: "white", borderRadius: "50%", margin: "5px 5px"}}></div>
                        <div style={{width: "10px", height: "10px", backgroundColor: "white", borderRadius: "50%", margin: "5px 5px"}}></div>
                    </div>
                    <img 
                        src={designPlaceholder} 
                        alt="Design Example" 
                        style={{
                            width: "100%", 
                            maxWidth: "300px", 
                            height: "auto", 
                            backgroundColor: "#ccc", 
                            marginBottom: "10px"
                        }} 
                    />
                    <p style={{color: "white", fontSize: "0.9rem"}}>Description of design #1</p>
                </div>
                
                {/* Past Project Section */}
                <div style={{marginTop: "30px", textAlign: "left", color: "white"}}>
                    <p>past project #1</p>
                    <img 
                        src={projectPlaceholder} 
                        alt="Past Project Example" 
                        style={{
                            width: "100%", 
                            maxWidth: "300px", 
                            height: "auto", 
                            backgroundColor: "#ccc", 
                            marginBottom: "10px"
                        }} 
                    />
                    <p style={{color: "white", fontSize: "0.9rem", textAlign: "center"}}>Description of past project #1</p>
                </div>
            </div>
            
            </div>
        </Layout>
    );
}

export default web;

export const Head = () => (
    <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>Web Team</title>
    </>
)