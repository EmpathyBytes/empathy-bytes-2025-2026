import * as React from "react";
//import Box from "@mui/material/Box";
import Layout from "../components/layout";
import { graphql } from "gatsby"

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 180,
};

export const query = graphql`
    query collectionQuery {
        collections: allNodeCollection {
            nodes {
                id
                title
                body {
                    processed
                  }
                  field_image {
                    alt
                    title
                    width
                    height
                    drupal_internal__target_id
                  }
            }
        }
    }
    `
const projectsPage = ({data}) => {

    const arr = data.collections.nodes;

    /**
    * TODO: 
    * 1) Make it so processed body text does not have tags :(
    * 2) Make a collection component so all this junk is elsewhere
    * 3) Make a button to link to interviews? make interview
    *   cards? design questions?
    * 4) How to get images?????
    */
    return (
        <Layout>
            <div style={container}>
                <h1>Interview Collections</h1>
                
                {arr.map((item) => (
                    <ul>
                    <h3>{item.title}</h3>
                    {item.body.processed}
                    </ul>
                ))}
                
            </div>
        </Layout>
    );
}

export default projectsPage;