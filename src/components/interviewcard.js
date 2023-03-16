import React from "react";

/**
 * This component is used on each collection page to house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */
export default function CollectionCard(props) {
    return (
        <div class="row">
            <div class="col" style={col}>
                <img style ={{width:"240px", height:"240px", objectFit:"cover"}} src={"https://empathybytes.library.gatech.edu" + props.relationships.field_image.uri.url}/>
            </div>
            <div class="col" style={col}><h1>{props.title}</h1></div>
            <div class="col" style={col}>
                <div dangerouslySetInnerHTML={{ __html: props.body.processed }}/>
                <p>{props.field_hg_dateline}</p>
            </div>
    </div>
    );
}