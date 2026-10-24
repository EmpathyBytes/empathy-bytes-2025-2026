import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"

import "../styles/perspectives.css"
import "../styles/all.css"

// Temporary local Perspective images.
// These will eventually be replaced with images pulled from Drupal.
import img3897 from "../images/perspectives/DSC_3897.jpg"
import img3899 from "../images/perspectives/DSC_3899.jpg"
import img3900 from "../images/perspectives/DSC_3900.jpg"
import img3904 from "../images/perspectives/DSC_3904.jpg"
import img3909 from "../images/perspectives/DSC_3909.jpg"
import img3912 from "../images/perspectives/DSC_3912.jpg"
import img3920 from "../images/perspectives/DSC_3920.jpg"
import img3924 from "../images/perspectives/DSC_3924.jpg"
import img3930 from "../images/perspectives/DSC_3930.jpg"
import img3936 from "../images/perspectives/DSC_3936.jpg"
import img3938 from "../images/perspectives/DSC_3938.jpg"
import img3940 from "../images/perspectives/DSC_3940.jpg"
import img3944 from "../images/perspectives/DSC_3944.jpg"
import img3949 from "../images/perspectives/DSC_3949.jpg"
import img3960 from "../images/perspectives/DSC_3960.jpg"
import img3963 from "../images/perspectives/DSC_3963.jpg"
import img3971 from "../images/perspectives/DSC_3971.jpg"
import img3992 from "../images/perspectives/DSC_3992.jpg"
import img3998 from "../images/perspectives/DSC_3998.jpg"
import img4005 from "../images/perspectives/DSC_4005.jpg"
import img4013 from "../images/perspectives/DSC_4013.jpg"
import img4016 from "../images/perspectives/DSC_4016.jpg"
import img4023 from "../images/perspectives/DSC_4023.jpg"
import img4036 from "../images/perspectives/DSC_4036.jpg"

const perspectiveImages = [
  img3897,
  img3899,
  img3900,
  img3904,
  img3909,
  img3912,
  img3920,
  img3924,
  img3930,
  img3936,
  img3938,
  img3940,
  img3944,
  img3949,
  img3960,
  img3963,
  img3971,
  img3992,
  img3998,
  img4005,
  img4013,
  img4016,
  img4023,
  img4036,
]

function PerspectivesPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <Layout>
      <main className="perspectives-page">

        <h1 className="perspectives-title">
          Perspectives of Georgia Tech
        </h1>

        <div className="perspectives-gallery">
          {perspectiveImages.map((image, index) => (
            <button
              className="perspective-image-button"
              key={index}
              onClick={() => setSelectedImage(image)}
              aria-label={`Enlarge Perspective ${index + 1}`}
            >
              <img
                className="perspective-image"
                src={image}
                alt={`Perspective of Georgia Tech ${index + 1}`}
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="perspectives-modal"
            onClick={() => setSelectedImage(null)}
            role="presentation"
          >
            <button
              className="perspectives-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close enlarged image"
            >
              ×
            </button>

            <img
              className="perspectives-modal-image"
              src={selectedImage}
              alt="Enlarged perspective of Georgia Tech"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

      </main>
    </Layout>
  )
}

export default PerspectivesPage

export const Head = () => (
  <title>Perspectives of Georgia Tech | Empathy Bytes</title>
)