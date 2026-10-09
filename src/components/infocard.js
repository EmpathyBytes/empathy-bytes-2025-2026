import React from 'react';
import FlexibleCard from "./FlexibleCard";

/**
 * A simplified wrapper for the FlexibleCard component using the 'info' variant.
 * * This component is used to display general information blocks throughout the site
 * without requiring the full prop complexity of the base FlexibleCard.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The primary heading for the info card.
 * @param {string} props.body - The descriptive content or text to be displayed.
 * * @returns {JSX.Element} A configured FlexibleCard instance with 'info' styling.
 */

export default function InfoCard(props) {
    return (
        <FlexibleCard
            variant="info"
            title={props.title}
            body={props.body}
        />
    );
}