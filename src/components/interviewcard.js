import React from "react";
import styles from "../styles/navstyles.css";

/**
 * This component is used on each collection page to house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */

const col = {
    padding: 10,
};


const row = {
    ["border-bottom"]: '5px solid #b3a369',
    padding: 15,
};

const img_style = {
    ["border-radius"]: '10px',
    width: '240px', 
    height: '240px', 
    objectFit: 'cover',
};

const summary = {
    ['line-clamp']: 3,
    ['text-overflow']: 'ellipsis',
    overflow: 'hidden',
}

export default function InterviewCard(props) {
    return (
        <div class="row" style={row}>
            <div class="col" style={col}>
                <img style ={img_style} src={props.img}/>
            </div>
            <div class="col" style={col}>
                <h2>{props.title}</h2>
                <p>By {props.author}</p>
                <div style={summary} dangerouslySetInnerHTML={{ __html: props.body}}/>
                <p>{props.date}</p>
                <span class="border-bottom"></span>
            </div>
    </div>
    );
}