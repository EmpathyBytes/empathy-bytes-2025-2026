// This the directory page which displays all the articles gotten from drupal - Jacob

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import ArticlePreview from "../components/articlePreview"

const topPadding = {
    padding: "10% 5% 10% 5%",
  };

const articlePadding = {
  padding: ".5% 0 .5% 0"
}

function Articles() {
    const data = useStaticQuery(graphql`
{
    allNodeArticle {
      nodes {
        path {
          alias
        }
        title
        id
        field_blurb
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
              <div>
                  {articles.map(article => (
                    <div style={articlePadding}>
                      <ArticlePreview 
                        key = {article.id}
                        title = {article.title}
                        path = {article.path.alias}
                        summary = {article.field_blurb}
                      />
                    </div>
                ))}
              </div>
            </div>
        </Layout>
    )
}

Articles.propTypes = {
    data: PropTypes.object.isRequired,
};


export default Articles;