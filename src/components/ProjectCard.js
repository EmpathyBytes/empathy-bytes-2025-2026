import React from "react";
import { Link } from "gatsby";
import "../styles/projectCard.css";

/**
 * A clickable card for one project: an image on top and the title below.
 * Used on the redesigned Projects page; sizing and colors come from
 * projectCard.css so the final design can be applied in one place.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Project title shown under the image.
 * @param {string} props.link - Gatsby path the card links to.
 * @param {string} [props.image] - Image URL. Without one, a placeholder block is shown.
 * @param {string} [props.imageAlt] - Alt text for the image. Defaults to the title.
 * @returns {JSX.Element}
 *
 * @example
 * <ProjectCard title="Makerspaces" link="/projects/makerspaces" image={url} />
 */
export default function ProjectCard({ title, link, image, imageAlt }) {
    return (
        <Link to={link} className="project-card">
            <div className="project-card-image">
                {image ? (
                    <img src={image} alt={imageAlt || title} loading="lazy" decoding="async" />
                ) : (
                    <div className="project-card-image-placeholder" aria-hidden="true" />
                )}
            </div>
            <h3 className="project-card-title">{title}</h3>
        </Link>
    );
}
