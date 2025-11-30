import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import "../styles/articles.css";

// Functional Article Component
// This Function will find all the article components on the drupal site, and create a page
// on the gatsby site for each component

function Article({ data }) {
  const post = data.nodeArticle;
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

                    
  const toggleTranscript = () => {
    setIsTranscriptVisible(!isTranscriptVisible);
  };

  return (
    <Layout>
      <title>{[post.title]}</title>
      <div className="articleContainer">
        {/* Top Component */}
        <div className="articleTitleInfo">
          <h1 className="articleTitle">{post.title}</h1>
          <h3 className="authorInfo"> By {post.field_author}</h3>
          <div
            className="articleText"
            dangerouslySetInnerHTML={{ __html: post.body.processed }}
          ></div>
        </div>

        {/* Interview vid + pic and placeholder for interviewee info */}
        <div className="interviewInfo">
            
          {post.relationships.field_audio && (
            <div className="articleImageContainer interviewInfoChild">
              <audio
                className="articleAudio"
                src={
                  post.relationships.field_audio != null
                    ? "https://empathybytes.library.gatech.edu" +
                      post.relationships.field_audio.path.alias
                    : null
                }
                controls
              ></audio>
              <img
                className="articleImage"
                src={post.relationships.field_image?.url || ""}
                alt={post.title}
              ></img>
            </div>
          )}
          {/* TO DO: implement interviewee info field in drupal (move interviewee info out of general article info) */}
          <div className="interviewInfoChild intervieweeDesc">This is a placeholder for when we can separate the interviewee info from the general info.</div>
        </div>

        {/* Video */}
        {post.field_video_url && (
          <iframe
            className="articleVideo"
            width="887"
            height="499"
            src={post.field_video_url}
          ></iframe>
        )}


        {/* Transcript Toggle */}
        <button 
          className="clicker" 
          onClick={toggleTranscript}
        >
          {isTranscriptVisible ? 'Hide Transcript' : 'View Transcript'}
        </button>
        
        <div className={`hiddendiv ${isTranscriptVisible ? 'show' : ''}`}>
          <div
            className="articleText"
            dangerouslySetInnerHTML={{
              __html: post.field_transcript.processed,
            }}
          ></div>
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
  query ($ArticleId: String!) {
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
          url
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
