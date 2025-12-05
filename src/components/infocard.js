import React from 'react';
import FlexibleCard from "./FlexibleCard";

export default function InfoCard(props) {
    return (
        <FlexibleCard
            variant="info"
            title={props.title}
            body={props.body}
        />
    );
}