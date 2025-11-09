import React, { useEffect, useState, useCallback } from "react";

/**
 * Reusable Slideshow
 * Props:
 * - slides: Array<{ image: string, alt?: string, description?: string }>
 * - initialIndex?: number
 * - title?: string
 * - className?: string
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
      <h3 className="slideshow__title">{title}</h3>

      <div className="slideshow__viewport">
        <img
          className="slideshow__image"
          src={slide.image}
          alt={slide.alt || slide.description || `Slide ${index + 1}`}
        />
      </div>

      <div className="slideshow__nav" aria-label="Slideshow navigation">
        <button
          type="button"
          className="slideshow__navButton"
          onClick={prev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          className="slideshow__navButton"
          onClick={next}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className="slideshow__dots" role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slideshow__dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {slide.description && (
        <p className="slideshow__caption">{slide.description}</p>
      )}
    </section>
  );
};

export default Slideshow;
