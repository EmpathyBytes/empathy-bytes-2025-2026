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
            <title>{[post.title]}</title>
            <div className="articleContainer">
            {post.relationships.field_audio && 
                <div className="articleImageContainer">
                    <img className="articleImage" src={post.relationships.field_image.localFile.url}></img>
                    <div className="articleTitleInfo">
                        <h1 className="articleTitle">{post.title}</h1>
                        <h3 className="authorInfo"> By {post.field_author}</h3>
                        <audio className="articleAudio" src = {post.relationships.field_audio != null ? "https://empathybytes.library.gatech.edu" + post.relationships.field_audio.path.alias : null} controls>
                        </audio>
                    </div>
                </div>
            }

            { post.field_video_url ?
                <iframe className="articleVideo" width="887" height="499" 
                    src={post.field_video_url}>
                </iframe> : null
            }


            <div className="articleText" dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
            
            
            <div class="clicker" tabindex="1">View Transcript</div>
            <div class="hiddendiv">
                <div className="articleText" dangerouslySetInnerHTML={{ __html: post.field_transcript.processed }}></div>
            </div>
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
        field_video_url
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
            field_audio {
                path {
                    alias
                }
                internal {
                    contentFilePath
                }
            }
        }
    }
}
`;

export default Article;