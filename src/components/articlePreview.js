import React from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/components/articlePreview.css"

import Paper from '@mui/material/Paper';

function ArticlePreview(props) {

    const paperSX = {
        boxShadow: 3,
        "&:hover": {
          boxShadow: 8,
        },
      };


    return (
        <Link to={props.path} className="link">
            <Paper className="paper" sx={paperSX}>
                <div className="card">
                    <h2 className="text-title">{props.title}</h2>
                    <div className="text-summary" dangerouslySetInnerHTML={{__html: props.summary}}></div>
                </div>
            </Paper>
        </Link>
    );
}

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

ArticlePreview.defaultProps = {
    title: "Default Title",
    path: "https://www.google.com/",
    summary: "This is the default summary. This is where we can provide a brief overview of what is contained in each article.",
  }

export default ArticlePreview;