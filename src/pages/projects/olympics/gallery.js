import "react-photo-album/styles.css";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import { graphql } from "gatsby";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryMetadata from "../../../data/olympic-gallery-metadata.json"

const OlympicGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

// look up metadata by filename for captions
const metadataByFilename = Object.fromEntries(
  galleryMetadata.map((item) => [item.filename, item])
);

// separate file url to get most basic filename
const getFilename = (url = "") =>
  decodeURIComponent(url.split("/").pop().split("?")[0]).replace(/\.[^.]+$/, "");

  // Convert Drupal nodes → PhotoAlbum format
  const photos = data.allNodeOlympicsGalleryImage.nodes
    .map((node) => {
      //check url first
      const url = node.relationships?.field_olympic_gallery_image?.uri?.url;

      // Safety check for missing images
      if (!url) return null;

      const imageUrl = "https://empathybytes.library.gatech.edu" + url;
      const filename = getFilename(url);
      const meta = metadataByFilename[filename];

      return {
        src: imageUrl,

        // fallback dimensions (needed for masonry layout stability)
        width: 4,
        height: 3,

        key: node.id,

        alt: meta?.caption || node.field_caption || "Olympic gallery image",

        // metadata
        caption: meta?.caption || node.field_caption,
        photographer: node.field_photographer_source,
        year: meta?.year,
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
          render={{
            photo: ({ onClick, style }, { photo }) => (
              <figure
                onClick={onClick}
                style={{
                  ...style,
                  height: "auto",
                  aspectRatio: "auto",
                  margin: 0,
                  background: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <figcaption
                  style={{
                    padding: "0.5rem 0.75rem",
                    fontFamily: "Roboto Slab, serif",
                    fontSize: "0.9rem",
                    color: "#003057",
                    textAlign: "left"
                  }}
                >
                  {photo.caption}
                  {photo.year && <span> ({photo.year})</span>}
                </figcaption>
              </figure>
            ),
          }}
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
