import React from 'react';
import FlexibleCard from "./FlexibleCard";

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