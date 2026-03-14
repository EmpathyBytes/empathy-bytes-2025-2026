import React, {useState, useEffect} from "react";
import {graphql} from "gatsby";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

const OlympicGalleryPage = ({data}) => {
    const nodes = data?.allFile?.nodes || [];
    const [index, setIndex] = useState(-1);
    const photos = nodes.map((node) => {
        const imageData = node.childImageSharp.gatsbyImageData;
        return {
            src: imageData.images.fallback.src,
            width: imageData.width,
            height: imageData.height,
            alt: node.name,
            images: imageData.images.sources.concat({
                src: imageData.images.fallback.src,
                width: imageData.width,
                height: imageData.height,
            })
        }
    });
    console.log("Processed Photos:", photos);
return (
    <main style={{padding: "20px"}}>
        <h1>GT Olympic Village Gallery</h1>
        <p>Found {nodes.length} images</p>
        <hr style={{marginBottom: "2rem"}}/>
        <MasonryPhotoAlbum
            photos={photos}
            onClick={({index}) => setIndex(index)}
            columns={containerWidth => {
                if (containerWidth < 500) return 1;
                if (containerWidth < 800) return 2;
                return 3;
            }}
        />
        <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
        />
    </main>
);
}

export const query = graphql`
query OlympicGalleryQuery {
    allFile(
        filter: {
            sourceInstanceName: {eq: "olympic-images"}
            extension: {regex: "/(jpg|jpeg|png)/"}
        }
        sort: {name: ASC}
    ) {
        nodes {
            id
            name
            childImageSharp {
                gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP]
            )
        }
    }
}
}
`;
export default OlympicGalleryPage