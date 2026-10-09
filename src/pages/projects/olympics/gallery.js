import "react-photo-album/styles.css";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Use the per-column sizes react-photo-album computes, instead of gatsbyImage's
// default "600px", so browsers don't fetch 2x larger files than they display
const withSizes = (image, sizes) =>
  sizes
    ? {
        ...image,
        images: {
          fallback: image.images.fallback && { ...image.images.fallback, sizes },
          sources: image.images.sources?.map((source) => ({ ...source, sizes })),
        },
      }
    : image;

// Lightbox gets every generated size so it can pick one that fits the screen
// (sizes never exceed the original, so smaller photos aren't upscaled)
const toSlideSrcSet = (image) => {
  const source =
    image.images.sources?.find((s) => s.type === "image/webp") ?? image.images.fallback;
  return source.srcSet.split(",").map((entry) => {
    const [src, descriptor] = entry.trim().split(" ");
    const width = parseInt(descriptor, 10);
    return { src, width, height: Math.round((width * image.height) / image.width) };
  });
};

const OlympicGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

  // Convert Drupal nodes → PhotoAlbum format
  const photos = data.allNodeOlympicsGalleryImage.nodes
    .map((node) => {
      const file = node.relationships?.field_olympic_gallery_image;

      const sharp = file?.localImage?.childImageSharp;

      // Safety check for missing images
      if (!sharp?.thumbnail) return null;

      const fullSrcSet = toSlideSrcSet(getImage(sharp.full));

      return {
        // Resized WebP copies generated at build time (see onCreateNode in
        // gatsby-node.js), so the page never downloads the 1-2 MB originals
        src: fullSrcSet[fullSrcSet.length - 1].src,
        slideSrcSet: fullSrcSet,
        image: getImage(sharp.thumbnail),

        // real dimensions keep the masonry layout from shifting as images load
        width: file.width,
        height: file.height,

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
          sizes={{ size: "90vw" }}
          render={{
            image: ({ className, sizes }, { photo }) => (
              <GatsbyImage
                image={withSizes(photo.image, sizes)}
                alt={photo.alt}
                className={className}
                style={{ width: "100%" }}
              />
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
          srcSet: p.slideSrcSet,
          width: p.width,
          height: p.height,
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
            width
            height
            localImage {
              childImageSharp {
                thumbnail: gatsbyImageData(width: 600, layout: CONSTRAINED, formats: [AUTO, WEBP])
                full: gatsbyImageData(width: 1600, layout: CONSTRAINED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  }
`;

export default OlympicGallery;
