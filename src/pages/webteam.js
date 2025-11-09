import React, { useState } from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/webSubteamBanner.jpg";
import "../styles/experiencesIndividual.css";
import "../styles/all.css";
import "../styles/webteam.css";
import Slideshow from "../components/Slideshow";

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
    // Single state for tabs
    const [activeTab, setActiveTab] = useState("frontend");

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
    
    // Tab change
    const handleTabChange = (tab) => setActiveTab(tab);

    return (
        <Layout>
            <title>Web Team | Empathy Bytes</title>
            
            <div className="webteam-page">
            
            {/* Banner Section*/}
            <div className="banner">
                {/* Background image */}
                <div
                  className="banner__bg"
                  style={{ backgroundImage: `url(${Banner})` }}
                  aria-hidden="true"
                />
                {/* Dark overlay */}
                <div className="banner__overlay" aria-hidden="true" />
                {/* Blue gradient fade at bottom*/}
                <div className="banner__fade" aria-hidden="true" />
                <h3 className="banner__h3">The</h3>
                <h1 className="banner__h1">Web</h1>
                <h2 className="banner__h2">Development Team</h2>
            </div>
            
            {/* About Us Section */}
            <section className="section" aria-labelledby="about-title">
                <h2 id="about-title">About Us</h2>
                <p>
                    Our team develops this website that showcases our research and
                    our projects building towards utilizing empathy in technology. We
                    are split into two teams: Frontend and Backend. We design in
                    Figma and implement using GatsbyJS, GraphQL, and Drupal.
                </p>
            </section>
            
            {/* Team buttons */}
            <div className="tabs" role="tablist" aria-label="Team sections">
                <button
                    className={`tabButton ${activeTab === "frontend" ? "is-active" : ""}`}
                    aria-pressed={activeTab === "frontend"}
                    onClick={() => handleTabChange("frontend")}
                >
                    Frontend
                </button>
                <button
                    className={`tabButton ${activeTab === "backend" ? "is-active" : ""}`}
                    aria-pressed={activeTab === "backend"}
                    onClick={() => handleTabChange("backend")}
                >
                    Backend
                </button>
            </div>
            
            {/* Conditional rendering based on active tab */}
            {activeTab === "frontend" ? (
                /* Frontend Section */
                <section className="section" aria-labelledby="frontend-title">
                    <h2 id="frontend-title">Frontend</h2>
                    <p>
                        The frontend team focuses on creating responsive, accessible, and engaging user interfaces that bring our research into life.
                    </p>
                    {/* Tech Stack */}
                    <h3 className="section__subhead">Tech Stack</h3>
                    <div className="techstack-row">
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={gatsbyIcon} alt="Gatsby" className="techstack-img gatsby" />
                            </div>
                        </div>
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={figmaIcon} alt="Figma" className="techstack-img figma" />
                            </div>
                        </div>
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={jsIcon} alt="JavaScript" className="techstack-img js" />
                            </div>
                        </div>
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={cssIcon} alt="CSS" className="techstack-img css" />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                /* Backend Section */
                <section className="section" aria-labelledby="backend-title">
                    <h2 id="backend-title">Backend</h2>
                    <p>
                        The backend team builds robust systems that power our content management and data delivery.
                    </p>
                    {/* Tech Stack */}
                    <h3 className="section__subhead">Tech Stack</h3>
                    <div className="backend-row">
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={drupalIcon} alt="Drupal" className="techstack-img drupal" />
                            </div>
                        </div>
                        <div className="techstack-item">
                            <div className="techstack-icon">
                                <img src={graphqlIcon} alt="GraphQL" className="techstack-img graphql" />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            
            {/* Our Work Section - Slideshow*/}
            <section className="ourwork" aria-labelledby="ourwork-title">
                <h2 id="ourwork-title" className="ourwork__title">Our Work</h2>

                <Slideshow slides={slides} title="Designs" />

                {/*Placeholder for Projects Section*/}
                <h4 className="project__title">Project #1</h4>
                <div className="project__imageWrap">
                    <img 
                        src={designPlaceholder}
                        alt="Project #1 placeholder"
                        className="project__image"
                    />
                </div>
                <p className="project__desc">Description of Project #1</p>
            </section>
            
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