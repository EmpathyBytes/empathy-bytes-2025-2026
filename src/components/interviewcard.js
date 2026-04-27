import React from "react";
import FlexibleCard from "./FlexibleCard";

/**
 * A specialized wrapper for FlexibleCard designed for interview entries.
 * * This component automatically formats the author and date into a 
 * combined subtitle string and enables HTML body rendering for 
 * interview excerpts/summaries.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The headline or name of the person being interviewed.
 * @param {string} props.author - The name of the interviewer or article author.
 * @param {string} props.date - The publication date or date of the interview.
 * @param {string} props.body - The interview summary or preview text (supports HTML).
 * @param {string} props.img - The full URL or path for the interview thumbnail.
 * @param {string} props.url - The destination path for the full interview page.
 * * @returns {JSX.Element} A configured FlexibleCard instance with 'interview' styling.
 */

export default function InterviewCard(props) {
    return (
        <FlexibleCard
            variant="interview"
            title={props.title}
            subtitle={`By ${props.author} | ${props.date}`}
            body={props.body}
            isHtmlBody={true}
            image={props.img}
            link={props.url}
        />
    );
}