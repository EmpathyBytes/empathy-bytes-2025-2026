import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OlympicTestPage = ({ data }) => {

    // Grab the first image found inside the folder
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Olympic Image Optimization Test</h1>
      <hr />
      
      {image ? (
        <GatsbyImage 
          image={image} 
          alt="Olympic Village Test" 
          objectFit="contain"
        />
      ) : (
        <p style={{ color: "red" }}>
          Error: Image data was not found. Please make sure an image source exists.
        </p>
      )}

      <section style={{ marginTop: "2rem" }}>
        <h3>Verify:</h3>
        <ul>
          <li>Does it blur on load? (Placeholder: BLURRED)</li>
          <li>Is it WebP? (Check DevTools Network tab)</li>
          <li>Is it responsive? (Resize your window)</li>
        </ul>
      </section>
    </main>
  )
}

export const query = graphql`
  query {
    file(sourceInstanceName: {eq: "olympic-images"}, extension: {regex: "/(jpg|jpeg|png)/"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

export default OlympicTestPage