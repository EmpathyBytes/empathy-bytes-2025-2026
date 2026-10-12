import React, { useEffect, useState, useCallback } from "react";
/**
 * An interactive slideshow/carousel component.
 * * Features:
 * - Keyboard Support: Use Left/Right arrows to navigate.
 * - Accessibility: Implements ARIA roles for regions, tabs, and buttons.
 * - Responsive: Renders captions and images based on the provided slide data.
 * * @component
 * @param {Object} props - The component props.
 * @param {Array<Object>} [props.slides=[]] - An array of slide objects.
 * @param {string} props.slides[].image - The source URL for the slide image.
 * @param {string} [props.slides[].alt] - Accessibility text for the image.
 * @param {string} [props.slides[].description] - Caption text displayed below the image.
 * @param {number} [props.initialIndex=0] - The index of the slide to display on first render.
 * @param {string} [props.title="Slideshow"] - A title for the slideshow region (used by screen readers).
 * @param {string} [props.className=""] - Additional CSS classes for custom styling.
 * * @returns {JSX.Element|null} The rendered slideshow or null if no slides are provided.
 */

const Slideshow = ({ slides = [], initialIndex = 0, title = "Slideshow", className = "" }) => {
  const [index, setIndex] = useState(initialIndex);

  const hasSlides = Array.isArray(slides) && slides.length > 0;

  const next = useCallback(() => {
    if (!hasSlides) return;
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides, hasSlides]);

  const prev = useCallback(() => {
    if (!hasSlides) return;
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides, hasSlides]);

  const goTo = (i) => {
    if (!hasSlides) return;
    setIndex(i);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!hasSlides) return null;

  const slide = slides[index];

  return (
    <section className={`slideshow ${className}`} role="region" aria-label={title}>
      <h3 className="slideshow-title">{title}</h3>

      <div className="slideshow-viewport">
        <img
          className="slideshow-image"
          src={slide.image}
          alt={slide.alt || slide.description || `Slide ${index + 1}`}
        />
      </div>

      <div className="slideshow-nav" aria-label="Slideshow navigation">
        <button
          type="button"
          className="slideshow-nav-button"
          onClick={prev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          className="slideshow-nav-button"
          onClick={next}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className="slideshow-dots" role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slideshow-dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {slide.description && (
        <p className="slideshow-caption">{slide.description}</p>
      )}
    </section>
  );
};

export default Slideshow;
