import React from "react";
import "../styles/about.css"
import "../styles/all.css"
import Grid from '@mui/material/Grid';
/**
 * Renders the About section for a specific subteam, including a description 
 * and a categorized grid of current and past members.
 * * @component
 * @param {Object} props - The component props.
 * @param {string} props.subteam - The name of the subteam (e.g., "Web", "Audio").
 * @param {string} props.about - A descriptive paragraph about the subteam's goals.
 * @param {string} props.learnMore - A URL string for the "Learn More" external link.
 * @param {Array<Object>} props.members - An array of member objects from the CMS.
 * @param {string} props.members[].title - The name of the team member.
 * @param {boolean} props.members[].field_current_member - Toggle to determine if the member is active or alumni.
 * @param {Object} props.members[].relationships - Object containing media relations.
 * @param {Object} props.members[].relationships.field_pfp - The profile picture object.
 * @param {Object} props.members[].relationships.field_pfp.uri - The URI object for the image.
 * @param {string} props.members[].relationships.field_pfp.uri.url - The relative path to the member's image.
 * * @returns {JSX.Element} The rendered About subteam section with member hex-grids.
 */

function AboutComponent(props) {
    const members = props.members;

    return (
        <div>
            <Grid container spacing={0} alignItems="center" justifyContent="center">

                <Grid item sm={12} md={8} style={{ padding: "0% 0% 1% 3%" }}>
                    <h1 className="header-about">{props.subteam} Team</h1>
                    <div className="horizontal-line" ></div>
                    <p className="paragraph-about padding-bottom-about">{props.about}</p>
                </Grid>

                <Grid xs={6}>

                </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                
                    {members.map((item) => ( //this is for current members
                    item.field_current_member &&
                    <div>
                        <div class="hex">
                            <div class="hex-background">
                                <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                <p className="paragraph-about">{item.title}</p>
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </div>
                        <div className="center-text">
                            <p className="paragraph-about">{item.title}</p>
                        </div>
                    </div>
                        
                ))}
                
            </Grid>

            <h3 style={{textAlign:"center", color:"white", padding:"1rem 0", fontSize:"3vw"}}>Past Members</h3>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {members.map((item) => ( //this is for alumni
                    !item.field_current_member &&
                    <div>
                            <div class="hex">
                                <div class="hex-background">
                                    <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                    <p className="paragraph-about">{item.title}</p>
                                    <p className="paragraph-about">{item.title}</p>
                                </div>
                            </div>
                            <div className="center-text">
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </div>
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