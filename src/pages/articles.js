import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import ArticlePreview from "../components/articlePreview"

const topPadding = {
    padding: "10% 5% 10% 5%",
  };

function Articles() {
    const data = useStaticQuery(graphql`
{
    allNodeArticle {
      nodes {
        title
        id
        body {
          summary
        }
        path {
          alias
        }
      }
    }
  }
`);
console.log(data);
    const articles = data.allNodeArticle.nodes;

    return(
        <Layout>
            <div style={topPadding}>
            <h1>Articles</h1>
            {articles.map(article => (
                <ArticlePreview 
                key = {article.id}
                title = {article.title}
                path = {article.path.alias}
                summary = {article.body.summary}
            />
            ))}
            </div>
        </Layout>
    )
}

Articles.propTypes = {
    data: PropTypes.object.isRequired,
};


export default Articles;