import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout.js"

// Functional Article Component
// This Function will find all the article components on the drupal site, and create a page
// on the gatsby site for each component

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

const img_container = {
    position: 'relative',
    ['text-align']: 'center',
    color: 'white',
}

const img_style = {
    ["border-radius"]: '10px',
    width: '1200px', 
    height: '600px', 
    objectFit: 'cover',
};

const overlay = {
    position: 'absolute',
    ['text-align']: 'left',
    bottom: 8,
    left: 100,
}

function Article({data}) {
    const post = data.nodeArticle;

    return (
        <Layout>
            <div style={container}>
                <div style={img_container}>
                    <img style={img_style} src={post.relationships.field_image.localFile.url}></img>
                    <div style={overlay}>
                    <h1>{post.title}</h1>
                    <h3>By {post.field_author}</h3>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
            </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Article.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($ArticleId: String!) {
        nodeArticle(id: { eq: $ArticleId }) {
        field_author
        field_hg_dateline
        id
        title
        body {
            processed
        }
        field_transcript {
            processed
        }
        relationships {
            field_image {
                localFile {
                    url
                }
            }
        }
    }
}
`;

export default Article;