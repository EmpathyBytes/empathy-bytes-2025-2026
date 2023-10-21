import React from "react";

import { Link } from "gatsby";
import useMediaQuery from '@mui/material/useMediaQuery';
import "../styles/components/interviewcard.css";
import Grid from "@mui/material/Grid";
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

const summary = {
    ['line-clamp']: 3,
    ['text-overflow']: 'ellipsis',
    overflow: 'hidden',
}

export default function InterviewCard(props) {
    const matches = useMediaQuery('(min-width:600px)');
    if (matches) {
        return (
            <div class="row" style={row}>
                <div class="col" style={col}>
                    <img className="img-style" src={props.img}/>
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
    } else {
        return (
            <div className="card">
                <Grid
                    container spacing={2}
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <img className="img-style" src={props.img}/>
                    </Grid>
                    <Grid item xs={8}>
                        <h2>{props.title}</h2>
                        <p>By {props.author}</p>
                    </Grid>
                    <Grid item xs={12}>                
                        <div className="summary" dangerouslySetInnerHTML={{ __html: props.body}}/>
                        <Link to={props.url}>Learn More</Link>
                        <p>{props.date}</p>               
                    </Grid>
                </Grid>
            </div>
            
            
            // <div class="row" style={row}>
            //     <div class="col" style={col}>
            //         <img style ={img_style} src={props.img}/>
            //     </div>
            //     <div class="col" style={col}>
            //         <h2>{props.title}</h2>
            //         <p>By {props.author}</p>
            //         <Link to={props.url}>Learn More</Link>
            //         <p>{props.date}</p>
            //         <span class="border-bottom"></span>
            //     </div>
            // </div>
        );
    }
    
}