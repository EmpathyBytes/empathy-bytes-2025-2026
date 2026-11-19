import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import NewNavbar from "../components/new_navbar";
import '../styles/new_teamspage.css';
import githubIcon from "../images/socialmedia-icons/github_icon.png";
import instagramIcon from "../images/socialmedia-icons/instagram_icon.png";
import linkedinIcon from "../images/socialmedia-icons/linkedin_icon.png";
import youtubeIcon from "../images/socialmedia-icons/youtube_icon.png";

function NewTeamsPage({ data }) {
    const webName = data?.webTeam.name || "Web";
    const appName = data.appTeam.name || "App";
    const vrName = data?.vrTeam?.name || "VR";
    const mediaName = data?.mediaTeam?.name || "Media";

    const teams = [
        { id: 'web', title: webName, path: "/teams/web" },
        { id: 'vr', title: vrName, path: "/teams/vr" },
        { id: 'media', title: mediaName, path: "/teams/media" },
        { id: 'app', title: appName, path: "/teams/app" },
    ];

    return (
        <>
            <NewNavbar />
            <div className="teams-container">
                <section className="teams-header">
                    <h1>Teams</h1>
                    <p>Learn how our teams use their skills and technologies to bring our projects to life.</p>
                </section>

                <section className="teams-list">
                    {teams.map((team) => {
                        const imageUrl = team.relationship?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;

                        return (
                            <Link
                            to={team.path?.alias || '#'}
                            key={team.id}
                            className="team-card"
                            >
                                {imageUrl && (
                                    <img
                                        src={imageUrl}
                                        alt={team.title}
                                        className="team-card-image"
                                    />
                                )}
                                <span className="team-card-title">{team.title || team.name}</span>
                            </Link>
                        );    
                    })}
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
};

export const query = graphql`
    query TeamsPageQuery {
        webTeam: taxonomyTermTeam(name : { eq: "Web" }) {
            name
        }
        appTeam: taxonomyTermTeam(name : { eq: "App" }) {
            name
        }
        vrTeam: taxonomyTermTeam(name : { eq: "VR" }) {
            name
        }
        mediaTeam: taxonomyTermTeam(name : { eq: "Media" }) {
            name
        }
    }
`;

export default NewTeamsPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>About | Empathy Bytes VIP</title>
    <meta
      name="description"
      content="Explore Empathy Bytes VIP sub-teams: Web, App, Media, and VR."
    />
  </>
);