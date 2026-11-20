import React, { useState } from "react"
import All from "../images/people/fullTeam.jpg" // importing the full team picture
import Layout from '../components/layout';
import NewNavbar from "../components/new_navbar";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import "../styles/new_about.css"
import"../styles/new_navstyles.css";
import "../styles/all.css"
import githubIcon from "../images/socialmedia-icons/github_icon.png";
import instagramIcon from "../images/socialmedia-icons/instagram_icon.png";
import linkedinIcon from "../images/socialmedia-icons/linkedin_icon.png";
import youtubeIcon from "../images/socialmedia-icons/youtube_icon.png";

import Grid from '@mui/material/Grid';

function NewAboutPage({ data }) {

  // FAQ Exapnd/Collapse state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  // Contact list placeholders
  const contactsList = [
    { name: "First and Last Name", email: "test@emailaddresshere", image: null },
    { name: "First and Last Name", email: "test@emailaddresshere", image: null },
  ];

  // FAQ placeholders
  const faqList = [
    {
        question: "How do I apply?",
        answer: "To register for a VIP at Georgia Tech as an undergraduate, please follow the instructions on the official VIP application page. We welcome students from all backgrounds!"
    },
    { 
        question: "Can I be on many teams?",
        answer: "Yes! If you want to be on more than one sub-team per semester, make sure to register for the 2-3 credit hour option for the additional project work."
    },
    { 
        question: "Is this for Georgia Tech students only?",
        answer: "Yes, Empathy Bytes is currently open to both undergraduate and graduate students enrolled at Georgia Tech."
    },
    { 
        question: "Can I join as a freshman?",
        answer: "While we appreciate the early interest, we recommend students wait until their sophomore year to join the VIP."
    }
  ];

  // Social icon external link placeholders
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com", icon: instagramIcon },
    { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
    { name: "GitHub", url: "https://github.com", icon: githubIcon },
    { name: "YouTube", url: "https://youtube.com", icon: youtubeIcon },
  ];

  return (
    <>
      <NewNavbar />

      <div className="new-about-page-container">
        <h1 className="new-about-title">About</h1>

        {/* Main Group Image */}
        <div className="about-main-image-container">
            {false && All ? (
                <img src={All} className="about-main-image" alt="Empathy Bytes VIP full team group" />
            ) : (
                <div className="image-placeholder main-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Main Group Image Placeholder</span>
                </div>
            )}
      </div>

        {/* About Us Paragraphs Section */}
        <section className="about-description-section">
            <h2> About Us</h2>
            <p className="paragraph-new-about">
              Empathy Bytes is organized into sub-teams that specialize in different areas of research while contributing to shared project goals. Within these groups, students pursue personal research interests and practice project-management skills and terminology.
            </p>
            <p className="paragraph-new-about">
              Current technologies include React, GatsbyJS, Drupal, and GraphQL for the Web team; Adobe Creative Cloud for the Media team; Unity and Blender for the Emerging Tech team; and Swift for the App team.
            </p>
        </section>

        <div className="section-white-bar"></div>

          {/* Contact Cards Section */}
          <section className="contact-section">
            <h2>Contact</h2>
            <Grid container spacing={4} className="contact-cards-grids">
                {contactsList.map((contact, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <div className="contact-card">
                            <div className="contact-avatar-placeholder">
                                {contact.image ? (
                                    <img src={contact.image} alt={contact.name} />
                                ) : (
                                    <div className="image-placeholder avatar-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.5">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <polyline points="21 15 16 10 5 21" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <p className="contact-name">{contact.name}</p>
                            <a href={`mailto:${contact.email}`} className="contact-email">
                                {contact.email}
                            </a>
                        </div>
                    </Grid>
                ))}
            </Grid>

            {/* Clickable Social Icons Links */}
            <div className="social-links-row">
                {socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-circle"
                    >
                      <div className="social-circle-placeholder">
                        <img src={social.icon} alt={social.name} width="22" height="22" />
                      </div>
                    </a>
                ))}
            </div>
        </section>

        {/* Expandable FAQ Section */}
        <section className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-accordion-list">
                {faqList.map((faq, idx) => (
                    <div key={idx} className="faq-item">
                        <button
                            className="faq-question-bar"
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={openFaqIndex === idx}
                        >
                            <span>{faq.question}</span>
                            <span className={`faq-icon-box ${openFaqIndex === idx ? 'open' : ''}`}>
                              <svg width="15" height="8" viewBox="0 0 14 8" fill="none" xmlns="https://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                        </button>
                        {openFaqIndex === idx && (
                            <div className="faq-answer-content">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
      </div>
      
        {/* Added the redesigned Figma footer component matching the hi-fi */}
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

export const query = graphql`
    query NewAboutQuery {
      webTeam : taxonomyTermTeam (name: {eq : "Web"}) {
            relationships {
              node__team_members {
                title
                field_current_member
              }
            }
          }
      appTeam : taxonomyTermTeam (name: {eq : "App"}) {
        relationships {
          node__team_members {
            title
            field_current_member
          }
        }
      }

      emergingTechTeam : taxonomyTermTeam (name: {eq : "Emerging Tech"}) {
        relationships {
          node__team_members {
            title
            field_current_member
          }
        }
      }

      mediaTeam : taxonomyTermTeam (name: {eq : "Media"}) {
        relationships {
          node__team_members {
            title
            field_current_member
          }
        }
      }     
    }
`;

export default NewAboutPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>About | Empathy Bytes VIP</title>
    <meta
      name="description"
      content="Learn about Empathy Bytes VIP—our mission, sub-teams, and how we use web, media, emerging tech, and apps to build empathy through digital scholarship."
    />
  </>
);