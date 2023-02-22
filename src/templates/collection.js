import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";

// Functional Collection Component
// This Function will find all the collection components on the drupal site, and create a page
// on the gatsby site for each component

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

function Collection({data}) {
    const post = data.nodeCollection;

    return (
        <Layout>
        <div style={container}>
            <h1>{post.title}</h1>
            <img src={"https://empathybytes.library.gatech.edu" + post.relationships.field_image.uri.url}></img>
            <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
        </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Collection.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($CollectionId: String!) {
        nodeCollection(id: { eq: $CollectionId }) {
        id
        title
        body {
            processed
        }
        relationships {
            field_image {
                uri {
                    url
                    value
                }
            }
        }
    }
}
`;

export default Collection;