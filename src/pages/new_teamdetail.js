import React from "react";
import { Link } from "gatsby";
import NewNavbar from "../components/new_navbar";
import Slideshow from "../components/Slideshow";
import placeholder from "../images/subteam-icons/webteam-icons/image-placeholder.jpeg";
import githubIcon from "../images/socialmedia-icons/github_icon.png";
import instagramIcon from "../images/socialmedia-icons/instagram_icon.png";
import linkedinIcon from "../images/socialmedia-icons/linkedin_icon.png";
import youtubeIcon from "../images/socialmedia-icons/youtube_icon.png";
import "../styles/new_navstyles.css";
import "../styles/all.css";
import "../styles/new_teamdetail.css";

const DRUPAL_URL = "https://empathybytes.library.gatech.edu";

const getImageUrl = (field) =>
    field?.uri?.url ? DRUPAL_URL + field.uri.url : placeholder;

function NewTeamDetail() {
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
        <>
            <NewNavbar />

            <div className="newteamdetail-page">
                <h1 className="newteamdetail-title">{team.title}</h1>

                <section className="section" aria-labelledby="about-title">
                    <h2 id="about-title">About us</h2>
                    <p>{team.description}</p>
                </section>

                <section className="section" aria-labelledby="meet-title">
                    <h2 id="meet-title">Meet the team</h2>
                    <img className="teamdetail-photo" src={getImageUrl(team.photo)} alt="The team" />
                </section>

                <section className="section ourwork" aria-labelledby="work-title">
                    <div className="newteamdetail-head">
                        <h2 id="work-title">Check out some of our work!</h2>
                        <a href="/projects">Our Projects</a>
                    </div>
                    <Slideshow slides={slides} title="Projects" />
                </section>
            </div>

            <footer className="new-about-footer">
                                            <div className="new-about-footer-content">
                                              <div className="new-about-footer-brand">
                                                <h2> Empathy Bytes</h2>
                                                <p>A Georgia Tech VIP exploring technology, creativity, and community.</p>
                                              </div>
                                              <div className="new-about-footer-links">
                                                <h3>Explore</h3>
                                                <ul>
                                                  <li><Link to="/new_projects">Projects</Link></li>
                                                  <li><Link to="/new_teamspage">Teams</Link></li>
                                                  <li><Link to="/new_about">About</Link></li>
                                                </ul>
                                              </div>
                                              <div className="new-about-footer-social">
                                                <h3>Follow Us!</h3>
                                                <div className="new-about-footer-icons">
                                                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                    <img src={instagramIcon} alt="Instagram" width ="20" height="20" />
                                                  </a>
                                                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                                    <img src={youtubeIcon} alt="YouTube" width="20" height="20" />
                                                  </a>
                                                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                    <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" />
                                                  </a>
                                                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                                    <img src={githubIcon} alt="GitHub" width="20" height="20" />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                  </footer>
                                </>
    );
}

// TODO: add a graphql page query here once Drupal has a team content type.
// See src/pages/projects/olympics/gallery.js for the pattern.

export default NewTeamDetail;

export const Head = () => <title>Team Detail | Empathy Bytes</title>;