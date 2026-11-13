import React from "react";
import "../styles/new_details.css";
import { graphql } from "gatsby";
import Layout from "../components/layout";


const DRUPAL_BASE_URL = "https://empathybytes.library.gatech.edu";

//pageContext holds info when a page is created in gatsby-node.js
//Waiting on more from media team since this page is very basic
//may need to make components for the image + description
//NOTE: description is just a placeholder atm, but images and title display
export default function ProjectDetailsPage({ data, pageContext }) {
  // Only set when the page was created for a specific project
  const projectId = pageContext?.id;

  // Find the matching project; undefined if visited directly
  const project = projectId
    ? data.collections.nodes.find((node) => node.id === projectId)
    : null;

  const imagePath = project?.relationships?.field_image?.uri?.url;
  const imageUrl = imagePath ? DRUPAL_BASE_URL + imagePath : undefined;

  return (
    <Layout>
      <main className="project-details-container">

        {/*title, image, and description if project loaded, otherwise default */}
        <section className="project-content">
          <h1 className="project-title">
            {project?.title || "Project Detail"}
          </h1>

          <div className="project-image-placeholder">
            {imageUrl ? (
              <img
                className="project-image"
                src={imageUrl}
                alt={project?.title || "Project image"}
              />
            ) : (
              <span>Image placeholder</span>
            )}
          </div>

          <p className="project-description-placeholder">
            {project?.body?.summary ||
              "Placeholder text for the project description."}
          </p>
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetailsQuery {
    collections: allNodeCollection {
      nodes {
        id
        title
        body {
          summary
        }
        path {
          alias
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
`;

// sets browser tab title
export const Head = ({ data, pageContext }) => {
  const project = pageContext?.id
    ? data.collections.nodes.find((node) => node.id === pageContext.id)
    : null;
  return <title>{project?.title || "Project Detail"} | Empathy Bytes</title>;
};