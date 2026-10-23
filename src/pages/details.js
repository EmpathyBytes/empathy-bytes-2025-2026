
import React from "react";
import "../styles/projectDetails.css";
import { Link } from "gatsby";

export default function ProjectDetailsPage() {
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
        <h1 className="project-title">Project Detail</h1>

        <section className="project-content">
          <div
            className="project-image-placeholder"
            aria-label="Project image placeholder"
          >
            Image placeholder
          </div>

          <p className="project-description-placeholder">
            Placeholder text for the project description.
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

export const Head = () => (
  <title>Project Detail | Empathy Bytes</title>
);
