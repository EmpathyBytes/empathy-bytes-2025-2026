import React from "react";
import Layout from "../components/layout";
import Slideshow from "../components/Slideshow";
import placeholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import "../styles/all.css";
import "../styles/teamdetail.css";

const DRUPAL_URL = "https://empathybytes.library.gatech.edu";

const getImageUrl = (field) =>
    field?.uri?.url ? DRUPAL_URL + field.uri.url : placeholder;

function TeamDetail() {
    // Placeholder content. Later this comes from the Drupal query via `data`.
    const team = {
        title: "Team Detail",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        photo: null,
    };

    const slides = [1, 2, 3].map((n) => ({
        image: placeholder,
        description: `Project ${n}`,
    }));

    return (
        <Layout>
            <div className="teamdetail-page">
                <h1 className="teamdetail-title">{team.title}</h1>

                <section className="section" aria-labelledby="about-title">
                    <h2 id="about-title">About us</h2>
                    <p>{team.description}</p>
                </section>

                <section className="section" aria-labelledby="meet-title">
                    <h2 id="meet-title">Meet the team</h2>
                    <img className="teamdetail-photo" src={getImageUrl(team.photo)} alt="The team" />
                </section>

                <section className="section ourwork" aria-labelledby="work-title">
                    <div className="teamdetail-head">
                        <h2 id="work-title">Check out some of our work!</h2>
                        <a href="/projects">Our Projects</a>
                    </div>
                    <Slideshow slides={slides} title="Projects" />
                </section>
            </div>
        </Layout>
    );
}

// TODO: add a graphql page query here once Drupal has a team content type.
// See src/pages/projects/olympics/gallery.js for the pattern.

export default TeamDetail;

export const Head = () => <title>Team Detail | Empathy Bytes</title>;