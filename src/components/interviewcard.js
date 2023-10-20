import React from "react";
import styles from "../styles/inProgress.css";
import { Link } from "gatsby";


/**
 * This component is used on each collection page (../templates/collection.js) to 
 * house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */

// TODO: change styling to use css 

const col = {
    padding: 10,
};

const row = {
    ["borderBottom"]: '5px solid #b3a369',
    padding: 15,
    ["font-family"]: 'Roboto',
};

const img_style = {
    ["border-radius"]: '10px',
    width: '20vw', 
    height: '20vw', 
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
                <Link to={props.url}>Learn More</Link>
                <p>{props.date}</p>
                <span class="border-bottom"></span>
            </div>
    </div>
    );
}