import React from "react";
import { Link } from "gatsby";
import { CardActionArea } from '@mui/material';

export default function InterviewCard(props) {
    return (
        <section className="redesigned-interview-card">
            <Link to={props.url} style={{ textDecoration: "none", color: "inherit" }}>
                <CardActionArea>
                    {/* Image Container */}
                    <div className="card-image-container">
                        <img className="card-image" src={props.img} alt={props.title} />
                    </div>
                    <div className="card-text-container">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-author">By {props.author}</p>
                        <div className="card-summary" dangerouslySetInnerHTML={{ __html: props.body }} />
                        <p className="card-date">{props.date}</p>
                    </div>
                </CardActionArea>
            </Link>
        </section>
    );
}