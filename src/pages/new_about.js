import React, { useState } from "react"
import Layout from "../components/Layout" // importing the navbar and footer
import All from "../images/people/fullTeam.jpg" // importing the full team picture
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import "../styles/new_about.css"
import "../styles/all.css"
import AboutComponent from "../components/aboutComponent" // everything relating to the images

import Grid from '@mui/material/Grid';

function NewAboutPage({ data }) {

  // These functions set the visibility of each team
  const [visEmerging, setToggleEmerging] = useState(false);
  const [visWeb, setToggleWeb] = useState(true);
  const [visMedia, setToggleMedia] = useState(false);
  const [visApp, setToggleApp] = useState(false);

  // Search input state (placeholder for search component)
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ Exapnd/Collapse state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  // Extract team member info from each query
  const webMembers = data.webTeam.relationships.node__team_members;
  const appMembers = data.appTeam.relationships.node__team_members;
  const emergingMembers = data.emergingTechTeam.relationships.node__team_members;
  const mediaMembers = data.mediaTeam.relationships.node__team_members;


  function toggleEmerging() {
    setToggleEmerging(true);
    setToggleWeb(false);
    setToggleMedia(false);
    setToggleApp(false);
  }
  function toggleWeb() {
    setToggleEmerging(false);
    setToggleWeb(true);
    setToggleMedia(false);
    setToggleApp(false);
  }
  function toggleMedia() {
    setToggleEmerging(false);
    setToggleWeb(false);
    setToggleMedia(true);
    setToggleApp(false);
  }
  function toggleApp() {
    setToggleEmerging(false);
    setToggleWeb(false);
    setToggleMedia(false);
    setToggleApp(true);
  }

  // Contact list placeholders
  const contactsList = [
    { name: "First and Last Name", email: "test@emailaddresshere", image: null },
    { name: "First and Last Name", email: "test@emailaddresshere", image: null },
  ];

  // FAQ placeholders
  const faqList = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliqua.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { 
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliqua.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { 
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliqua.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Social icon external link placeholders
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "X", url: "https://x.com" },
    { name: "Discord", url: "https://discord.com"},
  ];

  return (
    <Layout>
      <div className="new-about-page-container">
        <h1 className="new-about-title">About</h1>
        {/* Search Component Placeholder */}
        <div className="search-component-placeholder">
            <input
                type="text"
                placeholder="Search content, FAQs, or team members"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
            />
        </div>

        {/* Main Group Image */}
        <div className="about-main-image-container">
            {All ? (
                <img src={All} className="about-main-image" alt="Empathy Bytes VIP full team group photo" />
            ) : (
                <div className="image-placeholder main-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
              Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we create digital scholarship.
              Our work documents the stories of diverse communities in Georgia and beyond. We examine how technology can deepen empathy,
              expand access to resources,and help us understand new perspectives, solve problems, and be better people in a world full of daily challenges.
            </p>
            <p className="paragraph-new-about">
              Empathy Bytes is organized into sub-teams that specialize in different areas of research while contributing to shared project goals.
              Within these groups, students pursue personal research interests and practice project-management skills and terminology.
            </p>
            <p className="paragraph-new-about">
              Current technologies include React, GatsbyJS, Drupal, and GraphQL for the Web team;
              Adobe Creative Cloud for the Media team; Unity and Blender for the Emerging Tech team; and Swift for the App team.
            </p>
          </section>

          {/* COntact Cards Section */}
          <section className="contact-section">
            <h2>Contact</h2>
            <Grid container spacing={4} justifyContent="center" className="contact-cards-grids">
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
                        className="social-circle-link"
                        title={social.name}
                    >
                        <span className="social-circle-placeholder" />
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
                            <span calssName={`faq-icon-box ${openFaqIndex === idx ? 'open' : ''}`}>
                                {openFaqIndex === idx ? '-' : '+'}
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

        {/* Div that contains the navbar */}
        <div className="about-nav" style={{ paddingTop: 25, paddingBottom: 25 }}>
          <Grid container spacing={2} className="navBG" justifyContent="center">
            <Grid xs={12} sm={1} md={2}>
            </Grid>
            <Grid xs={12} sm={3} md={2}>
              <a href="#about-emerging" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleEmerging}>Emerging Tech</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={5} md={2}>
              <a href="#about-web" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleWeb}>Web</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={5} md={2}>
              <a href="#about-media" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleMedia}>Media</h3>
              </a>
            </Grid>

            <Grid xs={12} sm={3} md={2}>
              <a href="#about-app" className="noUnderline">
                <h3 className="about-nav-text" onClick={toggleApp}>App</h3>
              </a>
            </Grid>
            <Grid xs={12} sm={1} md={2}>
            </Grid>
          </Grid>
        </div>


        {/* The section that contains emerging tech information */}
        <div id="about-emerging" className="emerging-tech-about" style={{ display: visEmerging ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Emerging Tech"}
            members={emergingMembers}
            about={"The emerging tech team is comprised of students from a variety of different backgrounds and majors, including Computational Media and Computer Science. The team explores cutting-edge technologies and how they can create empathy."}
            learnMore={"https://educast.library.gatech.edu/emergingtech/"}
          />
        </div>

        {/* The section that contains web team information */}
        <div id="about-web" className="web-about" style={{ display: visWeb ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Web"}
            members={webMembers}
            about={"The Web team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team maintains the public-facing site (GatsbyJS, GraphQL, Drupal) and explores WebXR and its capabilities to create unique and memorable experiences."}
            learnMore={"https://educast.library.gatech.edu/webteam/"}
          />
        </div>


        {/* The section that contains media team information */}
        <div id="about-media" className="media-about" style={{ display: visMedia ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"Media"}
            members={mediaMembers}
            about={"The Media team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team creates site content and supports cross-team design needs."}
            learnMore={"https://educast.library.gatech.edu/mediateam/"}
          />
        </div>

        {/* The section that contains app team information */}
        <div id="about-app" className="app-about" style={{ display: visApp ? 'block' : 'none' }}>
          <AboutComponent
            subteam={"App"}
            members={appMembers}
            about={"The App team is comprised of students from a variety of backgrounds, such as Computer Science and Computational Media. The team is currently developing a mobile application to present the team’s research; future plans to publish on the App Store."}
            learnMore={"https://educast.library.gatech.edu/appteam/"}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
    query NewAboutQuery {
      webTeam : taxonomyTermTeam (name: {eq : "Web"}) {
            relationships {
              node__team_members {
                title
                field_current_member
                relationships {
                  field_pfp {
                    uri {
                      url
                    }
                  }
                }
              }
            }
          }
      appTeam : taxonomyTermTeam (name: {eq : "App"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                uri {
                  url
                }
              }
            }
          }
        }
      }

      emergingTechTeam : taxonomyTermTeam (name: {eq : "Emerging Tech"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                uri {
                  url
                }
              }
            }
          }
        }
      }

      mediaTeam : taxonomyTermTeam (name: {eq : "Media"}) {
        relationships {
          node__team_members {
            title
            field_current_member
            relationships {
              field_pfp {
                uri {
                  url
                }
              }
            }
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