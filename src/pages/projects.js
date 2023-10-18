import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import CollectionCard from "../components/collectioncard";
import Grid from "@mui/material/Grid";
import "../styles/projects.css"
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * This is the projects homepage. It displays all of the
 * interview collections.
 * 
 * @param {*} param0 - graphql query 
 * @returns projectsPage
 */
const ProjectsPage = ({data}) => {

    const matches = useMediaQuery('(min-width:600px)');

    const arr = data.collections.nodes;
    if (matches) {
        return (
            <div className="gradient_bg">
                <Layout>
                    <div className="projectsContainer">
                        <h1 className="projectsTitle">Interview Collections</h1>

                        <Grid container spacing={4}>
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
    } else {
        return (
            <div className="gradient_bg">
                <Layout>
                    <div className="projectsContainer">
                        <h1 className="projectsTitle">Interview Collections</h1>
                        <Grid container spacing={2}>
                        {arr.map((item) => ( // Mapping collection data to card component
                            
                            <CollectionCard 
                            title = {item.title}
                            image = {item.relationships.field_image.uri.url}
                            url = {item.path.alias}
                            />
                            
                        ))}
                        </Grid>
                    </div>
                </Layout>
            </div>
        );
    }
    
}

export default ProjectsPage;

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
