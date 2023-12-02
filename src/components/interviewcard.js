import React from "react";

import { Link } from "gatsby";
import useMediaQuery from '@mui/material/useMediaQuery';
import "../styles/components/interviewcard.css";
import Grid from "@mui/material/Grid";
import { CardActionArea } from '@mui/material';


/**
 * This component is used on each collection page (../templates/collection.js) to 
 * house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */

// TODO: change styling to use css 

// const col = {
//     padding: 10,
// };

// const row = {
//     ["borderBottom"]: '5px solid #b3a369',
//     padding: 15,
//     ["font-family"]: 'Roboto',
// };

// const summary = {
//     ['line-clamp']: 3,
//     ['text-overflow']: 'ellipsis',
//     overflow: 'hidden',
// }

export default function InterviewCard(props) {
    const matches = useMediaQuery('(min-width:800px)');
    if (matches) {
        return (
            <section className="int_card">
                <Link to={props.url} style={{textDecoration:"none", color:"inherit"}}>
                    <CardActionArea>
                        <Grid 
                            container spacing = {2}
                            alignItems = "center"
                            justifyContent="space-between"
                        >
                            <Grid item xs={4}>
                                <img className="img-style" src={props.img}/>
                            </Grid>
                            <Grid item xs={8}>
                                <h2 className="ep_title">{props.title}</h2>
                                <p>By {props.author}</p>
                                <div className = "summary" dangerouslySetInnerHTML={{ __html: props.body}}/>
                                <p>{props.date}</p>
                            </Grid>

                        </Grid>
                    </CardActionArea>
                </Link>
            </section>
        );
    } else {
        return (
            <section className="int_card">
                <Link to={props.url} style={{textDecoration:"none", color:"inherit"}}>
                    <CardActionArea>
                        <Grid //component borrowed from MUI
                            container spacing={2}
                            alignItems="center"
                        >
                            <Grid item xs={4}>
                                    <img className="img-style" src={props.img}/>
                            </Grid>
                            <Grid item xs={8}>
                                <h2 className="ep_title">{props.title}</h2>
                                <p>By {props.author}</p>
                            </Grid>
                            <Grid item xs={12}>                
                                <div className="summary" dangerouslySetInnerHTML={{ __html: props.body}}/>
                                <p>{props.date}</p>               
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Link>
            </section>
        );
    }
    
}