import React from "react";
import { graphql } from "gatsby";
import PhotoAlbum from "react-photo-album";
import Layout from "../components/layout";

/**
 * Olympic Gallery Page
 * Renders a Masonry photo grid using images fetched from Drupal via GraphQL.
 */
const OlympicGallery = ({ data }) => {
    // 1. Extract images from the GraphQL query
    const nodes = data.olympicImages.nodes;

    // 2. Transform image data for react-photo-album
    // The library requires 'src', 'width', and 'height'
    const photos = nodes.map((node) => ({
        src: "https://empathybytes.library.gatech.edu" + node.relationships.field_image.uri.url,
        width: 4, // You can adjust these ratios or pull dimensions from metadata if available
        height: 3,
        alt: node.title,
        key: node.id,
    }));

    return (
        <Layout>
            <div style={{ padding: "100px 5vw" }}>
                <h1 style={{ textAlign: "center", color: "white", marginBottom: "40px", fontFamily: "Roboto Slab" }}>
                    Olympic Gallery
                </h1>

                {/* 3. Render the Masonry Grid */}
                <PhotoAlbum
                    layout="masonry"
                    photos={photos}
                    columns={(containerWidth) => {
                        if (containerWidth < 500) return 1;
                        if (containerWidth < 800) return 2;
                        return 3;
                    }}
                />
            </div>
        </Layout>
    );
};

// 4. GraphQL Query
// Following the pattern from projects.js to fetch collection images
export const query = graphql`
  query OlympicImageQuery {
    olympicImages: allNodeArticle(
      filter: {field_author: {eq: "Olympic Team"}} 
    ) {
      nodes {
        id
        title
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

export default OlympicGallery;

export const Head = () => (
    <>
        <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
        <title>Olympic Gallery | Empathy Bytes</title>
    </>
);