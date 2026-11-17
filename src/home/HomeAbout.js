import * as React from "react";
import { Link } from "gatsby";

export default function HomeAbout({
  title,
  description,
  link,
  linkText,
}) {
  return (
    <section className="home-about">
      <h2>{title}</h2>

      <p>{description}</p>

      <Link to={link} className="home-read-more">
        {linkText}
      </Link>
    </section>
  );
}
