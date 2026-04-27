import "react-photo-album/styles.css";
import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the Layout component
import Layout from "../components/layout";

const OlympicGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

  // 1. Get the nodes safely
  const nodes = data?.allFile?.nodes || [];

  // 2. If no nodes are found, show a giant warning on the screen
  if (nodes.length === 0) {
    return (
      <Layout>
        <div style={{ padding: "100px", textAlign: "center", background: "red", color: "white" }}>
          <h1>DEBUG: NO IMAGES FOUND</h1>
          <p>Gatsby is not seeing any files in the 'olympic_village_photo_gallery' folder.</p>
        </div>
      </Layout>
    );
  }

  // ... (rest of your existing mapping and return code)

  const photos = nodes.map((node) => ({
    src: node.childImageSharp.gatsbyImageData.images.fallback.src,
    width: node.childImageSharp.gatsbyImageData.width,
    height: node.childImageSharp.gatsbyImageData.height,
    key: node.id,
    fullRes: node.childImageSharp.gatsbyImageData, 
  }));

  return (
    <Layout>
      <div style={{ 
        position: "relative", // Keeps it in document flow
        zIndex: 10,           // Ensures it's above any background layers
        width: "100%", 
        minHeight: "800px",   // Force a minimum height so it doesn't collapse
        padding: "50px 20px",
        backgroundColor: "#F6F8F9",
        display: "block"      // Ensure it's not being hidden by a parent flexbox
      }}>
        <h1 style={{ color: "#003057", textAlign: "center" }}>
          Olympic History at Georgia Tech
        </h1>
        
        {/* The Grid */}
        <div style={{ 
          margin: "40px auto", 
          maxWidth: "1200px", 
          opacity: 1, 
          visibility: "visible" 
        }}>
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={({ photo, wrapperStyle }) => (
              <div style={{ ...wrapperStyle, position: "relative" }}>
                {photo.fullRes ? (
                  <GatsbyImage
                    image={photo.fullRes}
                    alt="Olympic Gallery Image"
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      display: "block" 
                    }}
                    loading="eager" // Force it to load immediately
                  />
                ) : (
                  /* Fallback if GatsbyImage fails */
                  <img 
                    src={photo.src} 
                    alt="Fallback" 
                    style={{ width: "100%" }} 
                  />
                )}
              </div>
            )}
          />
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={photos.map((p) => ({ src: p.src }))}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query OlympicGalleryQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "olympic-images" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(
            width: 2000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`;

export default OlympicGallery;