import * as React from "react";
import "../styles/homepage.css";
import splash1 from "../images/homepage/splash1.jpg";
import VRTeam from "../images/homepage/VRTeam.png";
import VRMuseum from "../images/homepage/VRMuseum.jpg";
import Iphone from "../images/homepage/Iphone.png"
import Screenshot from "../images/homepage/Screenshot.png"
import BuzzQuest from "../images/homepage/BuzzQuest.png"
import empathyHome from "../images/homepage/empathyHome.png"
import projectScreen from "../images/homepage/projectScreen.png"
import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
    <main className="landing">
      {/* Hero section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${splash1})`,
          backgroundSize: "cover, cover",
          backgroundPosition: "50% 85% 50% 85%",
          backgroundRepeat: "no-repeat,  no-repeat"
        }}
      >
        <div className="hero-overlay">
          <h2 className="hero-title">Empathy Bytes</h2>
        </div>

        {/* Scroll arrow */}
        <a href="#info" className="scroll-down" aria-label="Scroll to info">
          <svg viewBox="0 0 60 72" className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </a>
      </section>

      {/* Info Section */}
      <section id="info" className="info-section">
        <h2 className="info-text">
          We are bringing <span className="highlight">empathy</span> to technology.
        </h2>
      </section>

      {/* === Team Section === */}
      <section id="team" className="team-section">
        <div className="team-wrapper">
          <img
            src={require("../images/homepage/teampic2.0.jpg").default}
            alt="Empathy Bytes Team"
            className="team-photo"
          />
        </div>
      </section>

      {/* === Story / Vision  === */}
      <section className="cards-section">
        <div className="cards-grid">
          {/* Card 1 */}
          <article className="info-card-box">
            <h3 className="card-title">Our Story</h3>
            <p className="card-body">
              We are a student run research project focused on creating immersive
              technology and media centered around empathy. We think outside
              traditional modes of communication and documentation to create
              radical and unique experiences.
            </p>
            <a className="card-cta" href="/about">About Us</a>
          </article>

          {/* Card 2 */}
          <article className="info-card-box">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-body">
              Through our subteams, we are using different types of technology to
              achieve our vision: making the world more accessible with apps and
              emerging tech.
            </p>
            <a className="card-cta" href="/projects">Our Vision</a>
          </article>
          </div>
        </section>

        {/* === Our Creations === */}
        <section className="creations-strip">
          <div className="creations-box">
            <h2 className="creations-title">Our Creations</h2>
            <p className="creations-subtitle">
              Starting from <span className="artifacts">artifacts</span> and <span className="museums">museums</span>, we’re bringing Georgia’s rich history to our technology.
            </p>

            <div className="creations-grid">
              {/* Card 1 – Archive App */}
              <article className="creation-card">
                <div className="phone-row">
                  <div className="phone-mockup">
                    <img src={Iphone} className="phone-frame" />
                    <img src={empathyHome} className="phone-screen" />
                  </div>

                  <div className="phone-mockup">
                    <img src={Iphone} className="phone-frame" />
                    <img src={projectScreen} className="phone-screen" />
                  </div>
                </div>
                <h3 className="creation-heading">Archive App</h3>
                <p className="creation-body">
                  An archive app showcasing the stories and research of diverse communities
                  at Georgia Tech.
                </p>
                <a href="/appteam" className="creation-btn">App Team</a>
              </article>

              {/* Card 2 – Interactive Scavenger Hunt App */}
              <article className="creation-card">
                <div className="phone-row">
                  <div className="phone-mockup">
                    <img src={Iphone} className="phone-frame" />
                    <img src={BuzzQuest} className="phone-screen" />
                  </div>

                  <div className="phone-mockup">
                    <img src={Iphone} className="phone-frame" />
                    <img src={Screenshot} className="phone-screen" />
                  </div>
                </div>
                <h3 className="creation-heading">Interactive Scavenger Hunt App</h3>
                <p className="creation-body">
                  A scavenger hunt app to help new Tech students explore campus.
                </p>
                <a href="/appteam" className="creation-btn">App Team</a>
              </article>

              {/* Card 3 – VR Museum */}
              <article className="creation-card creation-card--wide">
                <img
                  src={VRMuseum}
                  alt="VR Museum"
                  className="creation-img"
                />
                <h3 className="creation-heading">VR Museum</h3>
                <p className="creation-body">
                  We have created a Virtual Museum immersive app so anyone can experience
                  and learn about artifacts in the Georgia Tech Archives.
                </p>
                <a href="/emergingtech" className="creation-btn">VR Team</a>
              </article>

              {/* Card 4 – Interviews */}
              <article className="creation-card creation-card--wide">
                <img
                  src={VRTeam}
                  alt="Interviews"
                  className="creation-img"
                />
                <h3 className="creation-heading">Interviews</h3>
                <p className="creation-body">
                  We have collected our members’ experiences into documentaries and
                  interviews, allowing our creations to be known to the world.
                </p>
                <a href="/mediateam" className="creation-btn">Media Team</a>
              </article>
            </div>
          </div>
        </section>
      </main>
      </Layout>
  );
}


export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap"
      rel="stylesheet"
    />
    <title>Home</title>
  </>
);