import React from "react";
import "../styles/projectDetails.css";
import { Link, graphql } from "gatsby";

export default function ProjectDetailsPage({ data }) {
  // Get collection data from Drupal through GraphQL.
  // Use fallback text if the query returns no collection.
  const project = data?.collections?.nodes?.[0];

  return (
    <div className="project-details-page">
      {/* Navigation */}
      <nav className="project-nav">
        <div className="project-nav-icon">
          <span />
        </div>

        <div className="project-nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Page body */}
      <main className="project-details-container">
        <h1 className="project-title">
          {project?.title || "Project Detail"}
        </h1>

        <section className="project-content">
          {/* Keep the image placeholder until project photos are available. */}
          <div
            className="project-image-placeholder"
            aria-label="Project image placeholder"
          >
            Image placeholder
          </div>

          <p className="project-description-placeholder">
            {project?.body?.summary ||
              "Placeholder text for the project description."}
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="project-footer">
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

// Retrieve collection content from Drupal.
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