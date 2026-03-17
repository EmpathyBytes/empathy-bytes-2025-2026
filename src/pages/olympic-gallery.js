import "react-photo-album/styles.css";
import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const OlympicGallery = ({ data }) => {
  const [index, setIndex] = useState(-1);

  // map the nodes from Gatsby into a format the Photo Album understands 
  const photos = data.allFile.nodes.map((node) => ({
    src: node.childImageSharp.gatsbyImageData.images.fallback.src,
    width: node.childImageSharp.gatsbyImageData.width,
    height: node.childImageSharp.gatsbyImageData.height,
    key: node.id,
    // allows the Lightbox to show the high-res version 
    fullRes: node.childImageSharp.gatsbyImageData, 
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Olympic History at Georgia Tech</h1>
      <p>Explore the Olympic Village photo gallery. Click any photo to view it in full size. </p>

      {/* the grid layout (pinterest style)  */}
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={wrapperStyle}>
            <GatsbyImage
              image={photo.fullRes}
              alt={photo.key}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      />

      {/* the popup (lightbox) */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src }))}
      />
    </div>
  );
};

// the GraphQL Query (asks Gatsby for optimized images)
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