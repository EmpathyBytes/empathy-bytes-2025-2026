import React, { useState } from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/webSubteamBanner.jpg";
import "../styles/experiencesIndividual.css";
import "../styles/all.css";

// Tech stack icons import
import gatsbyIcon from "../images/subteam-icons/webteam-icons/gatsby-logo.avif";
import figmaIcon from "../images/subteam-icons/webteam-icons/figma-logo.png";
import jsIcon from "../images/subteam-icons/webteam-icons/js-logo.webp";
import cssIcon from "../images/subteam-icons/webteam-icons/css-logo.png";
// Import placeholder images for work examples
import designPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import projectPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";

function Web() {
    // State to track which tab is active (frontend or backend)
    const [activeTab, setActiveTab] = useState("frontend");

    // Function to handle tab switching
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Layout>
            <title>Web Team | Empathy Bytes</title>
            
            <div style={{
                background: "#004B87",
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                paddingBottom: "40px"
            }}>
            
            {/* Banner Section with gradient overlay that fades into blue */}
            <div style={{
                position: "relative",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                paddingBottom: "0px"
            }}>
                {/* Background image */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0
                }}></div>
                
                {/* Dark overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1
                }}></div>
                
                {/* Blue gradient fade at bottom - moved lower to not overlap with text */}
                <div style={{
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "150px",
                    background: "linear-gradient(to top, #004B87 20%, rgba(0, 75, 135, 0.1) 80%, rgba(0, 75, 135, 0) 100%)",
                    zIndex: 2
                }}></div>
                
                <h3 style={{margin: "0", fontSize: "1.5rem", fontWeight: "normal", zIndex: 3, position: "relative"}}>The</h3>
                <h1 style={{fontSize: "3.5rem", margin: "10px 0", fontWeight: "bold", zIndex: 3, position: "relative"}}>Web</h1>
                <h2 style={{margin: "0", fontSize: "1.8rem", fontWeight: "normal", zIndex: 3, position: "relative"}}>Development Team</h2>
            </div>
            
            {/* About Us Section */}
            <div style={{
                backgroundColor: "#003057", 
                padding: "30px 20px",
                color: "white",
                textAlign: "center",
                margin: "30px auto 15px auto",
                borderRadius: "15px",
                maxWidth: "90%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "20px", fontSize: "2rem"}}>About Us</h2>
                <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6", fontSize: "1rem"}}>
                    Our team develops this website that showcases our research and
                    our projects building towards utilizing empathy in technology. We
                    are split into two teams: Frontend and Backend. We design in
                    Figma and implement using GatsbyJS, GraphQL, and Drupal.
                </p>
            </div>
            
            {/* Team buttons */}
            <div style={{display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px"}}>
                <button 
                    style={{
                        borderRadius: "100px",
                        backgroundColor: activeTab === "frontend" ? "#857437" : "#fff",
                        color: "#000",
                        padding: "8px 30px",
                        border: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}
                    onClick={() => handleTabChange("frontend")}
                >
                    Frontend
                </button>
                <button 
                    style={{
                        backgroundColor: activeTab === "backend" ? "#857437" : "#fff",
                        color: "#000",
                        padding: "8px 30px",
                        borderRadius: "20px",
                        border: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}
                    onClick={() => handleTabChange("backend")}
                >
                    Backend
                </button>
            </div>
            
            {/* Conditional rendering based on active tab */}
            {activeTab === "frontend" ? (
                /* Frontend Section */
                <div style={{
                    backgroundColor: "#003057", 
                    padding: "30px 20px",
                    color: "white",
                    textAlign: "center",
                    margin: "15px auto",
                    borderRadius: "15px",
                    maxWidth: "90%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    <h2 style={{color: "#FFD700", marginBottom: "20px", fontSize: "2rem"}}>Frontend</h2>
                    <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6", fontSize: "1rem"}}>
                        The frontend team focuses on creating responsive, accessible, and engaging user interfaces that bring our research into life.
                    </p>
                    
                    {/* Tech Stack */}
                    <h3 style={{color: "#FFD700", marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem"}}>Tech Stack</h3>
                    <div style={{display: "flex", justifyContent: "center", gap: "35px", marginTop: "15px"}}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={gatsbyIcon} alt="Gatsby" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={figmaIcon} alt="Figma" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={jsIcon} alt="JavaScript" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={cssIcon} alt="CSS" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* Backend Section */
                <div style={{
                    backgroundColor: "#003057", 
                    padding: "30px 20px",
                    color: "white",
                    textAlign: "center",
                    margin: "20px auto",
                    borderRadius: "15px",
                    maxWidth: "90%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    <h2 style={{color: "#FFD700", marginBottom: "20px", fontSize: "2rem"}}>Backend</h2>
                    <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6", fontSize: "1rem"}}>
                        The backend team develops the server-side architecture, databases, and APIs that power our applications and enable seamless data management.
                    </p>
                    
                    {/* Tech Stack */}
                    <h3 style={{color: "#FFD700", marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem"}}>Tech Stack</h3>
                    <div style={{display: "flex", justifyContent: "center", gap: "35px", marginTop: "15px"}}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={jsIcon} alt="JavaScript" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={jsIcon} alt="GraphQL" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={jsIcon} alt="Drupal" style={{width: "40px", height: "40px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Our Work Section */}
            <div style={{
                maxWidth: "90%",
                margin: "30px auto",
                textAlign: "center",
                color: "white"
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "30px", fontSize: "2rem"}}>Our work</h2>
                
                {/* Designs Section */}
                <div style={{
                    backgroundColor: "#004B87",
                    padding: "30px 20px",
                    borderRadius: "15px",
                    marginBottom: "30px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    <h3 style={{color: "white", marginBottom: "15px", fontSize: "1.5rem"}}>Designs</h3>
                    <div style={{
                        display: "flex", 
                        justifyContent: "center", 
                        marginBottom: "20px"
                    }}>
                        <div style={{
                            width: "15px", 
                            height: "15px", 
                            backgroundColor: "#FFD700", 
                            borderRadius: "50%", 
                            margin: "0 5px"
                        }}></div>
                        <div style={{
                            width: "15px", 
                            height: "15px", 
                            backgroundColor: "#fff", 
                            borderRadius: "50%", 
                            margin: "0 5px",
                            opacity: "0.5"
                        }}></div>
                        <div style={{
                            width: "15px", 
                            height: "15px", 
                            backgroundColor: "#fff", 
                            borderRadius: "50%", 
                            margin: "0 5px",
                            opacity: "0.5"
                        }}></div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "15px"
                    }}>
                        <img 
                            src={designPlaceholder} 
                            alt="Design Example" 
                            style={{
                                width: "100%", 
                                maxWidth: "300px", 
                                height: "auto", 
                                backgroundColor: "#ccc"
                            }} 
                        />
                    </div>
                    <p style={{color: "white", fontSize: "0.9rem"}}>Description of design #1</p>
                </div>
                
                {/* Past Project Section */}
                <div style={{
                    textAlign: "center",
                    marginTop: "25px"
                }}>
                    <p style={{textAlign: "center", marginBottom: "15px"}}>past project #1</p>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "15px"
                    }}>
                        <img 
                            src={projectPlaceholder} 
                            alt="Past Project Example" 
                            style={{
                                width: "100%", 
                                maxWidth: "300px", 
                                height: "auto", 
                                backgroundColor: "#ccc"
                            }} 
                        />
                    </div>
                    <p style={{color: "white", fontSize: "0.9rem", textAlign: "center"}}>Description of past project #1</p>
                </div>
            </div>
            
            </div>
        </Layout>
    );
}

export default Web;

export const Head = () => (
    <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>Web Team | Empathy Bytes</title>
    </>
)