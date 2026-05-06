import React from "react";
import FlexibleCard from "./FlexibleCard";

export default function InterviewCard(props) {
    return (
        <FlexibleCard
            variant="interview"
            title={props.title}
            subtitle={`By ${props.author}`}
            date={props.date}
            body={props.body}
            isHtmlBody={true}
            image={props.img}
            link={props.url}
        />
    );
}