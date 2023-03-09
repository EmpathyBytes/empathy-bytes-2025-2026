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

const col = {
    padding: 10,
};

const img_style = {
    height: "240",
    width: "240",
    objectFit: 'cover',
};

function Collection({data}) {
    const post = data.nodeCollection;

    return (
        <Layout>
        <div style={container}>
            <div class="row">
                <div class="col" style={col}>
                        <img style = {img_style} src={"https://empathybytes.library.gatech.edu" + post.relationships.field_image.uri.url}/>
                </div>
                <div class="col" style={col}>
                    <h1>{post.title}</h1>
                </div>
                <div class="col" style={col}><div dangerouslySetInnerHTML={{ __html: post.body.processed }}/></div>
            </div>
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