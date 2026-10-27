
import * as React from "react";
import { graphql } from "gatsby";

// Shared components used across the website
import Layout from "../components/layout";
import ImageCarousel from "../components/ImageCarousel";

// Homepage-specific components
import HomeHero from "../home/HomeHero";
import HomeAbout from "../home/HomeAbout";
import HomeJoin from "../home/HomeJoin";

// Website and homepage styling
import "../styles/homepage.css";
import "../styles/all.css";

// Local images used as fallbacks
import splash1 from "../images/homepage/splash1.jpg";
import splash2 from "../images/homepage/splash2.jpg";
import teampic from "../images/homepage/teampic.jpg";

const DRUPAL_URL = "https://empathybytes.library.gatech.edu";

/*
 * Homepage Image Selection
 *
 * To change the carousel images:
 * 1. Find or upload an image in Drupal.
 * 2. Copy its exact media name.
 * 3. Add or replace the name below.
 *
 * The images appear in the order listed.
 */
const homepageImageNames = [
  "8_FlagsTechAtlanta.jpg",
  "4_CentennialPark.jpg",
  "9_CentennialSummer.jpg",
];

/*
 * Homepage Content
 *
 * Update the text, links, and hero image here.
 * Each component receives its content through props.
 */
const homeContent = {
  hero: {
    image: splash1,
    alt: "EmpathyBytes homepage banner",
  },

  about: {
    title: "About Us",
    description:
      "Empathy Bytes is a student-run research project focused on creating immersive technology and media centered around empathy. We explore unique ways to tell stories and share experiences connected to Georgia Tech.",
    link: "/about",
    linkText: "Read More →",
  },

  join: {
    title: "How to Join",
    description:
      "Interested in joining EmpathyBytes? We're always looking for students interested in technology, storytelling, and creating meaningful experiences.",
    steps: [
      "Explore our projects and learn about the different teams.",
      "Find an area that matches your interests and skills.",
      "Reach out to the team for information about joining.",
    ],
  },
};

// Fallback images if no selected Drupal media is available
const fallbackImages = [
  { image: splash1, alt: "EmpathyBytes project" },
  { image: splash2, alt: "Georgia Tech campus" },
  { image: teampic, alt: "EmpathyBytes team" },
];

/*
 * Drupal image paths may be relative or absolute.
 * Convert relative paths into URLs on the Drupal website.
 */
function getDrupalImageUrl(path) {
  if (!path) {
    return null;
  }

  if (path.startsWith("https://") || path.startsWith("http://")) {
    return path;
  }

  return `${DRUPAL_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/*
 * Homepage Layout
 *
 * Homepage sections: src/home/
 * Shared carousel: src/components/ImageCarousel.js
 *
 * Gatsby provides Drupal query results through the data prop.
 */
export default function IndexPage({ data }) {
  const { hero, about, join } = homeContent;

  const drupalImages = data?.allMediaHgImage?.nodes || [];

  // Select the Drupal images in the configured order.
  const selectedImages = homepageImageNames
    .map((name) => drupalImages.find((item) => item.name === name))
    .filter(Boolean)
    .map((item) => ({
      image: getDrupalImageUrl(
        item.relationships?.field_media_hg_image?.uri?.url
      ),
      alt: item.field_media_hg_image?.alt || item.name,
    }))
    .filter((item) => item.image);

  // Keep local images available if Drupal media is missing.
  const gallery =
    selectedImages.length > 0 ? selectedImages : fallbackImages;

  return (
    <Layout>
      {/* Hero Section */}
      <HomeHero {...hero} />

      {/* About Us Section */}
      <HomeAbout {...about} />

      {/* Drupal-powered Image Carousel */}
      <section
        className="home-gallery"
        aria-label="EmpathyBytes gallery"
      >
        <ImageCarousel images={gallery} />
      </section>

      {/* How to Join Section */}
      <HomeJoin {...join} />
    </Layout>
  );
}

/*
 * Gatsby GraphQL Page Query
 *
 * Retrieves image media, file URLs, and alt text from Drupal.
 * The carousel displays only the images selected above.
 */
export const query = graphql`
  query HomepageDrupalImages {
    allMediaHgImage {
      nodes {
        id
        name
        field_media_hg_image {
          alt
        }
        relationships {
          field_media_hg_image {
            uri {
              url
            }
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <>
    <link
      rel="icon"
      type="image/png"
      href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg"
    />
    <title>Home | EmpathyBytes</title>
  </>
);
