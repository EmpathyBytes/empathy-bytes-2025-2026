import React from "react";
import "../styles/about.css"
import "../styles/all.css"
import Grid from '@mui/material/Grid';

function AboutComponent(props) {
    const members = props.members;

    return (
        <div>
            {/* Subteam Description Section */}
            <Grid container spacing={0} justifyContent="center">
                <Grid item xs={11} md={10} lg={8}>
                    <div className="subteam-description-container">
                        <h1 className="header-about">{props.subteam} Team</h1>
                        <div className="horizontal-line"></div>
                        <p className="paragraph-about padding-bottom-about">{props.about}</p>
                    </div>
                </Grid>
            </Grid>

            {/* Current Members Section */}
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {members.map((item, index) => (
                    item.field_current_member && (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="member-grid-item">
                            <div className="hex">
                                <div className="hex-background">
                                    <img
                                        src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                            <div className="center-text">
                                <p className="paragraph-about member-name">{item.title}</p>
                            </div>
                        </Grid>
                    )
                ))}
            </Grid>

            <h3 className="past-members-header">Past Members</h3>

            {/* Alumni Section */}
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {members.map((item, index) => (
                    !item.field_current_member && (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="member-grid-item">
                            <div className="hex">
                                <div className="hex-background">
                                    <img
                                        src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                            <div className="center-text">
                                <p className="paragraph-about member-name">{item.title}</p>
                            </div>
                        </Grid>
                    )
                ))}
            </Grid>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <p>
                    <a href={props.learnMore} target="_blank" rel="noopener noreferrer" className="learn-more">
                        Learn More
                    </a>
                </p>
            </Grid>
        </div>
    );
}

export default AboutComponent;