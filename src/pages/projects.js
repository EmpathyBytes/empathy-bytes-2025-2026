import * as React from "react";
import { useState } from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby"
import CollectionCard from "../components/collectioncard";
import Grid from "@mui/material/Grid";
import "../styles/projects.css"
import "../styles/all.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollToTop from "../components/scrollToTop";

/**
 * This is the projects homepage. It displays all of the
 * interview collections.
 * 
 * @param {*} param0 - graphql query 
 * @returns projectsPage
 */

const ProjectsPage = ({data}) => {
    //const matches takes in the width of the device
    const matches = useMediaQuery('(min-width:600px)');

    //const arr takes in data from drupal
    const arr = data.collections.nodes;

    // These functions set the visibility of each collection (from about.js)
    const [visEmerging, setToggleMaker] = useState(false);
    const [visWeb, setToggleWeb] = useState(false);
    const [visMedia, setToggleMedia] = useState(false);
    const [visApp, setToggleApp] = useState(false);

    function toggleMaker() {
        setToggleMaker(true);
        setToggleWeb(false);
        setToggleMedia(false);
        setToggleApp(false);
    }
    function toggleWeb() {
        setToggleMaker(false);
        setToggleWeb(true);
        setToggleMedia(false);
        setToggleApp(false);
    }
    function toggleMedia() {
        setToggleMaker(false);
        setToggleWeb(false);
        setToggleMedia(true);
        setToggleApp(false);
    }
    function toggleApp() {
        setToggleMaker(false);
        setToggleWeb(false);
        setToggleMedia(false);
        setToggleApp(true);
    }

    //use if statement to make the dif layouts
    if (matches) { //desktop view rendered
        return (
            <div className="bg">
                <Layout>
                <ScrollToTop/>
                    <div className="projectsContainer">
                        <h1 className="projectsTitle">Interview Collections</h1>

                            {/* Div that contains the navbar */}
                            <div className="project-nav" style={{ paddingTop: 25, paddingBottom: 25 }}>
                            <Grid container spacing={2} className="project-navBG">

                                <Grid xs={1}>
                                </Grid>

                                <Grid xs={2}>
                                <a href="#project-maker" className="noUnderline">
                                    <h3 className="project-nav-text" onClick={toggleMaker}>Makerspaces</h3>
                                </a>
                                </Grid>

                                <Grid xs={2}>
                                <a href="#project-math" className="noUnderline">
                                    <h3 className="project-nav-text" onClick={toggleWeb}>Distance Math</h3>
                                </a>
                                </Grid>

                                <Grid xs={2}>
                                <a href="#project-BTS" className="noUnderline">
                                    <h3 className="project-nav-text" onClick={toggleMedia}>Behind the Scenes</h3>
                                </a>
                                </Grid>

                                <Grid xs={2}>
                                <a href="#project-covid" className="noUnderline">
                                    <h3 className="project-nav-text" onClick={toggleApp}>COVID-19</h3>
                                </a>
                                </Grid>

                                <Grid xs={2}>
                                <a href="#project-misc" className="noUnderline">
                                    <h3 className="project-nav-text" onClick={toggleApp}>Miscellaneous</h3>
                                </a>
                                </Grid>

                                <Grid xs={1}>
                                </Grid>

                            </Grid>
                            </div>
                            {/* Div that contains the navbar */}

                        <Grid container spacing={3}>
                        {arr.map((item) => ( // Mapping collection data to card component
                            <Grid item xs={6}>
                            <CollectionCard 
                            title = {item.title}
                            image = {item.relationships.field_image.uri.url}
                            url = {item.path.alias}
                            body = {item.body.summary}
                            />
                            </Grid> // This is a MUI grid.
                        ))}
                        </Grid>
                    </div>
                </Layout>
            </div>
        );
    } else { //mobile view rendered
        return (
            <div className="gradient_bg">
                <Layout>
                    <div className="projectsContainer">
                        <h1 className="projectsTitle">Interview Collections</h1>
                        
                        {arr.map((item) => ( // Mapping collection data to card component
                            
                            <CollectionCard 
                            title = {item.title}
                            image = {item.relationships.field_image.uri.url}
                            url = {item.path.alias}
                            />
                            
                        ))}
            
                    </div>
                </Layout>
            </div>
        );
    }
    
}

export default ProjectsPage;

export const Head = () => (
    <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>Projects</title>
    </>
    )

// Query all collections
export const query = graphql`
    query collectionQuery {
        collections: allNodeCollection {
            nodes {
                id
                path {
                    alias
                }
                title
                body {
                    summary
                  }
                  relationships {
                    field_image {
                        uri {
                            url
                        }
                    }
                  }
            }
        }
    }
    `
