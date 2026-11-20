import React from 'react';
import FlexibleCard from "./FlexibleCard";

/**
 * A specialized wrapper for FlexibleCard for the learn card.
 * * This component simplifies the creation of call-to-action buttons by 
 * mapping individual title and link props into the standardized actions 
 * array required by the 'learn' variant.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The headline for the learning card.
 * @param {string} props.body - The descriptive text or summary of the topic.
 * @param {string} props.btnTitle - The text label for the first primary button.
 * @param {string} props.link - The destination URL for the first button.
 * @param {string} props.btnTitle2 - The text label for the second secondary button.
 * @param {string} props.link2 - The destination URL for the second button.
 * * @returns {JSX.Element} A configured FlexibleCard instance with 'learn' styling and action buttons.
 */

export default function LearnCard(props) {
    return (
        <FlexibleCard
            variant="learn"
            title={props.title}
            body={props.body}
            actions={[
                { label: props.btnTitle, url: props.link },
                { label: props.btnTitle2, url: props.link2 }
            ]}
        />
    );
}