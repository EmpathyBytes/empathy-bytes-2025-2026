/**
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";

// Functional Interview Component
// This Function will find all the interview components on the drupal site, and create a page
// on the gatsby site for each component

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

function Interview({data}) {
    const post = data.interviewCollection;

    return (
        <Layout>
        <div style={container}>
            <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
        </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Interview.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($InterviewId: String!) {
        nodeInterview(id: { eq: $InterviewId }) {
        id
        field_author 
        field_hg_dateline
        body {
            processed
        }
    }
}
`

export default Interview;

/**
 *         relationships {
            field_image {
                uri {
                    url
                    value
                }
            }
        }


        <img src={post.relationships.field_image.uri.url ? ("https://empathybytes.library.gatech.edu" + post.relationships.field_image.uri.url) : "../images/icon.png"}></img>
 */
