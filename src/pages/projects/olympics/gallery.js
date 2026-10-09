import "react-photo-album/styles.css";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import { graphql } from "gatsby";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const OlympicGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

  // Convert Drupal nodes → PhotoAlbum format
  const photos = data.allNodeOlympicsGalleryImage.nodes
    .map((node) => {
      const imageUrl =
        "https://empathybytes.library.gatech.edu" + node.relationships?.field_olympic_gallery_image?.uri?.url;

      // Safety check for missing images
      if (!imageUrl) return null;

      return {
        src: imageUrl,

        // fallback dimensions (needed for masonry layout stability)
        width: 4,
        height: 3,

        key: node.id,

        alt: node.field_caption || "Olympic gallery image",

        // metadata
        caption: node.field_caption,
        photographer: node.field_photographer_source,
        date: node.field_date,
      };
    })
    .filter(Boolean);

  return (
    <Layout>
    <div
      style={{
        padding: "2vw",
        backgroundColor: "#F6F8F9",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Roboto Slab, serif",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#003057",
          marginBottom: "1rem",
        }}
      >
        Perspectives on Georgia Tech's Campus
      </h1>

      <p
        style={{
          fontFamily: "Roboto Slab, serif",
          fontSize: "1rem",
          margin: "0 auto 5vw auto",
          maxWidth: "800px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        A project that spotlights the perspectives of Georgia Tech students looking out different windows across campus.
      </p>

      {/* Photo grid */}
      <div style={{ margin: "0 auto", maxWidth: "90vw" }}>
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={({ photo, wrapperStyle }) => (
            <div style={wrapperStyle}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        />
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          description: `${p.caption || ""}${
            p.photographer ? ` — © ${p.photographer}` : ""
          }`,
        }))}
      />
    </div>
    </Layout>
  );
};

// GraphQL Query (Drupal JSON:API style)
export const query = graphql`
  query OlympicGalleryQuery {
    allNodeOlympicsGalleryImage(sort: { field_date: DESC }) {
      nodes {
        id
        field_caption
        field_date(formatString: "YYYY-MM-DD")
        field_photographer_source

        relationships {
          field_olympic_gallery_image {
            uri {
              url
            }
          }
        }
      }
    }
  }
`;

export default OlympicGallery;
