import * as React from "react";
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import CollectionCard from "../components/collectioncard";

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

const projectsPage = ({data}) => {

    const arr = data.collections.nodes;
    return (
        <Layout>
            <div style={container}>
                <h1>Interview Collections</h1>
                {arr.map((item) => ( // Mapping collection data to card component
                    <CollectionCard 
                    title = {item.title}
                    image = {item.relationships.field_image.uri.url}
                    url = {item.path.alias}
                    />
                ))}
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