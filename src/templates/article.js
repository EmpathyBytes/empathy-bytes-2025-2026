import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

import "../styles/articles.css";

// Functional Article Component
// This Function will find all the article components on the drupal site, and create a page
// on the gatsby site for each component

// TODO: Interviews without audio currently have the Usselman interview. Need a better solution for this.
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
                       <audio className="articleAudio" src = {post.relationships.field_audio != null ? "https://www.empathybytes.library.gatech.edu" + post.relationships.field_audio.path.alias : "https://www.empathybytes.library.gatech.edu/sites/default/files/2023-02/Usselman-Interview-Nov.-13-2019.mp3"} controls>
                        There is no audio for this article.
                       </audio>
                </div>
            </div>


            <div className="articleText" dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
            
<<<<<<< HEAD
            { post.field_video_url ?
                <iframe className="articleVideo" width="887" height="499" 
                    src={post.field_video_url} title="Empathy Bytes Team Welcome" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                : null
            }
            
=======
>>>>>>> master
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