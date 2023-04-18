import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import CollectionCard from "../components/collectioncard";
import Grid from "@mui/material/Grid";
import "../styles/components/projects.css"

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

const projectsPage = ({data}) => {

    const arr = data.collections.nodes;
    return (
        <Layout>
            <div className="gradient_bg">
            <div style={container}>
                <h1>Interview Collections</h1>
                <Grid container spacing={2}>
                {arr.map((item) => ( // Mapping collection data to card component
                    <Grid item xs={4}>
                    <CollectionCard 
                    title = {item.title}
                    image = {item.relationships.field_image.uri.url}
                    url = {item.path.alias}
                    />
                    </Grid>
                ))}
                </Grid>
            </div>
            </div>
        </Layout>
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
                    processed
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