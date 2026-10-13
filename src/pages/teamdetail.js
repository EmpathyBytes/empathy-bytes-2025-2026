import React from "react";
import Layout from "../components/layout";
import Slideshow from "../components/Slideshow";
import placeholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import "../styles/all.css";
import "../styles/teamdetail.css";

// TODO (Drupal): replace this placeholder data with a GraphQL query.
// The page should pull title, description, team photo, and projects from Drupal,
// then pass them in as `data`. See src/pages/projects/olympics/gallery.js for the pattern.

function TeamDetail() {
  const slides = [1, 2, 3].map((n) => ({
    image: placeholder,
    description: `Project ${n}`,
  }));

  return (
    <Layout>
      <div className="teamdetail-page">
        <h1 className="teamdetail-title">Team Detail</h1>

        <section className="section" aria-labelledby="about-title">
          <h2 id="about-title">About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Qui in elit
            dolores exercitation aliquip sint enim.
          </p>
        </section>

        <section className="section" aria-labelledby="meet-title">
          <h2 id="meet-title">Meet the team</h2>
          <img className="teamdetail-photo" src={placeholder} alt="The team" />
        </section>

        <section className="section" aria-labelledby="work-title">
          <div className="teamdetail-head">
            <h2 id="work-title">Check out some of our work!</h2>
            {/* TODO: link to Projects filtered by this team (see Cat's Figma note) */}
            <a href="/projects">Our Projects</a>
          </div>
          <Slideshow slides={slides} title="Projects" />
        </section>
      </div>
    </Layout>
  );
}

export default TeamDetail;

export const Head = () => <title>Team Detail | Empathy Bytes</title>;