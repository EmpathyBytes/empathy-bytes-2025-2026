import React, { useEffect } from "react";
import Layout from "../components/layout";
import Banner from "../images/experiences/mediaTeamHeader.png";

import "../styles/mediaTeamNew.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import figmaIcon from "../images/subteam-icons/webteam-icons/figma-logo.png";
import davinciIcon from "../images/subteam-icons/webteam-icons/davinci-resolve-logo.png";

function Media() {
    useEffect(() => {
    const sections = document.querySelectorAll(".card-section");
    const gearSections = document.querySelectorAll(
        ".past-projects-section, .past-media-team-section"
    );

    const cardObserver = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("show");
            }
        });
        },
        { threshold: 0.25 }
    );

    sections.forEach((section) => cardObserver.observe(section));

    const gearObserver = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("spin-gears");
            }
        });
        },
        { threshold: 0.3 }
    );

    gearSections.forEach((section) => gearObserver.observe(section));

    return () => {
        cardObserver.disconnect();
        gearObserver.disconnect();
    };
    }, []);

  return (
    <Layout>
      <title>Media Team</title>

      {/* ================= HERO SECTION ================= */}
      <div className="media-hero" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="media-overlay" />

        <div className="media-hero-content">
          <h3>The</h3>
          <h1>Media</h1>
          <h2>Development Team</h2>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="card-section about-card-section">
        <div className="card about-card">
          <h2 className="section-title">About Us</h2>

          <p className="about-text">
            Our team is responsible for filming, editing, and designing content
            to deploy on our website, as well as assisting other subteams with
            their needs. We run the Empathy Bytes social media and constantly
            search for new ways to document our program.
          </p>

          <div className="about-bottom">
            <div>
              <p>Connect With Us!</p>

              <div className="icons">
                <LinkedInIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
            </div>

            <div>
              <p>Tech Stack</p>

              <div className="icons">
                <img src={davinciIcon} alt="davinci" />
                <img src={figmaIcon} alt="figma" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= READING ROOM SECTION ================= */}
      <section className="reading-room-section">
        <h1 className="section-title reading-title">The Reading Room</h1>

        <div className="card-section reading-card-section">
          <div className="card reading-card">
            <p className="reading-subtext">
              Current and ongoing projects... Click on any book to explore its story.
            </p>

            <div className="books-row">
              <div className="book book-1" href="/projects/beyond-the-torch/">
                <span>Beyond the Torch: Olympics @ GT</span>
              </div>

              <div className="book book-2" href="/projects/emotions/">
                <span>Name TBD: Emotions @ GT</span>
              </div>

              <div className="book book-3" href="/projects/sounds/">
                <span>Name TBD: Sounds @ GT</span>
              </div>

              <div className="book book-4" href="/projects/handwritten/">
                <span>Name TBD: Handwritten @ GT</span>
              </div>

              <div className="book book-5" href="/projects/perspectives/">
                <span>Name TBD: Perspectives @ GT</span>
              </div>

              <div className="book book-6" href="/projects/lifestyles/">
                <span>Name TBD: Lifestyles @ GT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ================= PAST PROJECTS SECTION ================= */}
      <section className="past-projects-section">
        {/* Decorative spinning gears */}
        <div className="past-gears" aria-hidden="true">
          <div className="gear-cluster gear-cluster-left"></div>
          <div className="gear-cluster gear-cluster-right"></div>
        </div>

        <h1 className="section-title past-projects-title">Past Projects</h1>

        <div className="past-projects-content">
          <button className="project-arrow project-arrow-left" aria-label="Previous projects">
            ‹
          </button>

          <div className="projects-row">
            <div className="past-project-card">
              <div className="project-image project-image-real project-image-interviews"></div>
              <p>Interviews</p>
            </div>

            <div className="past-project-card">
              <div className="project-image project-image-real project-image-events"></div>
              <p>Events</p>
            </div>

            <div className="past-project-card">
              <div className="project-image project-placeholder"></div>
              <p>Design</p>
            </div>

            <div className="past-project-card">
              <div className="project-image project-placeholder"></div>
              <p>Articles</p>
            </div>
          </div>

          <button className="project-arrow project-arrow-right" aria-label="Next projects">
            ›
          </button>
        </div>
      </section>

            {/* ================= CURRENT MEDIA TEAM SECTION ================= */}
      <section className="current-media-team-section">
        <h1 className="section-title current-media-team-title">
          Current Media Team
        </h1>

        <div className="current-team-wrapper">
          <button className="team-arrow team-arrow-left" aria-label="Previous team member">
            ‹
          </button>

          <div className="card-section current-team-card-section">
            <div className="card current-team-card">
              <div className="current-team-left">
                <div className="current-team-photo-placeholder"></div>
                <p className="current-team-major">Major: (major)</p>
              </div>

              <div className="current-team-right">
                <h2>Name</h2>

                <p>
                  (mini bio) Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <button className="team-arrow team-arrow-right" aria-label="Next team member">
            ›
          </button>
        </div>
      </section>

            {/* ================= PAST MEDIA TEAM SECTION ================= */}
      <section className="past-media-team-section">
        {/* Same gear background style as Past Projects */}
        <div className="past-gears past-media-gears" aria-hidden="true">
          <div className="gear-cluster gear-cluster-left"></div>
          <div className="gear-cluster gear-cluster-right"></div>
        </div>

        <h1 className="section-title past-media-team-title">
          Past Media Team
        </h1>

        <div className="past-media-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="past-media-member" key={index}>
              <div className="past-media-photo"></div>
              <p>Name here</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTERESTED / CONTACT SECTION ================= */}
      <section className="interested-section">
        <h1 className="section-title interested-title">Interested?</h1>
        
        <div className="card-section interested-card-section">
            <div className="card interested-card">
                <div className="interested-content">
                    <div className="interested-text">
                        <h2>Have a story or topic suggestion?</h2>
                        <p>Contact our Media Team Lead here!</p>
                    </div>
                    
                    <a
                    className="interested-envelope"
                    href="mailto:email@email.com"
                    aria-label="Contact Media Team Lead"
                    >
                        <svg viewBox="0 0 260 180" aria-hidden="true">
                            <rect
                            x="24"
                            y="42"
                            width="212"
                            height="116"
                            rx="10"
                            fill="none"
                            stroke="#E0BB56"
                            strokeWidth="18"
                            />
                            
                            <path
                            d="M34 50 L130 112 L226 50"
                            fill="none"
                            stroke="#E0BB56"
                            strokeWidth="18"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}

export default Media;