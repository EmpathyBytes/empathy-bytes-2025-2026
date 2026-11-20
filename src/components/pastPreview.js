import React from "react";

import "../styles/components/articlePreview.css"

import Paper from '@mui/material/Paper';

// This component is utilized to display all of our past members of the VIP and team. These components are utilized in the /pastmembers page - Jacob

/**
 * A profile card for past team members.
 * * Features:
 * - Material UI 'Paper' base for elevation and depth.
 * - Custom hover transition that increases shadow intensity.
 * - Side-by-side layout for member imagery and biographical text.
 * * @component
 * @param {Object} props - The component props.
 * @param {string} props.image - The URL or file path for the member's profile picture.
 * @param {string} props.name - The full name of the past member.
 * @param {string} props.year - The years or timeframe the member was active (e.g., "Fall 2021 - Spring 2023").
 * @returns {JSX.Element} A Material UI Paper-wrapped profile card.
 */

function PastPreview(props) {

    const paperSX = {
        boxShadow: 3,
        "&:hover": {
          boxShadow: 8,
        },
      };


    return (
        <Paper className="paper-about" sx={paperSX}>
            <div className="card-past">
                <div>
                    <img className="past-image" src={props.image}></img>
                </div>

                <div className="card-text-div">
                    <h2 className="text-title">{props.name}</h2>
                    <p className="text-summary">{props.year}</p>
                </div>
            </div>
        </Paper>
    );
}

export default PastPreview;