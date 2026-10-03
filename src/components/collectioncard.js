import React from "react";
import FlexibleCard from "./FlexibleCard";

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