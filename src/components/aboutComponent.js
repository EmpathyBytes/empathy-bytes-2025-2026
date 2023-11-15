import React from "react";
import "../styles/about.css"
import "../styles/all.css"
import Grid from '@mui/material/Unstable_Grid2';

function AboutComponent(props) {
    const members = props.members;

    return (

        <Grid container spacing={0} justifyContent="center">

            <Grid xs={8} style={{ padding: "0% 5% 1% 5%" }}>
                <h1 className="header-about">{props.subteam} Team</h1>
                <p className="paragraph-about padding-bottom-about">{props.about}</p>
            </Grid>

            <Grid xs={4}>

            </Grid>

            {members.map((item) => (
                item.field_current_member &&
                <Grid container xs={3.5} alignItems="center" justifyContent="center" direction="column">
                    <Grid xs={7}>
                        <div class="hex">
                            <div class="hex-background">
                                <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                <p className="paragraph-about">{item.title}</p>
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={5}>
                        <div className="center-text">
                            <p className="paragraph-about">{item.title}</p>
                        </div>
                    </Grid>
                </Grid>
            ))}


                <h3 className="about-nav-text">Past Members</h3>

                {members.map((item) => (
                    !item.field_current_member &&
                    <Grid container xs={3.5} alignItems="center" justifyContent="center" direction="column">
                        <Grid xs={7}>
                            <div class="hex">
                                <div class="hex-background">
                                    <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                    <p className="paragraph-about">{item.title}</p>
                                    <p className="paragraph-about">{item.title}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="center-text">
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </Grid>
                    </Grid>
                ))}
                </Grid>

    );
}

export default AboutComponent;