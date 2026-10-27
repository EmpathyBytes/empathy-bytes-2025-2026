
import * as React from "react";

export default function HomeHero({ image, alt }) {
  return (
    <section className="home-hero">
      <img src={image} alt={alt} />
    </section>
  );
}
