import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

import "../styles/articles.css";

// Functional Article Component
// This Function will find all the article components on the drupal site, and create a page
// on the gatsby site for each component
function Article({data}) {
    const post = data.nodeArticle;

    return (
        <Layout>
            <div className="articleContainer">
            <div className="articleImageContainer">
                <img className="articleImage" src={post.relationships.field_image.localFile.url}></img>
                <div className="articleTitleInfo">
                    <h1>{post.title}</h1>
                    <h3>By {post.field_author}</h3>
                </div>
            </div>
            <div className="articleText" dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
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

            // <div style={container}>
            //     <div style={img_container}>
            //         <img style={img_style} src={post.relationships.field_image.localFile.url}></img>
            //         <div style={overlay}>
            //         <h1>{post.title}</h1>
            //         <h3>By {post.field_author}</h3>
            //         </div>
            //     </div>
            //     <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>