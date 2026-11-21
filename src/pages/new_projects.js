import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import NewNavbar from "../components/new_navbar";
import Layout from "../components/layout"; // importing the navbar and footer
import ProjectCard from "../components/ProjectCard";
import FilterChips from "../components/FilterChips";
import "../styles/new_projects.css";
import "../styles/new_navstyles.css";
import "../styles/all.css";
import githubIcon from "../images/socialmedia-icons/github_icon.png";
import instagramIcon from "../images/socialmedia-icons/instagram_icon.png";
import linkedinIcon from "../images/socialmedia-icons/linkedin_icon.png";
import youtubeIcon from "../images/socialmedia-icons/youtube_icon.png";

const DRUPAL_BASE_URL = "https://empathybytes.library.gatech.edu";

// "Sort by" options
const CATEGORY_OPTIONS = [
  { value: "all", label: "All" },
  { value: "olympics", label: "Olympics" },
  { value: "web", label: "Web" },
  { value: "media", label: "Media" },
  { value: "vr", label: "VR/XR" },
  { value: "app", label: "App" },
  { value: "interviews", label: "Interviews" },
];

// Collections have no category field in Drupal yet, so each category matches
// title keywords, the same way the current Projects page does. Categories with
// no keywords show an empty state until their collections are decided.
// TODO: replace with a category field in Drupal once the media team adds one.
const CATEGORY_KEYWORDS = {
  web: ["distance math"],
  media: ["behind the scenes"],
  vr: [],
  app: ["covid"],
  interviews: [],
};

const isOlympics = (collection) =>
  (collection.title || "").trim().toLowerCase() === "olympics at georgia tech";

const matchesCategory = (collection, category) => {
  if (category === "all") return true;
  if (category === "olympics") return isOlympics(collection);
  const title = (collection.title || "").toLowerCase();
  return (CATEGORY_KEYWORDS[category] || []).some((keyword) => title.includes(keyword));
};

// The Olympics collection has its own hub page instead of the collection template
const collectionLink = (collection) =>
  isOlympics(collection)
    ? "/projects/olympics"
    : "/project-details" + collection.path.alias;

const collectionImage = (collection) => {
  const url = collection.relationships?.field_image?.uri?.url;
  return url ? DRUPAL_BASE_URL + url : undefined;
};

function NewProjectsPage({ data }) {
  const [category, setCategory] = useState("all");

  // Olympics first, the same order as the current Projects page
  const collections = [...data.collections.nodes].sort(
    (a, b) => Number(isOlympics(b)) - Number(isOlympics(a))
  );
  const visibleCollections = collections.filter((collection) => matchesCategory(collection, category));

  return (
    <>
      <NewNavbar />

      <main className="new-projects-page">
        <div className="new-projects-header">
          <h1 className="new-projects-title">Projects</h1>
          <p className="new-projects-description">
            Explore the interview collections and projects created by Empathy Bytes students.
          </p>
        </div>

        <section className="new-projects-filter" aria-labelledby="new-projects-sort-heading">
          <h2 id="new-projects-sort-heading" className="new-projects-sort-heading">Sort by</h2>
          <FilterChips
            options={CATEGORY_OPTIONS}
            selected={category}
            onSelect={setCategory}
            label="Sort projects by"
          />
        </section>

        {visibleCollections.length > 0 ? (
          <div className="new-projects-grid">
            {visibleCollections.map((collection) => (
              <ProjectCard
                key={collection.id}
                title={collection.title}
                link={collectionLink(collection)}
                image={collectionImage(collection)}
              />
            ))}
          </div>
        ) : (
          <p className="new-projects-empty">No projects in this category yet.</p>
        )}
      </main>

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
  query NewProjectsQuery {
    collections: allNodeCollection {
      nodes {
        id
        title
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

export default NewProjectsPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
    <title>Projects | Empathy Bytes VIP</title>
    <meta
      name="description"
      content="Explore Empathy Bytes VIP's interview collections and projects documenting the stories of communities at Georgia Tech and beyond."
    />
  </>
);
