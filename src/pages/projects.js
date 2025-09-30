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

<<<<<<< HEAD
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
=======
    // State management for filtering collections
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Function to filter collections based on selected category
    const getFilteredCollections = () => {
        if (selectedCategory === 'all') {
            return arr;
        }
        
        // Filter collections based on title keywords
        return arr.filter(item => {
            const title = item.title.toLowerCase();
            switch (selectedCategory) {
                case 'makerspaces':
                    return title.includes('makerspace') || title.includes('maker');
                case 'web':
                    return title.includes('distance math') || title.includes('math');
                case 'media':
                    return title.includes('behind the scenes') || title.includes('bts');
                case 'app':
                    return title.includes('covid') || title.includes('covid-19');
                case 'misc':
                    return title.includes('miscellaneous') || title.includes('misc');
                default:
                    return true;
            }
        });
    };

    // Category selection functions
    const selectCategory = (category) => {
        // If clicking the currently active category, deselect it (show all)
        if (selectedCategory === category) {
            console.log('Deselecting category:', category, '-> all');
            setSelectedCategory('all');
        } else {
            console.log('Selecting category:', category);
            setSelectedCategory(category);
        }
    };
>>>>>>> 40c6fdab838584c415b86df66c9d0271155ac1ca

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
<<<<<<< HEAD
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
=======
                            <Grid container spacing={10} className="project-navBG" justifyContent="center">

                                <Grid xs={2}>
                                    <h3 
                                        className={`project-nav-text ${selectedCategory === 'makerspaces' ? 'active' : ''}`}
                                        onClick={() => selectCategory('makerspaces')}
                                    >
                                        Makerspaces
                                    </h3>
                                </Grid>

                                <Grid xs={2}>
                                    <h3 
                                        className={`project-nav-text ${selectedCategory === 'web' ? 'active' : ''}`}
                                        onClick={() => selectCategory('web')}
                                    >
                                        Distance Math
                                    </h3>
                                </Grid>

                                <Grid xs={2}>
                                    <h3 
                                        className={`project-nav-text ${selectedCategory === 'media' ? 'active' : ''}`}
                                        onClick={() => selectCategory('media')}
                                    >
                                        Behind the Scenes
                                    </h3>
                                </Grid>

                                <Grid xs={2}>
                                    <h3 
                                        className={`project-nav-text ${selectedCategory === 'app' ? 'active' : ''}`}
                                        onClick={() => selectCategory('app')}
                                    >
                                        COVID-19
                                    </h3>
                                </Grid>

                                <Grid xs={2}>
                                    <h3 
                                        className={`project-nav-text ${selectedCategory === 'misc' ? 'active' : ''}`}
                                        onClick={() => selectCategory('misc')}
                                    >
                                        Miscellaneous
                                    </h3>
>>>>>>> 40c6fdab838584c415b86df66c9d0271155ac1ca
                                </Grid>

                            </Grid>
                            </div>
                            {/* Div that contains the navbar */}

<<<<<<< HEAD
                        <Grid container spacing={3}>
                        {arr.map((item) => ( // Mapping collection data to card component
=======
                        <Grid container spacing={3} className="content-transition">
                        {getFilteredCollections().map((item) => ( // Mapping filtered collection data to card component
>>>>>>> 40c6fdab838584c415b86df66c9d0271155ac1ca
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
            <div className="bg">
                <Layout>
                    <div className="projectsContainer">
                        <h1 className="projectsTitle">Interview Collections</h1>
                        
                        {/* Mobile Navigation */}
                        <div className="mobile-nav-container">
                            <div className="mobile-nav-scroll">
                                <div 
                                    className={`mobile-nav-item ${selectedCategory === 'makerspaces' ? 'active' : ''}`}
                                    onClick={() => selectCategory('makerspaces')}
                                >
                                    Makerspaces
                                </div>
                                <div 
                                    className={`mobile-nav-item ${selectedCategory === 'web' ? 'active' : ''}`}
                                    onClick={() => selectCategory('web')}
                                >
                                    Distance Math
                                </div>
                                <div 
                                    className={`mobile-nav-item ${selectedCategory === 'media' ? 'active' : ''}`}
                                    onClick={() => selectCategory('media')}
                                >
                                    Behind the Scenes
                                </div>
                                <div 
                                    className={`mobile-nav-item ${selectedCategory === 'app' ? 'active' : ''}`}
                                    onClick={() => selectCategory('app')}
                                >
                                    COVID-19
                                </div>
                                <div 
                                    className={`mobile-nav-item ${selectedCategory === 'misc' ? 'active' : ''}`}
                                    onClick={() => selectCategory('misc')}
                                >
                                    Miscellaneous
                                </div>
                            </div>
                        </div>
                        
                        <div className="content-transition">
                        {getFilteredCollections().map((item) => ( // Mapping filtered collection data to card component
                            
                            <CollectionCard 
                            title = {item.title}
                            image = {item.relationships.field_image.uri.url}
                            url = {item.path.alias}
                            />
                            
                        ))}
                        </div>
            
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
