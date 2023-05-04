import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import CollectionCard from "../components/collectioncard";
import Grid from "@mui/material/Grid";
import "../styles/projects.css"

/**
 * This is the projects homepage. It displays all of the
 * interview collections.
 * 
 * @param {*} param0 - graphql query 
 * @returns projectsPage
 */
const projectsPage = ({data}) => {

    const arr = data.collections.nodes;
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
}

export default projectsPage;

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