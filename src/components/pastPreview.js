import React from "react";

import "../styles/components/articlePreview.css"

import Paper from '@mui/material/Paper';

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