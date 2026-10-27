
import * as React from "react";
import Carousel from "react-material-ui-carousel";

import "../styles/imageCarousel.css";

/*
 * Shared Image Carousel
 *
 * Can be used on any page by passing an images array.
 * Supports both local images and Drupal image URLs.
 *
 * Example:
 * [
 *   { image: "/example.jpg", alt: "Example image" }
 * ]
 */
export default function ImageCarousel({ images = [] }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreenSize();

    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  // Display three images per slide on desktop and one on mobile.
  const imagesPerSlide = isMobile ? 1 : 3;

  // Divide images into slides based on the screen size.
  const slides = [];

  for (let i = 0; i < images.length; i += imagesPerSlide) {
    slides.push(images.slice(i, i + imagesPerSlide));
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel
      key={imagesPerSlide}
      autoPlay={false}
      indicators={slides.length > 1}
      navButtonsAlwaysVisible={slides.length > 1}
      animation="slide"
      swipe={true}
    >
      {slides.map((slide, slideIndex) => (
        <div className="shared-carousel-images" key={slideIndex}>
          {slide.map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={image.image}
              alt={image.alt}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
}
