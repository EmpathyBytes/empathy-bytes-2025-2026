import React from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"

function ArticlePreview(props) {
    return (
    <div>
        <Link to={props.path}>
            <h2>{props.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
    </div>
    );
}

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default ArticlePreview;