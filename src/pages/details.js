
import React from "react";
import "../styles/projectDetails.css";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function ProjectDetailsPage({ data }) {
  // Get collection data from Drupal
  const project = data?.collections?.nodes?.[0];

  // Get the Drupal image URL
  const imageUrl = project?.relationships?.field_image?.uri?.url;

  return (
    <Layout>
      <main className="project-details-container">
        <section className="project-content">

          {/* Project title */}
          <h1 className="project-title">
            {project?.title || "Project Detail"}
          </h1>

          {/* Project image */}
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

          {/* Project description */}
          <p className="project-description-placeholder">
            {project?.body?.summary ||
              "Placeholder text for the project description."}
          </p>

        </section>
      </main>
    </Layout>
  );
}

// Retrieve collection content from Drupal
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

export const Head = () => (
  <title>Project Detail | Empathy Bytes</title>
);
