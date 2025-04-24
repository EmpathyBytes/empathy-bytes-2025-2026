import React, { useState } from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/webSubteamBanner.jpg";
import "../styles/experiencesIndividual.css";
import "../styles/all.css";

//icons for tech stack
import gatsbyIcon from "../images/subteam-icons/webteam-icons/gatsby-logo.avif";
import figmaIcon from "../images/subteam-icons/webteam-icons/figma-logo.png";
import jsIcon from "../images/subteam-icons/webteam-icons/js-logo.webp";
import cssIcon from "../images/subteam-icons/webteam-icons/css-logo.png";
import drupalIcon from "../images/subteam-icons/webteam-icons/drupal-logo.png";
import graphqlIcon from "../images/subteam-icons/webteam-icons/graphql-logo.png";

//assets for design and project section
import designPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import projectPlaceholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import redesignTemplate from "../images/subteam-icons/webteam-icons/webteam-assets/redesignTemplate.png";
import kellyRedesign from "../images/subteam-icons/webteam-icons/webteam-assets/kellyRedesign.png";
import mishaRedesign from "../images/subteam-icons/webteam-icons/webteam-assets/mishaRedesign.png";
import tiffanyRedesign from "../images/subteam-icons/webteam-icons/webteam-assets/tiffanyRedesign.png";

function Web() {
    // State to track which tab is active (frontend or backend)
    const [activeTab, setActiveTab] = useState("frontend");
    
    // State to track current slide in the slideshow
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: redesignTemplate,
            description: "Redesign of general template for subteam pages"
        },
        {
            image: mishaRedesign,
            description: "Redesign of interviews page by Misha"
        },
        {
            image: tiffanyRedesign,
            description: "Redesign of landing page by Tiffany"
        },
        {
            image: kellyRedesign,
            description: "Redesign of web team subteam page by Kelly"
        }
    ];
    
    // Function to handle tab switching
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    
    // Functions to navigating slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    
    // Function for set slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
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
            
            {/* Banner Section*/}
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
                
                {/* Blue gradient fade at bottom*/}
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
            <div style={{display: "flex", justifyContent: "center", gap: "40px", marginTop: "60px", marginBottom: "60px"}}>
                <button 
                    style={{
                        borderRadius: "100px",
                        backgroundColor: activeTab === "frontend" ? "#857437" : "#fff",
                        color: activeTab == "frontend" ? "#FFFF": "#003057",
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
                        color: activeTab == "backend" ? "#FFFF": "#003057",
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
                    <h2 style={{color: "#E0BB56", marginBottom: "20px", fontSize: "2rem"}}>Frontend</h2>
                    <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6", fontSize: "1rem"}}>
                        The frontend team focuses on creating responsive, accessible, and engaging user interfaces that bring our research into life.
                    </p>
                    
                    {/* Tech Stack */}
                    <h3 style={{color: "#E0BB56", marginTop: "30px", marginBottom: "15px", fontSize: "1.2rem"}}>Tech Stack</h3>
                    <div style={{display: "flex", justifyContent: "center", gap: "35px", marginTop: "15px"}}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={gatsbyIcon} alt="Gatsby" style={{width: "150px", height: "60px"}} />
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
                                <img src={figmaIcon} alt="Figma" style={{width: "80px", height: "80px"}} />
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
                                <img src={jsIcon} alt="JavaScript" style={{width: "60px", height: "60px"}} />
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
                                <img src={cssIcon} alt="CSS" style={{width: "60px", height: "60px"}} />
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
                    <h2 style={{color: "#E0BB56", marginBottom: "20px", fontSize: "2rem"}}>Backend</h2>
                    <p style={{maxWidth: "90%", margin: "0 auto", lineHeight: "1.6", fontSize: "1rem"}}>
                        The backend team builds robust systems that power our content management and data delivery.
                    </p>
                    
                    {/* Tech Stack */}
                    <h3 style={{color: "#E0BB56", marginTop: "30px", marginBottom: "15px", fontSize: "1.2rem"}}>Tech Stack</h3>
                    <div style={{display: "flex", justifyContent: "center", gap: "120px", marginTop: "15px"}}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                display: "flex", 
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={drupalIcon} alt="Drupal" style={{width: "300px", height: "150px"}} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ 
                                width: "80px", 
                                height: "60px", 
                                display: "flex",
                                justifyContent: "center", 
                                alignItems: "center"
                            }}>
                                <img src={graphqlIcon} alt="GraphQL" style={{width: "200px", height: "100px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Our Work Section - Slideshow*/}
            <div style={{
                padding: "30px 20px",
                color: "white",
                textAlign: "center",
                margin: "30px auto",
                borderRadius: "15px",
                maxWidth: "90%",
            }}>
                <h2 style={{color: "#FFD700", marginBottom: "30px", fontSize: "2rem"}}>Our Work</h2>
                
                {/* Slideshow container*/}
                <div style={{
                    position: "relative",
                    maxWidth: "600px",
                    margin: "0 auto",
                }}>
                    {/* Semi-transparent background */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#003057",
                        opacity: 0.4,
                        borderRadius: "10px",
                        zIndex: 1
                    }}></div>
                    
                    {/* Content container - this will be fully opaque */}
                    <div style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "350px",
                    }}>
                        <h3 style={{color: "white", marginBottom: "20px", fontSize: "1.5rem"}}>Designs</h3>
                        
                        {/* Indicator dots */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            {slides.map((_, index) => (
                                <div 
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: currentSlide === index ? "#004B87" : "#022541",
                                        opacity: currentSlide === index ? 1 : 0.5,
                                        borderRadius: "50%",
                                        margin: "0 5px",
                                        cursor: "pointer"
                                    }}
                                ></div>
                            ))}
                        </div>
                        
                        {/* Image */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "15px",
                            maxWidth: "100%",
                            height: "200px",
                            marginTop: "20px"
                        }}>
                            <img 
                                src={slides[currentSlide].image} 
                                alt={slides[currentSlide].title} 
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    borderRadius: "8px"
                                }} 
                            />
                        </div>
                        
                        {/* Description */}
                        <p style={{color: "white", fontSize: "0.9rem", marginTop: "10px"}}>
                            {slides[currentSlide].description}
                        </p>
                    </div>
                    
                    {/* Navigation arrows*/}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: "0 10px",
                        zIndex: 3
                    }}>
                        <button 
                            onClick={prevSlide}
                            style={{
                                width: "40px",
                                height: "60px",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                border: "none",
                                borderRadius: "50%",
                                color: "white",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                margin: "0 15px"
                            }}
                        >
                            ←
                        </button>
                        <button 
                            onClick={nextSlide}
                            style={{
                                width: "40px",
                                height: "60px",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                border: "none",
                                borderRadius: "50%",
                                color: "white",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                margin: "0 15px",
                                position: "relative",
                                right: "15px"
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
                {/*Placeholder for Projects Section*/}
                <h4 style={{color: "white", marginTop: "40px", marginBottom: "15px", fontSize: "1rem"}}>Project #1</h4>
                    {/* Placeholder Image */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "15px",
                        maxWidth: "100%",
                        height: "200px",
                        marginTop: "20px"
                    }}>
                    <img 
                        src={designPlaceholder} 
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "8px"
                        }}
                    />
                </div>                
                <p1>Description of Project #1</p1>
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