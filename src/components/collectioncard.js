import React from "react";
import FlexibleCard from "./FlexibleCard";
/**
 * A wrapper component that maps CMS project data to a FlexibleCard format.
 * * This component specifically handles the concatenation of the base URL for 
 * images and the routing prefix for project links.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The display title for the collection card.
 * @param {string} props.body - The description text (rendered as HTML).
 * @param {string} props.image - The relative file path for the image (e.g., '/sites/default/files/...').
 * @param {string} props.url - The relative project slug (e.g., '/web-history').
 * * @returns {JSX.Element} A configured FlexibleCard instance with 'collection' variant.
 */

export default function CollectionCard(props) {
    return (
        <FlexibleCard
            variant="collection"
            title={props.title}
            body={props.body}
            isHtmlBody={true}
            image={"https://empathybytes.library.gatech.edu" + props.image}
            link={"/projects" + props.url}
        />
    );
}